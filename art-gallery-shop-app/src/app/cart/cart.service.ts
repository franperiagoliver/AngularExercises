import { Injectable } from '@angular/core';
import { ArtWork } from '../artwork-list/artwork.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

    cart: Cart;

    constructor() {
        this.cart = new Cart();
        this.cart.artWorks = new Array<ArtWork>();
    }

    addToCart(artWork: ArtWork) {
        let ids: number[] = new Array<number>();
        this.cart.artWorks.forEach(element => {
            ids.push(element.id);
        });
        let artWorkTemp = Object.assign({}, artWork);
        if (artWork.quantity > 0 && artWork.stock !== 0 && artWork.quantity <= artWork.stock ) {
            artWork.stock -= artWork.quantity;
          if (ids.indexOf(artWorkTemp.id) !== -1) {
            for (let index = 0; index < this.cart.artWorks.length; index++) {
              if ( this.cart.artWorks[index].id === artWork.id ) {
                this.cart.artWorks[index].quantity += artWork.quantity;
              }
            }
          } else {
            this.cart.artWorks.push(artWorkTemp);
          }
        }
    }

    removeFromCart(artWork: ArtWork) {
        let index = this.cart.artWorks.indexOf(artWork);
        if (index !== -1) {
            this.cart.artWorks.splice(index, 1);
        }
    }

    totalArtWorksInCart() {
        return this.cart.artWorks.length;
    }


    totalArtWorksOfCart() {
        if ( this.cart.artWorks ) {
            return this.cart.artWorks.reduce((prev, current) => prev + current.quantity, 0);
        }
    }

}
