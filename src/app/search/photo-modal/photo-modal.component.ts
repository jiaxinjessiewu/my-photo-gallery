import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {
  @Input() photo : {
    title : string,
    url   : string
  };
  @Output() public getData = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    console.log("onClose")
    this.getData.emit('Close');
  }

}
