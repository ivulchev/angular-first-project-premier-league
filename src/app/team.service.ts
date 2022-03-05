import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Team } from './team';

@Injectable({ providedIn: 'root' })
export class TeamService {

  private teamsUrl = 'http://localhost:3030/table';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET teams from the server */
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}