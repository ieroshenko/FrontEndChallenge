import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {AppComponent} from './app.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {AppRoutingModule} from './app-routing.module';
import {AlbumItemComponent} from './components/album-item/album-item.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {IsLoadingModule} from "@service-work/is-loading";

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
    FormsModule,
    IsLoadingModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
