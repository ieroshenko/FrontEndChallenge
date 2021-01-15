import { Component, OnInit } from '@angular/core';
import {Album} from "../../models/Album";
import {AlbumService} from "../../services/album.service";
import {IsLoadingService} from "@service-work/is-loading";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  albumsToBeDisplayed: Album[] = [];

  constructor(private albumService:AlbumService, private isLoadingService: IsLoadingService) { }

  ngOnInit(): void {
    this.isLoadingService.add();
    this.albumService.getTopOneHundredAlbums().subscribe(topAlbumsResponse => {
        this.albums = topAlbumsResponse.map((entry: any) => new Album(entry));
        this.albumsToBeDisplayed = [...this.albums];

        this.isLoadingService.remove();
    });
  }

  searchForAlbums(searchInput: string):void {
    this.albumsToBeDisplayed = this.albums.filter((album: Album) => {
      return album.name.substring(0, searchInput.length).toLowerCase() == searchInput.toLowerCase();
    });
  }
}
