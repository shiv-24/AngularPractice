import { CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    
    constructor (private authService: AuthService, private router: Router){}

    
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.canActivate(childRoute,state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        // throw new Error("Method not implemented.");
        return this.authService.isAuthenticated()
        .then(
            (authenticated:boolean)=>{
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/']);
                }
            }
        )
    }

}