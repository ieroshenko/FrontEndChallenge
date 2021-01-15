import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../models/Album";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})
export class AlbumItemComponent implements OnInit {
  @Input() album!: Album;
  likeIconImage: string | undefined;
  numberOfLikes: number = 0;

  constructor(private modalService: NgbModal, private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.updateImageIcon();
  }

  updateLikeAlbumStatus(): void {
    this.album.isLikedByUser = !this.album.isLikedByUser;
    this.updateImageIcon();
    // update number of likes on UI
    // and backend
    if (this.album.isLikedByUser) {
      this.numberOfLikes++;
      this.albumService.likeAlbum(this.album.name).subscribe(response => console.log(response));
    } else {
      this.numberOfLikes--;
      this.albumService.unlikeAlbum(this.album.name).subscribe(response => console.log(response));
    }
  }

  updateImageIcon(): void {
    this.likeIconImage = this.album.isLikedByUser ? "/assets/heart_red.png" : "/assets/heart_white.png";
  }

  onAlbumClicked(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl'});
    this.albumService.getNumberOfLikesForAlbum(this.album.name).subscribe((response) => this.numberOfLikes = response.numLikes);
  }
}
