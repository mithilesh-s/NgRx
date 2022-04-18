import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {


  @Input() songDetail:any;
  constructor() { }

  ngOnInit(): void {
  }

}
