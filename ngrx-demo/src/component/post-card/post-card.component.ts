import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/model/Post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  constructor() { }


  ngOnInit(): void {
  }

}
