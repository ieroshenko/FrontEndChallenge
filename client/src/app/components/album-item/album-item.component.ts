import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../models/Album";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})
export class AlbumItemComponent implements OnInit {
  @Input() album!: Album;
  favIconImage: string | undefined;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.updateImageIcon();
  }

  updateFavoriteItemSelection(): void {
    this.album.isFavorite = !this.album.isFavorite;
    this.updateImageIcon();

    // add to fav/delete on backend
  }

  updateImageIcon(): void {
    this.favIconImage = this.album.isFavorite ? "/assets/heart_red.png" : "/assets/heart_white.png";
  }


  onAlbumClicked(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl'});
  }
}
