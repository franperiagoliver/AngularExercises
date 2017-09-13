import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

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

const appRoutes: Routes = [
  {path: 'art-gallery', component: ArtworkListComponent, pathMatch: 'full'},
  {path: 'order', component: OrderComponent},
  { path: '',
  redirectTo: '/art-gallery',
  pathMatch: 'full'
}
];

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
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArtWorkListService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
