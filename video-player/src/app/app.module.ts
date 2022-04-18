import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from 'src/component/home/home.component';
import { VideoDetailsComponent } from 'src/component/video-details/video-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbnailComponent } from 'src/component/thumbnail/thumbnail.component';
import { SongsComponent } from 'src/component/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoDetailsComponent,
    ThumbnailComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
