import { Component, OnInit } from '@angular/core';
import { Photo } from './photo.model';
import { Subscription } from 'rxjs';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos : Photo[];
  subscription : Subscription;
  constructor(private galleryService : GalleryService) { }

  ngOnInit(): void {
    this.subscription = this.galleryService.galleryChanged
    .subscribe((photos : Photo[]) => {
      this.photos = photos;
    })
    this.photos = this.galleryService.getPhotos();
  }

}
