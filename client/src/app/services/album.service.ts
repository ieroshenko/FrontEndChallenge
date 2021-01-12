import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Album} from "../models/Album";
import {TopAlbumsResponse} from "../models/TopAlbumsResponse";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  topAlbumsUrl:string = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'

  constructor(private http:HttpClient) { }

  // get top 100 albums
  getTopOneHundredAlbums(): Observable<TopAlbumsResponse> {
    return this.http.get<TopAlbumsResponse>(this.topAlbumsUrl);
  }

}
