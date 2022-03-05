import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Team } from './team';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TeamService {

  private teamsUrl = 'api/teams';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  /** GET heroes from the server */
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
      .pipe(
        tap(_ => this.log('fetched teams')),
        catchError(this.handleError<Team[]>('getTeams', []))
      );
  }

  // /** GET hero by id. Will 404 if id not found */
  // getTeam(id: number): Observable<Team> {
  //   const url = `${this.teamsUrl}/${id}`;
  //   return this.http.get<Team>(url).pipe(
  //     tap(_ => this.log(`fetched team id=${id}`)),
  //     catchError(this.handleError<Team>(`getTeam id=${id}`))
  //   );
  // }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // /** PUT: update the hero on the server */
  // updateHero(hero: Team): Observable<any> {
  //   return this.http.put(this.teamsUrl, team, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${team.team.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }
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