import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Team } from '../interfaces/team';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TeamService {

  private teamsUrl = 'api/teams';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTeams(): Observable<Team> {
    let tableUrl = `https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39`;
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45"
      })
    };
    return this.http.get<Team>(tableUrl, httpOptions)
  }
}