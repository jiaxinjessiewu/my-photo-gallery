import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  uploadForm : FormGroup;
  urlRegex : string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  constructor(private galleryService : GalleryService) { }

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {
    this.galleryService.addPhoto(this.uploadForm.value)
    .subscribe(res => {
      this.uploadForm.reset();
    })
  }
  private initForm() {
    let title : string = '';
    let url : string = '';
    let description : string = '';
    this.uploadForm = new FormGroup({
      'title' : new FormControl(title, Validators.required),
      'url' : new FormControl(
        url,
        [Validators.required, 
        Validators.pattern(this.urlRegex)]
        ),
      'description' : new FormControl(description)
    })
  }
}
