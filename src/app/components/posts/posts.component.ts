import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { CreatePostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any| undefined;

  constructor(private postService: CreatePostService) { }

  ngOnInit(): void {
    this.getPosts()
    
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(response => {this.posts = Object.entries(response)});

  }
}
