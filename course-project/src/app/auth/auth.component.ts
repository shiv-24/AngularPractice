import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthUserService, AuthResposneData } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResposneData>;

    this.isLoading = true;

    if (this.isLogin) {
      authObs = this.authUserService.login(email, password);
    } else {
      authObs = this.authUserService.signup(email, password);
    }
    authObs.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(["/recipes"]);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }

  onClose() {
    this.error = null;
  }
}
