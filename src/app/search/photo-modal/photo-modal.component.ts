import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {

  public opened:boolean = false;
  public currentPointer:number;
  public photo : {
    title: string,
    url: string
  }
  @Input() photos : {
    title : string,
    url   : string
  }[];
  @Input() photoPointer : number;
  @Output() public closePhotoModal = new EventEmitter<string>();
  
  constructor(public element: ElementRef) { }

  ngOnInit(): void {
    if(this.photoPointer >= 0) {
      this.openGallery(this.photoPointer);
    } 
  }
  openGallery (pointer: number) {
    if (!pointer) {
      this.currentPointer = 0;
    } else {
      this.currentPointer = pointer;
    }
    for (let i = 0; i < this.photos.length ; i ++ ){
      if (i == this.currentPointer) {
        this.photo = this.photos[i];
        this.opened = true;
        break;
      }
    }
  }
  onClose() {
    this.closePhotoModal.emit('Close');
  }

}
