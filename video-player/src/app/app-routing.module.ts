import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from 'src/component/songs/songs.component';
import { VideoPlayerComponent } from 'src/component/video-player/video-player.component';


const routes: Routes = [
  {path:'',redirectTo:'songs',pathMatch:'full'},
  {path:'songs',component:SongsComponent},
  {path:"video/:id",component:VideoPlayerComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
