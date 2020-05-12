import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface FlickrPhoto {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: string;
    title: string;
}

export interface FlickrSearchOutput {
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
        this.prevKeywork = keyword;
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=18&page=${this.currPage}`;
        return this.http.get(url + params)
        .pipe(map((result : FlickrSearchOutput) => {
            let photos = result.photos.photo.map(p => {
                let photoObj = {
                    url : `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`,
                    title : p.title
                }
                return photoObj;
            })
            return photos;
        }))
    }
}