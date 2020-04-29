import { Component, OnInit } from '@angular/core';
import { Photo } from './photo.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos : Photo[];
  constructor() { }

  ngOnInit(): void {
    this.photos = [
      {
        name : 'dog1', 
        description: 'cute',
        url : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
      },
      {
        name : 'dog2', 
        description: 'cute',
        url : 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg'
      },
      {
        name : 'dog3', 
        description: 'cute',
        url : 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg'
      },
      {
        name : 'dog4', 
        description: 'cute',
        url : 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-149263578.jpg'
      },
      {
        name : 'dog5', 
        description: 'cute',
        url : 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/29/portuguese-water-dog.jpg'
      }
    ]
  }

}
