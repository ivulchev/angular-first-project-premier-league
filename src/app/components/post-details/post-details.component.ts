import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from 'src/app/services/post.service';
import { NgForm } from '@angular/forms';
import { getAuth } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any | undefined;
  constructor(private postService: CreatePostService, private router: Router, private route: ActivatedRoute, public fbAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getOnePost(id!)
      .subscribe(response => this.post = response);

  }

  submitComment(newComment: NgForm): void {
    const id = this.route.snapshot.paramMap.get('id')
    let createdOn = this.getDate()
    const auth = getAuth()
    let user = auth.currentUser
    if (newComment.value.comment.length > 5 && user) {
      this.postService.addComment(newComment.value.comment, createdOn, user!.email, id, this.post.comments).subscribe({
        next: (theme) => {
          setTimeout(() =>this.reloadCurrentRoute())
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  voteUP(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const auth = getAuth()
    let user = auth.currentUser
    if (user && user?.email !== this.post.author && !this.post.voters.includes(user?.email)) {
      this.postService.vote(id, user.email, this.post.voters).subscribe({
        next: (theme) => {
          this.reloadCurrentRoute()
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  goBack() {
    this.router.navigate([`posts`])
  }

  getDate() {
    return Date()
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
