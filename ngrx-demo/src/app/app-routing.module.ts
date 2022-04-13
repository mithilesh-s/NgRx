import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/component/layout/dashboard/dashboard.component';
import { ListComponent } from 'src/component/list/list.component';
import { ShowCardDetailsComponent } from 'src/component/show-card-details/show-card-details.component';
import { PostComponent } from './container/post/post.component';
import { UserComponent } from './container/user/user.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path:'',redirectTo:'users',pathMatch:'full'},
    {path:'users',component:UserComponent},
    {path:'posts',component:PostComponent},
    {path:'user/:id',component:ShowCardDetailsComponent},
    {path:'list',component:ListComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
