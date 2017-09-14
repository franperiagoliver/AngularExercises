import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ArtWork } from '../artwork.model';
import { ArtWorkListService } from '../artwork-list.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  @Input() artWork: ArtWork;

  constructor(private artWorkListService: ArtWorkListService, private cartService: CartService) { }

  ngOnInit() {}

  getImage(artWork: ArtWork) {
    return '../../assets/' + artWork.image;
  }

  getUpdateService(artWork: ArtWork) {
    this.artWorkListService.updateArtWork(artWork)
                           .subscribe();
  }

  addArtWork(artWork: ArtWork) {
    this.cartService.addToCart(artWork);
  }

  increaseQuantity(artWork: ArtWork) {
    if ( artWork.stock !== 0 && artWork.stock > artWork.quantity ) { artWork.quantity++; }
  }

  decreaseQuantity(artWork: ArtWork) {
    if ( artWork.quantity > 0 ) { artWork.quantity--; }
  }

  totalArtworksOfCart() {
    return this.cartService.totalArtWorksOfCart();
  }

  isEditable(artWork: ArtWork) {
    if (artWork.editable) {
      artWork.editable = false;
      this.editArtWork(artWork);
    } else {
      artWork.editable = true;
    }
  }

  editArtWork(artWork: ArtWork) {
    this.artWorkListService.updateArtWork(artWork)
    .subscribe();
  }

}
