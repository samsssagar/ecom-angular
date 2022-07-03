import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/services/cart-service.service';
import { ProductService } from 'src/services/product.service';
import { Product } from '../product-detail/types/product.types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myForm: FormGroup;
  productid!: string;
  product!: Product;
  price!: number;
  isLoaded: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private fb: FormBuilder, private readonly router: Router, private readonly cart: CartServiceService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      address2: [''],
      contact: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
      "cc-name": ['', [Validators.required]],
      "cc-number": ['', [Validators.required]],
      "cc-cvv": ['', [Validators.required]],
      "cc-month": ['', [Validators.required, Validators.pattern('^(0?[1-9]|1[012])$')]],
      "cc-year": ['', [Validators.required]]
    });
    console.log(this.myForm);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productid = param.productid;
      if (this.cart.orderId === this.productid) {
        this.getProductDetailsById();
      } else {
        this.router.navigate(['403']);
      }
    })
  }

  getProductDetailsById() {
    this.productService.getAllProducts().subscribe((result: Product[]) => {
      const res = result.find((r) => r.id.toString() === this.productid);
      if (res) {
        this.product = res;
        this.price = this.product.discountPercent === 0 ? this.product.originalPrice : this.calcPrice(this.product.originalPrice, this.product.discountPercent);
        this.isLoaded = true;
      }
    });
  }

  private calcPrice(orgPrice: number, discount: number) {
    return (orgPrice * (discount / 100));
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {

    }
  }

  onHomePageClick() {
    this.router.navigate([""]);
  }
}
