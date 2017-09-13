import { Component, OnInit } from '@angular/core';
import { ArtWork } from './artwork.model';
import { ARTWORKS } from './mocks';
import { ArtWorkListService } from './artwork-list.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart.model';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  myArtWorks: ArtWork[];
  artWorkFilter = '';
  cart: Cart;

  constructor(private artWorkListService: ArtWorkListService, private cartService: CartService) {
    this.cart = Cart.getInstance();
  }

  ngOnInit() {
    this.artWorkListService.getItemList()
                           .subscribe(myArtWorks => this.myArtWorks = myArtWorks);
  }

  totalArtWorks() {
    return this.myArtWorks ? this.myArtWorks.reduce( (prev, current) => prev + current.stock, 0) : 0 ;
  }

  getImage(artWork: ArtWork) {
    return '../assets/' + artWork.image;
  }

  increaseQuantity(artWork: ArtWork) {
    artWork.quantity++;
    artWork.stock--;
  }

  decreaseQuantity(artWork: ArtWork) {
    artWork.quantity--;
    artWork.stock++;
  }

  getUpdateService(artWork: ArtWork) {
    this.isEditable(artWork);
    this.artWorkListService.updateArtWork(artWork)
                           .subscribe();
  }

  isEditable(artWork: ArtWork) {
    if (artWork.editable) {
      artWork.editable = false;
    } else {
      artWork.editable = true;
    }
  }

  addArtWork(artWork: ArtWork) {
    this.cartService.addToCart(artWork);
  }

  totalArtWorksInCart() {
    return this.cart.artWorks.length;
  }

  // showKey(event) {
  //   alert(event.keyCode);
  // }

  // getCoord(event) {
  //   console.log(event.clientX + ', ' + event.clientY);
  // }

  /*
  totalItems(){
    return this.myArtWorks.reduce(function(prev, current)) { return prev + current.stock; }, 0);
  }
  */

  /*
  totalArtWorks() {
    let result = 0;
    for (let artWork of this.myArtWorks) {
      result += artWork.stock;
    }
    return result;
  }
  */
}
