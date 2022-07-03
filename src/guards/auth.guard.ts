import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private routes: Router) { }
    canActivate(): boolean {
        if (localStorage.getItem('loggedIn') != null) {
            return true;
        }
        else {
            this.routes.navigate(['login']);
            return false;
        }
    }
}