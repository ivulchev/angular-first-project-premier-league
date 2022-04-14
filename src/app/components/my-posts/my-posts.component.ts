import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';
import { CreatePostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  posts: any | undefined;

  constructor(private postService: CreatePostService,
    public fbAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(response => { this.posts = Object.entries(response) });

  }

  authorFilter(author: string){
    const auth = getAuth()
    let user = auth.currentUser
    if (author === user?.email) {
      return true
    }else{
      return false
    }
  }

  filterPosts(){
    const auth = getAuth()
    let user = auth.currentUser
    for (const iterator of this.posts) {
      if(iterator[1].author == user?.email){
        return true
      }
    }
    return false
  }
}
