import { Injectable } from '@angular/core';
import { ArtWork } from '../artwork-list/artwork.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

    cart: Cart;

    constructor() {
        this.cart = Cart.getInstance();
    }

    addToCart(artWork: ArtWork) {
        let index = this.cart.artWorks.indexOf(artWork);
        if (index !== -1) {
            this.cart.artWorks[index].quantity += artWork.quantity;
        } else {
            this.cart.artWorks.push(artWork);
        }
    }

    removeToCart(artWork: ArtWork) {
        let index = this.cart.artWorks.indexOf(artWork);
        if (index !== -1) {
            this.cart.artWorks.splice(index, 1);
        }
    }

    totalArtWorksInCart() {
        return this.cart.artWorks.length;
    }

    getPriceOfItem(artwork: ArtWork) {
        let total = (artwork.price) * (artwork.quantity);
        return total;
    }

    totalAmount() {
        return this.cart.artWorks.reduce( (prev, current) => prev + current.price, 0);
    }

}
