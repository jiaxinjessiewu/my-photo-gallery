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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PhotoModalComponent } from './search/photo-modal/photo-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* 
jessie-gallery-flickr
Key:
d6b7d34c02597060ea986e43a19ddcbe

Secret:
0496e2e8ebcf147e

my-photo-gallery
Key:
287f2c081cee1f57e86b01c164ef9153

Secret:
c888c9773c2124de

*/

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    UploaderComponent,
    SearchComponent,
    PhotoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
