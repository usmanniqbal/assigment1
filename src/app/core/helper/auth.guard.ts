import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorage } from './localStorage';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private localStorage: LocalStorage) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.localStorage.get('token')) {
            return true;
        }

        this.router.navigate(['login']); 
        return false;
    }
}