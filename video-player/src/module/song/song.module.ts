import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongRoutingModule } from './song-routing.module';
import { ThumbnailComponent } from 'src/component/thumbnail/thumbnail.component';
import { VideoDetailsComponent } from 'src/component/video-details/video-details.component';
import { VideoListComponent } from 'src/component/video-list/video-list.component';
import { VideoPlayerComponent } from 'src/component/video-player/video-player.component';


@NgModule({
  declarations: [
    VideoDetailsComponent,
    ThumbnailComponent,
    VideoPlayerComponent,
    VideoListComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule
  ]
})
export class SongModule { }
