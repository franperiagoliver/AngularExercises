import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ArtWork } from '../artwork.model';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  @Input artWork: ArtWork;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addArtWork(artWork: ArtWork) {
    this.cartService.addToCart(artWork);
  }

  addQuantity(artWork: ArtWork) {
    if ( artWork.stock !== 0 && artWork.stock > artWork.quantity ) { artWork.quantity++; }
  }

  removeQuantity(artWork: ArtWork) {
    if ( artWork.quantity > 0 ) { artWork.quantity--; }
  }

  lengthOfCart() {
    this.cartService.lenghtOfCart();
  }



}
