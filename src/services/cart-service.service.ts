import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private readonly localStore: LocalStoreService) { }

  get orderId(): string {
    const id = this.localStore.getItem('order-id');
    return id ? id : '';
  }

  setOrdersInCart(value: string) {
    var arrToModify = [];
    if (this.localStore.getItem("orders") != null) {
      var res: any = this.localStore.getItem("orders");
      arrToModify = JSON.parse(res);
      arrToModify.push(value);
      this.localStore.addItem("orders", JSON.stringify(arrToModify));
    } else {
      arrToModify.push(value);
      this.localStore.addItem("orders", JSON.stringify(arrToModify));
    }
  }

  getOrdersInCart() {
    return this.localStore.getItem("orders");
  }
}
