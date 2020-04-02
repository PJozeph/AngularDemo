import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth-service";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute,state)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then((autenticated: boolean) => {
                if (autenticated === true) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            });
    }

}