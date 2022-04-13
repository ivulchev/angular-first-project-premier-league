import { Component, OnInit } from '@angular/core';
import { CreatePostService } from 'src/app/services/post.service';
import { NgForm } from '@angular/forms';
import {getAuth} from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any | undefined;

  constructor(private postService: CreatePostService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts()

  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(response => { this.posts = Object.entries(response) });

  }

  // submitComment(newComment: NgForm): void {
  //   let createdOn = this.getDate()
  //   const auth = getAuth()
  //   let user = auth.currentUser
  //   if (newComment.value.comment.length > 5) {
  //     this.postService.addComment(newComment.value.comment, createdOn, user!.email, this.posts[0][0]).subscribe({
  //       next: (theme) => {
  //         this.router.navigate(['/posts']);
  //       },
  //       error: (error) => {
  //         console.error(error);
  //       }
  //     })
  //   }
  // }

  // voteUP() :void{
  //   this.postService.vote(this.posts[0][0]).subscribe({
  //     next: (theme) => {
  //       this.router.navigate(['/posts']);
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     }
  //   })
  // }

  getDate(){
    return Date()
}
}
