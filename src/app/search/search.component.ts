import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../service/flickr.service';
import { Photo } from '../gallery/photo.model';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  images = []; 
  keyword : string = '';
  showPhotoModal : Boolean = false;
  constructor(private flickeService : FlickrService,) { }

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
  public getData(value): void {
    console.log("getData:",value) // welcome to stackoverflow!
}

}
