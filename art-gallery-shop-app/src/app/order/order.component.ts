import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { Order } from './order.model';
import { ShippingInformation } from '../shipping-information/shipping-information.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  shippingInformation: ShippingInformation;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    if (this.order == null) {
      this.order = new Order();
      this.order.ordered = false;
    }
    return this.order;
  }

  totalAmount() {
    return this.cartService.cart.artWorks.reduce((prev, current) => prev + (current.price * current.quantity), 0);
  }

  getShippingInformation(shippingInformation: ShippingInformation) {
    this.shippingInformation = shippingInformation;
    this.order.ordered = true;
  }

}
