import { ArtWork } from './artwork.model';

export const ARTWORKS: ArtWork[] = [{
    'id': 1,
    'name': 'The Guernica',
    'image': 'guernica.jpg',
    'type': 'Picture',
    'medium': 'Oil on canvas',
    'description': 'Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937.',
    'stock': 1,
    'price': 5000.57,
    'selected': true,
    'quantity': 0
  },
  {
    'id': 2,
    'name': 'Death of the Virgin',
    'image': 'deathvirgin.jpg',
    'type': 'Picture',
    'medium': 'Oil on canvas',
    'description': 'Death of the Virgin (1606) is a painting completed by the Italian Baroque master Caravaggio.',
    'stock': 3,
    'price': 7010.99,
    'selected': false,
    'quantity': 0
  },
  {
    'id': 3,
    'name': 'Ecce Homo',
    'image': 'eccehomo.jpg',
    'type': 'Picture',
    'medium': 'Fresco',
    'description': 'a fresco painted circa 1930 by the Spanish painter Elías García Martínez depicting Jesus crowned with thorns.',
    'stock': 0,
    'price': 9999.52,
    'selected': false,
    'quantity': 0
  }];
