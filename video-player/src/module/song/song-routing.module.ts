import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from 'src/component/video-list/video-list.component';
import { VideoPlayerComponent } from 'src/component/video-player/video-player.component';

const routes: Routes = [
  {path:'',redirectTo:'video-list',pathMatch:'full'},
  {path:'video-list',component:VideoListComponent},
  {path:"video/:id",component:VideoPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
