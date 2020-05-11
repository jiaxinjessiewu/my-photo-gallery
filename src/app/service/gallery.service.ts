import { Photo } from '../gallery/photo.model';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class GalleryService {
    galleryChanged = new Subject<Photo[]>();
    private gallery : Photo[];
    constructor (private http: HttpClient) {}
    getPhotos(){
      this.gallery = [];
      return this.http.get<Photo[]>(
        'https://my-photo-gallery-e66ad.firebaseio.com/photos.json'
      )
      .pipe(map(photos => {
        for (let i in photos) {
          let photoObj : Photo = {
            url : photos[i].url,
            name : photos[i].name,
            description: photos[i].description ? photos[i].description : ''
          }

          this.gallery.push(photoObj)
        }
        return this.gallery.slice();
      })
      );
    }
    addPhoto(photo : Photo){
        this.http.post(
          'https://my-photo-gallery-e66ad.firebaseio.com/photos.json',
          photo
        )
        .subscribe(res => {
          console.log("addPhoto : ",res)
        })
    }
}