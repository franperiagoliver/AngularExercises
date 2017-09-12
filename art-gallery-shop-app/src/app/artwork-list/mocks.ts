import { ArtWork } from './artwork.model';

export const ARTWORKS: ArtWork[] = [{
    'id': 1,
    'name': 'The Guernica',
    'image': 'guernica.jpg',
    'type': 'Picture',
    'medium': 'Oil on canvas',
    'description': 'A mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937.',
    'stock': 1,
    'price': 5000.57,
    'selected': true,
    'quantity': 0,
    'editable': false
  },
  {
    'id': 2,
    'name': 'Death of the Virgin',
    'image': 'deathvirgin.jpg',
    'type': 'Picture',
    'medium': 'Oil on canvas',
    'description': 'A painting completed by the Italian Baroque master Caravaggio.',
    'stock': 3,
    'price': 7010.99,
    'selected': false,
    'quantity': 0,
    'editable': true
  },
  {
    'id': 3,
    'name': 'Ecce Homo',
    'image': 'eccehomo.jpg',
    'type': 'Picture',
    'medium': 'Fresco',
    'description': 'The best work arround the world.',
    'stock': 0,
    'price': 9999.52,
    'selected': false,
    'quantity': 0,
    'editable': true
  }];
