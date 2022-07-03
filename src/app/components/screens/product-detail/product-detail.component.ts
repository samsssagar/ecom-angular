import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartServiceService } from 'src/services/cart-service.service';
import { ImageService } from 'src/services/image.service';
import { LocalStoreService } from 'src/services/local-store.service';
import { ProductService } from 'src/services/product.service';
import { Product } from './types/product.types';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  isLoaded: boolean = false;
  price!: number;
  displayStyle = "none";
  cartTotal: number = 1;
  cartItems: any[] = [];
  totalPrice!: number;
  sizeSelected: number = 7;
  isSizeSelected: boolean = false;
  productid!: string;
  iconUrl!: SafeResourceUrl;

  constructor(private readonly router: Router, private productService: ProductService, private readonly localStore: LocalStoreService, private readonly imageService: ImageService) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail() {
    this.productService.getAllProducts().subscribe((result: Product[]) => {
      this.imageService.loadImage(result[0].imageUrl).subscribe((res) => {
        this.iconUrl = this.imageService.sanitizedBase64Url(res);
        this.product = result[0];
        this.isLoaded = true;
        this.price = result[0].discountPercent === 0 ? result[0].originalPrice : this.calcPrice(result[0].originalPrice, result[0].discountPercent);
        this.totalPrice = this.price;
        this.productid = result[0].id.toString();
      });
    });
  }

  onAddToCart() {
    this.localStore.addItem('order-id', this.productid);
    //this.cartService.setOrdersInCart(this.productid);
    this.displayStyle = "block";
  }

  onBuyNow() {
    this.localStore.addItem('order-id', this.productid);
    //this.cartService.setOrdersInCart(this.productid);
    this.router.navigate(["checkout", this.productid]);
  }

  onCancel() {
    this.displayStyle = "none";
  }

  changeDisplayStyle(res: string) {
    this.displayStyle = res;
  }

  onSelectSize(res: any) {
    this.isSizeSelected = true;
    this.sizeSelected = res.value;
  }

  onRemoveItem() {

  }

  private calcPrice(orgPrice: number, discount: number) {
    return (orgPrice * (discount / 100));
  }
}
