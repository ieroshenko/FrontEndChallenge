import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AlbumItemComponent]
})
export class AppModule { }
