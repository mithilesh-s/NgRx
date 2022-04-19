import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/model/Song';
import { SongsService } from 'src/service/songs.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private songsService:SongsService) { }
  id:any
  songs:any
  song:any
  songUrl:any
  songImage:any


  ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(res=>{
        this.id=res.get('id')
       
      });

      this.songsService.getSongs().subscribe(res=>{
        this.songs=res;
        this.song=this.songs.find((song:any)=>this.id==song.id)
        this.songImage=this.song.songImage;
        this.songUrl=this.song.songUrl
      })

      console.log(this.id)
      console.log(this.songs);
      


      

}


}
