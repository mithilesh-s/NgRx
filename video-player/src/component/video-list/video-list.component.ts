import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/service/songs.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(private songsService:SongsService) { }
  songs:any
  ngOnInit(): void {
    this.songsService.getSongs().subscribe(res=>{
      this.songs=res;
      console.log(this.songs)
    })
  }

}
