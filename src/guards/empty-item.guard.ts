import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/services/cart-service.service';
import { AuthGuard } from './auth.guard';

@Injectable({
    providedIn: 'root'
})
export class EmptyItemGuard implements CanActivate {
    constructor(private readonly cart: CartServiceService, private readonly router: Router, private readonly auth: AuthGuard, private readonly route: ActivatedRoute) { }
    canActivate(): boolean {
        if (this.auth.canActivate()) {
            if (this.cart.orderId) {
                return true;
            }
            else {
                this.router.navigate(['empty-cart']);
                return false;
            }
        }
        else {
            return false;
        }
    }
}