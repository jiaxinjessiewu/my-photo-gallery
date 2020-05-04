import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { UploaderComponent } from './uploader/uploader.component';
import { GalleryService } from './service/gallery.service';
import { SearchComponent } from './search/search.component';

/* 
jessie-gallery-flickr
Key:
d6b7d34c02597060ea986e43a19ddcbe

Secret:
0496e2e8ebcf147e
*/

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    UploaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
