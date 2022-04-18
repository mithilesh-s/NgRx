import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/service/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  constructor(private songsService:SongsService) { }
  songs:any
  ngOnInit(): void {
    this.songsService.getSongs().subscribe(res=>{
      this.songs=res;
      console.log(this.songs)
    })
  }

}
