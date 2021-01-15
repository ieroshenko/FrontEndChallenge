import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Album} from "../models/Album";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  topAlbumsUrl:string = '/api/albums'

  constructor(private http:HttpClient) { }

  // gets top 100 albums
  getTopOneHundredAlbums(): Observable<[]> {
    return this.http.get<[]>(this.topAlbumsUrl);
  }

  // function which allows to like an album on the back-end
  likeAlbum(label: string) {
    return this.http.post<any>(this.topAlbumsUrl + '/like', {albumName: label}, httpOptions);
  }

  // function unlikes previously like album on the back-end
  unlikeAlbum(label: string) {
    return this.http.delete<any>(this.topAlbumsUrl + '/like' + "/" + label, httpOptions);
  }

  // function gets number of likes for the album from back-end
  getNumberOfLikesForAlbum(label: string) {
    return this.http.get<any>(this.topAlbumsUrl + '/likes' + "/" + label, httpOptions);
  }
}
