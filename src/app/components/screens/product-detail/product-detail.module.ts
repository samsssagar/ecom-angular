import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


@NgModule({
    declarations: [ProductDetailComponent],
    imports: [
        CommonModule
    ],
    exports: [ProductDetailComponent]
})
export class ProductDetailModule { }