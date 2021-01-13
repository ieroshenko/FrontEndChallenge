import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../models/Album";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.sass']
})
export class AlbumItemComponent implements OnInit {
  @Input() album!: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
