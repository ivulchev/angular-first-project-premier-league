import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {getAuth} from "firebase/auth";

import { CreatePostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  

  constructor(private postService: CreatePostService, private router: Router, public fbAuth: AngularFireAuth) { }

  ngOnInit(): void {
    
  }

  submitNewTheme(newThemeForm: NgForm): void {
    console.log(newThemeForm.value);
    let createdOn = this.getDate()
    const auth = getAuth()
    let user = auth.currentUser
    if(newThemeForm.value.postText && newThemeForm.value.postTitle){
    this.postService.createPost(newThemeForm.value, createdOn, user!.email).subscribe({
      next: (theme) => {
        this.router.navigate(['/posts']);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
    
  }

  getDate(){
      return Date()
  }

  getUser(){
    return this.fbAuth.user.subscribe()
  }
}
