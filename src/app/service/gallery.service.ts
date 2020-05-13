import { Photo } from '../gallery/photo.model';
import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class GalleryService {
    galleryChanged = new Subject<any>();
    private gallery : Photo[];
    private gallery_store = {};
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
            title : photos[i].title,
            description: photos[i].description ? photos[i].description : ''
          }
          this.gallery.push(photoObj)
          this.gallery_store[i] = photoObj;
        }
        return this.gallery_store;
      })
      );
    }
    addPhoto(photo : Photo){
      return this.http.post(
        'https://my-photo-gallery-e66ad.firebaseio.com/photos.json',
        photo
      );
    }
    deletePhoto(key : string) {
      delete this.gallery_store[key]
      return this.http.delete(`https://my-photo-gallery-e66ad.firebaseio.com/photos/${key}.json`)
      .subscribe(res => {
        this.galleryChanged.next(this.gallery_store);
      })
    }
}