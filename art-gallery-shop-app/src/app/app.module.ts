import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { ArtWorkListService } from './artwork-list/artwork-list.service';
import { HttpModule } from '@angular/http';
import { ArtworkComponent } from './artwork-list/artwork/artwork.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkListComponent,
    SearchPipe,
    ArtworkComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2FilterPipeModule,
    HttpModule
  ],
  providers: [
    ArtWorkListService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
