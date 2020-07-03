import { Component, OnInit } from "@angular/core";
import { AuthUserService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthUserService) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
