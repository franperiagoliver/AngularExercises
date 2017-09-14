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
  cart: Cart;

  constructor(private artWorkListService: ArtWorkListService, private cartService: CartService) { }

  ngOnInit() {
    this.artWorkListService.getItemList()
      .subscribe(myArtWorks => this.myArtWorks = myArtWorks);
      this.cart = new Cart();
      this.cart.artWorks = new Array<ArtWork>();
  }

  totalStockOfArtWorks() {
    return this.myArtWorks ? this.myArtWorks.reduce((prev, current) => prev + current.stock, 0) : 0;
  }

  isSelected(id: number) {
    if (this.myArtWorks) {
      this.myArtWorks.forEach(artWork => {
        (artWork.id === id) ?
          (artWork.selected === true) ?
            artWork.selected = false :
            artWork.selected = true :
          0;
      });
    }
  }

  totalSelected() {
    let count = 0;
    if (this.myArtWorks) {
      this.myArtWorks.forEach(artWork => {
        if (artWork.selected === true) { count++; }
      });
    }
    return count;
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

  totalArtworksOfCart() {
    return this.cartService.totalArtWorksOfCart();
  }

  /* Events - Output
  showKey(event) {
    alert(event.keyCode);
  }

  getCoord(event) {
    console.log(event.clientX + ', ' + event.clientY);
  }
  */

  /* Other forms of calculating total art works in stock

  totalArtWorks(){
    return this.myArtWorks.reduce(function(prev, current)) { return prev + current.stock; }, 0);
  }

  totalArtWorks() {
    let result = 0;
    for (let artWork of this.myArtWorks) {
      result += artWork.stock;
    }
    return result;
  }
  */
}
