import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { SongsComponent } from 'src/component/songs/songs.component';
import { ThumbnailComponent } from 'src/component/thumbnail/thumbnail.component';
import { VideoDetailsComponent } from 'src/component/video-details/video-details.component';
import { VideoPlayerComponent } from 'src/component/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    VideoDetailsComponent,
    ThumbnailComponent,
    VideoPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
