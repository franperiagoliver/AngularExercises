import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { ArtWork } from '../artwork-list/artwork.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

  removeFromCart(artWork: ArtWork) {
    const i = this.cart.artWorks.indexOf(artWork, 0);
    if (i > -1) {
      this.cart.artWorks.splice(i, 1);
    }
  }

}
