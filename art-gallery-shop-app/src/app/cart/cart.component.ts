import { Component, OnInit} from '@angular/core';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { ArtWork } from '../artwork-list/artwork.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

}
