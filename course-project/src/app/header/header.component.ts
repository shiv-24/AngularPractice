import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthUserService } from "../auth/auth.service";
import { Subscription } from "rxjs";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Output() selectedComponentIndex = new EventEmitter<number>();

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthUserService
  ) {}

  private userSub: Subscription;
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  // onSelectedItem(itemSelected:number){
  //   this.selectedComponentIndex.emit(itemSelected);
  // }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSave() {
    this.dataStorageService.saveRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
