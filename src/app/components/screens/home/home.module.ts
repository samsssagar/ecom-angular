import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { HomeComponent } from './home.component';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import { NavbarModule } from '../navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CoreModule,
        ProductDetailModule,
        NavbarModule,
        CommonModule,
        RouterModule
    ]
})
export class HomeModule { }