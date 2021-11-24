import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(["/page-not-found"]);
        } else {
            return true;
        }
        throw new Error("Method not implemented.");
    }




}