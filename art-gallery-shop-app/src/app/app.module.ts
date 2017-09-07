import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
