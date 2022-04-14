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
  alreadyVoted(voters: any){
    const auth = getAuth()
    let user = auth.currentUser
    if(voters.includes(user?.email)){
      return "isVoted"
    }
    return null
  }
}
