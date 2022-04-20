import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/service/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../module/song/song.module').then(m => m.SongModule)
 }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
