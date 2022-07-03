import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CartEmptyErrorComponent } from './cart-empty-error/cart-empty-error.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent, ComingSoonComponent, NotFoundComponent, ForbiddenComponent, CartEmptyErrorComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }