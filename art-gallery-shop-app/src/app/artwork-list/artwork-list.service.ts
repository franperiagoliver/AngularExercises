import { ArtWork } from './artwork.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ArtWorkListService {

    constructor(private http: Http) { }

    getItemList(): Observable<ArtWork[]> {
        return this.http.get('http://localhost:3000/artwork-list')
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );

    }
}
