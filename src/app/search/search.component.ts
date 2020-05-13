import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../service/flickr.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  images = []; 
  keyword : string = '';
  openModal : Boolean = false;
  photoPointer : number;
  constructor(private flickeService : FlickrService) { }

  ngOnInit(): void {
  }

  searchPhotos (event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickeService.searchKeywords(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }
  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickeService.searchKeywords(this.keyword)
      .toPromise()
      .then(res => {
        this.images = this.images.concat(res);
      })
    }
  }
  onOpenModal(image, images) {
    var imageModalPointer;
    for (var i = 0; i < images.length; i++) {
          if (image.url === images[i].url) {
            imageModalPointer = i;
            break;
          }
      }
    this.openModal = true;
    this.images = images;
    this.photoPointer  = imageModalPointer;
  }
  closePhotoModal() {
    this.openModal = false;
  }

}
