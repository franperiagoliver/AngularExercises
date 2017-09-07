import { Component } from '@angular/core';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Gallery Shop';
  myArtWork = {
    'id' : 1,
    'name' : 'The Guernica',
    'type' : 'Picture',
    'medium' : 'Oil on canvas',
    'description' : 'Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937.',
    'stock' : 1
  };
}
