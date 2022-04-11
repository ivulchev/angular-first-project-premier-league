import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CreatePostService } from 'src/app/services/create-post.service';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  constructor(private postService: CreatePostService, private router: Router) { }

  ngOnInit(): void {
  }

  submitNewTheme(newThemeForm: NgForm): void {
    console.log(newThemeForm.value);
    this.postService.createPost(newThemeForm.value).subscribe({
      next: (theme) => {
        console.log(theme);
        this.router.navigate(['/posts']);
      },
      error: (error) => {
        console.error(error);
      }
    })

  }

  
}
