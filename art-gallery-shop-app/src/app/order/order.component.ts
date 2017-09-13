import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService) {
   }

  ngOnInit() {
  }

}
