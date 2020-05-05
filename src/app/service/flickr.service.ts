import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface FlickrPhoto {
    farm: string;
    id: string;
    secret: string;
    server: string;
    title: string;
}

export interface FlickrOutput {
    photos: {
      photo: FlickrPhoto[];
    };
}

@Injectable({
    providedIn : 'root'
})
export class FlickrService {
    prevKeywork : string;
    currPage : number = 1;
    constructor(private http: HttpClient) {}

    searchKeywords(keyword : string) {
        if (this.prevKeywork == keyword) {
            this.currPage ++;
        } else {
            this.currPage = 1;
        }
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=18&page=${this.currPage}`;
        return this.http.get(url + params).pipe(map((res : FlickrOutput) => {
            const photosArray = [];
            res.photos.photo.forEach((p : FlickrPhoto) => {
                const photoObj = {
                    url : `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`,
                    title : p.title
                }
                photosArray.push(photoObj);
            });
            return photosArray;
        }))
    }
}