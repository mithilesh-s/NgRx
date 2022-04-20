import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/service/songs.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private songsService: SongsService) { console.log("video player loadded.");
  }
  id: any
  song: any
  songUrl: string = ''
  songImage: string = ''
  showError: boolean = false;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      this.id = res.get('id')
    });

    this.songsService.getSong(this.id).subscribe(res => {
      this.song = res;
      console.log(this.song);
      this.songImage = this.song.songImage;
      this.songUrl = this.song.songUrl
    },
      () => {
        if(!this.song){
          this.showError = true;
        }
      })
  }


}
