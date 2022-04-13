import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {takeWhile } from 'rxjs';
import { UserUpdateComponent } from 'src/component/user-update/user-update.component';
import { User } from 'src/model/User';
import { MyRepositoryService } from 'src/services/my-repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {
  users: User[] = [];
  loading:boolean=false;
  error:boolean=false;
  isAlive:boolean=true;

  constructor(private myRepositoryService:MyRepositoryService, private matDialog:MatDialog) { }

  ngOnInit() {
    this.fetchData();
  }
  ngOnDestroy(): void {
    this.isAlive=false;
  }

  fetchData(){
    const observer$=this.myRepositoryService.getUserList()
    const loading$=observer$[0];
    const userData$=observer$[1];
    const error$=observer$[2];
    userData$.pipe((takeWhile(()=>this.isAlive))).subscribe(res=>{
      this.users=res;
    })
    loading$.pipe((takeWhile(()=>this.isAlive))).subscribe(res=>{
      this.loading=res;
    })
    error$.pipe((takeWhile(()=>this.isAlive))).subscribe(res=>{
      this.error=res;
    })

  }

  tryAgain(){
    this.myRepositoryService.getUserList(true)
  }

  addUser(){
    this.matDialog.open(UserUpdateComponent,{
     width:'300px'    
    })
  }

}
