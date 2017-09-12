import { ArtWork } from './artwork.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ArtWorkListService {

    itemsUrl = 'http://localhost:3000/artwork-list';

    constructor(private http: Http) { }

    getItemList(): Observable<ArtWork[]> {
        return this.http.get('http://localhost:3000/artwork-list')
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );

    }

    updateArtWork(artWork: ArtWork): Observable<ArtWork[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`${this.itemsUrl}/${artWork['id']}`, artWork, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
    }
}
