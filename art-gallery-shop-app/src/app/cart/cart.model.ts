import { ArtWork } from '../artwork-list/artwork.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Cart {

    artWorks: Array<ArtWork>;

    constructor() {}
}
