import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from "../../../models/Album";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() searchAlbum: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchBarTextChanged(value: any) {
    this.searchAlbum.emit(value);
  }
}
