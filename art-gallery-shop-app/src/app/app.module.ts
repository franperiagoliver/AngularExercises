import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
