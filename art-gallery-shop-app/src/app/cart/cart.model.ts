import { ArtWork } from '../artwork-list/artwork.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Cart {

    private static instance: Cart;
    artWorks: Array<ArtWork>;

    private constructor() {}

    public static getInstance() {
        if (this.instance === null || this.instance === undefined ) {
            this.instance = new Cart();
            this.instance.artWorks = new Array<ArtWork>();
        }
        return this.instance;
    }

}
