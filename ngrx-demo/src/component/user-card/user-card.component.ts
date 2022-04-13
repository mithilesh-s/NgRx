import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { MyRepositoryService } from 'src/services/my-repository.service';
import { UserUpdateComponent } from '../user-update/user-update.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;

  constructor(private myRepo:MyRepositoryService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  updateUser(){
    this.dialog.open(UserUpdateComponent,{
      width: '300px',
      data:this.user
    
    })
  }
  deleteUser(){
   this.myRepo.deleteUser(this.user.id);
  }

  openCardDetails(){
    this.router.navigate(['user',this.user.id])
  }

}
