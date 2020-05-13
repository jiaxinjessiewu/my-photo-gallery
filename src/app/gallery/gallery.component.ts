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

  // photos : Photo[];
  photos : any = {};
  modalPhotos : Photo[] = [];
  subscription : Subscription;
  openModal : Boolean = false;
  photoPointer : number;
  constructor(private galleryService : GalleryService) { }

  ngOnInit(): void {
    this.subscription = this.galleryService.galleryChanged
    .subscribe((photos : Photo[]) => {
      this.photos = photos;
    })
    this.galleryService.getPhotos()
    .toPromise()
      .then(res => {
        this.photos = res;
      });
    
  }
  onOpenModal(image, images) {
    for (let i in images) {
      this.modalPhotos.push(images[i])
    }
    var imageModalPointer;
    for (var i = 0; i < this.modalPhotos.length; i++) {
          if (image.url === this.modalPhotos[i].url) {
            imageModalPointer = i;
            break;
          }
      }
    this.openModal = true;
    this.photoPointer = imageModalPointer;
  }
  closePhotoModal() {
    this.openModal = false;
  }
  onDeletePhoto(key : string) {
    this.galleryService.deletePhoto(key);
  }
}
