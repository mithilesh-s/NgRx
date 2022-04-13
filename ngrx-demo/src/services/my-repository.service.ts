import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, take } from 'rxjs';
import { UserAddAction, UserDeleteAction, UserListErrorAction, UserListRequestAction, UserListSuccessAction, UserUpdateAction } from 'src/action/user-action';
import { PostListErrorAction, PostListRequestAction,PostListSuccessAction } from 'src/action/post-action';
import { Post } from 'src/model/Post';
import { User } from 'src/model/User';
import { getPostError, getPostLoading, getPosts, getUserById, getUserError, getUserLoaded, getUserLoading, getUsers, RootReducerState } from 'src/reducer';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MyRepositoryService {

  constructor(private store:Store<RootReducerState>,private apiService:ApiService) { }

  getUserList(force=false):[Observable<boolean>,Observable<User[]>,Observable<boolean>]{
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData$ = this.store.select(getUsers);
    const getUserError$ = this.store.select(getUserError);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new UserListRequestAction());
        this.apiService.getAllUser().subscribe(res => {
          this.store.dispatch(new UserListSuccessAction({data: res}));
        },
        err=>{
          this.store.dispatch(new UserListErrorAction());
        });
      }
    });
    return [loading$,getUserData$,getUserError$];
  }

  deleteUser(id:number){
    this.store.dispatch(new UserDeleteAction({id}))
  }

  udpateUser(data:User){
   this.store.dispatch(new UserUpdateAction({data}))
  }

  addUser(data:User){
    this.store.dispatch(new UserAddAction({data}))
  }
  
  getUserById(id: number, force = false) {
    // get user from reducer if exist otherwise from api
    const user$ = this.store.select(state => getUserById(state, id));
    user$.pipe(take(1)).subscribe(res => {
      if (force || !res) {
        return this.apiService.getUser(id).subscribe(data => {
          this.store.dispatch(new UserAddAction({data}));
        });
      }
      return res;
    });
    return user$;
  }
  getAllPost(force = false): [Observable<boolean>, Observable<Post[]>, Observable<boolean>] {
    const post$ = this.store.select(getPosts);
    const loaded$ = this.store.select(getPostLoading);
    const loading$ = this.store.select(getPostLoading);
    const getError$ = this.store.select(getPostError);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new PostListRequestAction());
        this.apiService.getAllPost().subscribe(res => {
          this.store.dispatch(new PostListSuccessAction({data: res}));
        }, error => {
          this.store.dispatch(new PostListErrorAction());
        });
      }
    });
    return [loading$, post$, getError$];
  }

}
