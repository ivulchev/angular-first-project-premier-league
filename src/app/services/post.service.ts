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
    return this.http.post<Post>(`${url}posts.json`, {...body, createdOn, author, comments: [" "], voters: [" "], likes: 0 })
  }

  getPosts(): Observable<any> {
    let url = `https://premier-league-angular-exam-default-rtdb.europe-west1.firebasedatabase.app/`;
    return this.http.get<any>(`${url}posts.json`)
  }

  getOnePost(id: any): Observable<any> {
    let url = `https://premier-league-angular-exam-default-rtdb.europe-west1.firebasedatabase.app/`;
    return this.http.get<any>(`${url}posts/${id}.json`)
  }

  addComment(text:string, createdOn: any, author: any, id: any, comm: []): Observable<Comment> {
    let url = `https://premier-league-angular-exam-default-rtdb.europe-west1.firebasedatabase.app/`;
    return this.http.patch<Comment>(`${url}posts/${id}.json`, { comments: [...comm, [author, text, createdOn]] })
  }
  vote(  id: any, user: any, voted: []): Observable<any> {
    let url = `https://premier-league-angular-exam-default-rtdb.europe-west1.firebasedatabase.app/`;
    return this.http.patch<any>(`${url}posts/${id}.json`, {likes: { ".sv": {"increment": 1 }}, voters: [...voted, user]})
  }
}
