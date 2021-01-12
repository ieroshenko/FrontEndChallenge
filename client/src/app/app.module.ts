import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumItemComponent } from './components/album-item/album-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
