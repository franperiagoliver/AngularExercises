import { Injectable } from '@angular/core';
import { ArtWork } from '../artwork-list/artwork.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

    artWorks: Array<ArtWork>;
    cart: Cart;

    constructor() {
        Cart.getInstance();
        this.artWorks = new Array<ArtWork>();
    }

    addToCart(artWork: ArtWork) {
        this.cart.artWorks.push(artWork);
    }

    removeToCart(artWork: ArtWork, artWorks: Array<ArtWork>) {
        if (!artWorks) {
            return null;
        }
        let index = artWorks.indexOf(artWork);
        if (index > -1) {
            artWorks.splice(index, 1);
        }
    }

    totalArtWorksInCart() {
        return this.cart.artWorks.length;
      }
}
