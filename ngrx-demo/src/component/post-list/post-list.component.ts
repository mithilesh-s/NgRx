import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/model/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postList!: Post[];
  constructor() { }

  ngOnInit(): void {
  }

}
