import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Details } from './details';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL ='https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=10';
  apiURL2='https://api.themoviedb.org/3/movie/';
  api_key='4e44d9029b1270a757cddc766a1bcb63';
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.apiURL}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Movie details
  getMovieDetails(id: number): Observable<Details> {
    return this.http.get<Details>(`${this.apiURL2}${id}?api_key=${this.api_key}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
