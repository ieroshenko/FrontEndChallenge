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

  // get top 100 albums
  getTopOneHundredAlbums(): Observable<[]> {
    return this.http.get<[]>(this.topAlbumsUrl);
  }

  likeAlbum(label: string) {
    return this.http.post<any>(this.topAlbumsUrl + '/like', {albumName: label}, httpOptions);
  }

  unlikeAlbum(label: string) {
    return this.http.delete<any>(this.topAlbumsUrl + '/like' + "/" + label, httpOptions);
  }

  getNumberOfLikesForAlbum(label: string) {
    return this.http.get<any>(this.topAlbumsUrl + '/likes' + "/" + label, httpOptions);
  }
}
