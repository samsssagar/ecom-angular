import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-empty-error',
  templateUrl: './cart-empty-error.component.html',
  styleUrls: ['./cart-empty-error.component.css']
})
export class CartEmptyErrorComponent implements OnInit {

  constructor(private readonly location: Location) { }

  ngOnInit(): void {
  }

  onClick() {
    this.location.back();
  }

}
