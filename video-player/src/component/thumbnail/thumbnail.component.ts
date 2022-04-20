import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() image:any

  constructor(private vcr:ViewContainerRef,private cfr:ComponentFactoryResolver) { }

  songs:any

  ngOnInit(): void {
     
  }

  async playVideo(){
   
    this.vcr.clear();
    const {VideoPlayerComponent}=await import('../video-player/video-player.component')
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(VideoPlayerComponent)
    )
  }


}
