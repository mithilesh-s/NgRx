import { state } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/model/User';
import { MyRepositoryService } from 'src/services/my-repository.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  private formBuilder:FormBuilder

  constructor(
    private dialogRef:MatDialogRef<UserUpdateComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: User,private myRepo:MyRepositoryService) {
   }
  updateUserFormGroup!:FormGroup
  get name(){
    return this.updateUserFormGroup.get('name');
  }
  get email(){
    return this.updateUserFormGroup.get('email');
  }

  ngOnInit(): void {
     this.updateUserFormGroup=this.formBuilder.group({
       name:[this.data?this.data.name:null,[Validators.required]],
       email:[this.data?this.data.email:null,[Validators.required]]
     })
  }

  addOrUpdate(){
    if(this.data)
    {
      this.updateUser();
    }
    else{
      this.addUser();
    }
  }

  updateUser(){
   const updatedUser={...this.data,...this.updateUserFormGroup.value}
   this.myRepo.udpateUser(updatedUser)
   this.dialogRef.close();
  }
  addUser(){
    this.myRepo.addUser(this.updateUserFormGroup.value)
    this.dialogRef.close();
  }

}
