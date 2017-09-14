import { Pipe, PipeTransform } from '@angular/core';
import { ArtWork } from '../app/artwork-list/artwork.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(artWorks: ArtWork[], attribute: string, search: any): ArtWork[] {
    if (search && search.trim().length > 0) {
      return artWorks.filter(
        item => {
          if (item[attribute].toUpperCase().indexOf(search.toUpperCase()) !== -1) {
            return item[attribute];
          }
        }
      );
    } else {
      return artWorks;
    }
  }
}
