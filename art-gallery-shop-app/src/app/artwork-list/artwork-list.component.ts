import { Component, OnInit } from '@angular/core';
import { ArtWork } from './artwork.model';
import { ARTWORKS } from './mocks';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  myArtWorks: ArtWork[];

  constructor() { }

  ngOnInit() {
    this.myArtWorks = ARTWORKS;
  }

  totalArtWorks() {
    let result = 0;
    for (let artWork of this.myArtWorks) {
      result += artWork.stock;
    }
    return result;
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

  /*
  totalItems(){
    return this.myArtWorks.reduce(function(prev, current)) { return prev + current.stock; }, 0);
  }
  */

  /*
  totalItems(){
    return this.myArtWorks.reduce( (prev, current) => prev + current.stock, 0);
  }
  */
}
