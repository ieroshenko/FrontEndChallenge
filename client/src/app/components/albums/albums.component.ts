import { Component, OnInit } from '@angular/core';
import {Album} from "../../models/Album";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  albumsToBeDisplayed: Album[] = [];

  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
    this.albumService.getTopOneHundredAlbums().subscribe(topAlbumsResponse => {
        this.albums = topAlbumsResponse.feed.entry.map((entry: any) => new Album(entry));
        this.albumsToBeDisplayed = [...this.albums];
    });
  }

  searchForAlbums(searchInput: string):void {
    this.albumsToBeDisplayed = this.albums.filter((album: Album) => {
      return album.name.substring(0, searchInput.length).toLowerCase() == searchInput.toLowerCase();
    });
  }
}
