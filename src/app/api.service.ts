import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

import { environment } from './../environments/environment';




@Injectable()
export class ApiService {

  url: string;
  constructor(public http: HttpClient) { 
    this.url = environment.omdb.url + "?apikey="+environment.omdb.apiKey;
  }

  searchMovie( title: string, type:string ):Observable<Object> {
    
    return this.http.get<string>( this.url + "&s="+title )
    .pipe(
      catchError(this.handleError)
    );

  }


  /** log or return a decent error message if the API call fails **/
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Oops something went wrong, try again.');
  };



}