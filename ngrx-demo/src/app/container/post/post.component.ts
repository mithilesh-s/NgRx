import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { Post } from 'src/model/Post';
import { MyRepositoryService } from 'src/services/my-repository.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList!: Post[];
  isAlive = true;
  loading = false;
  error = false;

  constructor(private myrepo: MyRepositoryService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const observer$ = this.myrepo.getAllPost();
    const postData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    postData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.postList = data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }
  tryAgain(){
    this.myrepo.getAllPost(true)
  }


}
