import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Fixture } from '../interfaces/fixture';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class FixtureService {

  private fixturesUrl = 'api/fixtures';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  /** GET heroes from the server */
  getFixtures(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.fixturesUrl)
      .pipe(
        tap(_ => this.log('fetched fixtures')),
        catchError(this.handleError<Fixture[]>('getTeams', []))
      );
  }



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FixtureService: ${message}`);
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