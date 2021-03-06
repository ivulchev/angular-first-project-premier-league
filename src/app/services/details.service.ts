import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Details } from '../interfaces/details';
import { MessageService } from './message.service';
import { Coach } from '../interfaces/coach';
import { Players } from '../interfaces/players';

@Injectable({ providedIn: 'root' })
export class DetailsService {

  private teamsUrl = 'api/details';
  private coachesUrl = 'api/coaches';
   // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  /** GET heroes from the server */
  getTeams(): Observable<Details[]> {
    return this.http.get<Details[]>(this.teamsUrl)
      .pipe(
        tap(_ => this.log('fetched teams')),
        catchError(this.handleError<Details[]>('getTeams', []))
      );
  }


  // getTeam(id: number): Observable<Details> {
  //   const url = `${this.teamsUrl}/${id}`;
  //   return this.http.get<Details>(url).pipe(
  //     tap(_ => this.log(`fetched team id=${id}`)),
  //     catchError(this.handleError<Details>(`getTeam id=${id}`))
  //   );
  // }

  getTeam(id: number): Observable<Details> {
    let teamUrl = `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45'
      })
    };
    return this.http.get<Details>(teamUrl, httpOptions)
  }

  getPlayers(id: number): Observable<Players> {
    let playersUrl = `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45"
      })
    };
    return this.http.get<Players>(playersUrl, httpOptions)
  }

  // getCoach(id: number): Observable<Coach> {
  //   let coachUrl = `https://api-football-v1.p.rapidapi.com/v3/coachs?team=${id}`;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45"
  //     })
  //   };
  //   return this.http.get<Coach>(coachUrl, httpOptions)
  // }

  /** PUT: update the hero on the server */
  // updateTeam(team: Details): Observable<any> {
  //   return this.http.put(this.teamsUrl, team, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated team id=${team.team.id}`)),
  //     catchError(this.handleError<any>('updateTeam'))
  //   );
  // }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TeamService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
}