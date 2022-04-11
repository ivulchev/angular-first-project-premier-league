import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }

  createPost(body:{}, createdOn: any, author: any): Observable<Post> {
    let url = `https://premier-league-angular-exam-default-rtdb.europe-west1.firebasedatabase.app/`;
    return this.http.post<Post>(`${url}/posts.json`, {...body, createdOn, author, comments: [" "], voters: [" "]})
  }
}
