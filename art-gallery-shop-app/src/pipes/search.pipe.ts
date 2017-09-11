import { Pipe, PipeTransform } from '@angular/core';
import { ArtWork } from '../app/artwork-list/artwork.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(artWorks: ArtWork[], search: string): ArtWork[] {
    if (search && search.trim().length === 0) { return artWorks; }
    return artWorks.filter(artWork =>
      artWork.name.trim().toLowerCase().indexOf(search.trim().toLowerCase()) !== -1
    );
  }
}
