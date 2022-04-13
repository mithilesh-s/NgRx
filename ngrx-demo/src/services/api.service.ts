import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/model/Post';
import { User } from 'src/model/User';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) {
  }

  getAllUser(): Observable<User[]> {
    return this.httpService.getUsers('/users')
      .pipe(map(data => data as User[]));
  }
  
  getUser(id: number): Observable<User> {
    return this.httpService.getUsers('/users/' + id);
  }
  getAllPost(): Observable<Post[]> {
    return this.httpService.getPosts('/posts')
      .pipe(map(data => data as Post[]));
  }
  
  getPost(id: number): Observable<Post> {
    return this.httpService.getPosts('/posts/' + id);
  }

}
