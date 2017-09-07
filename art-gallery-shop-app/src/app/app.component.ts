import { Component } from '@angular/core';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Gallery Shop';
  myArtWorks = [{
    'id' : 1,
    'name' : '"The Guernica"',
    'type' : 'Picture',
    'medium' : 'Oil on canvas',
    'description' : 'Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937.',
    'stock' : 1,
    'price' : 5000.57,
  },
  {
    'id' : 2,
    'name' : '"Death of the Virgin"',
    'type' : 'Picture',
    'medium' : 'Oil on canvas',
    'description' : 'Death of the Virgin (1606) is a painting completed by the Italian Baroque master Caravaggio.',
    'stock' : 3,
    'price' : 7010.99,
  },
  {
      'id' : 3,
      'name' : '"David"',
      'type' : 'Sculpture',
      'medium' : 'Marble statue',
      'description' : 'Masterpiece of Renaissance sculpture created between 1501 and 1504 by Michelangelo.',
      'stock' : 0,
      'price' : 0,
  },
  {
    'id' : 4,
    'name' : '"Ecce Homo"',
    'type' : 'Picture',
    'medium' : 'Fresco',
    'description' : 'a fresco painted circa 1930 by the Spanish painter Elías García Martínez depicting Jesus crowned with thorns.',
    'stock' : 10,
    'price' : 9999.52
  }];

  totalArtWorks() {
    let result = 0;
    for (let artWork of this.myArtWorks) {
        result += artWork.stock;
    }
    return result;
  }
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
