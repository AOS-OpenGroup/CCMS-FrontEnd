import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Musician } from '../model/musician';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {

  basePath='http://localhost:3000/api/v1/musicians'
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  @Output() SetCurrent: EventEmitter<any>=new EventEmitter();
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later.'));
  }

  create(item: any): Observable<Musician> {
    return this.http.post<Musician>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Musician> {
    return this.http.put<Musician>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<Musician> {
    return this.http.get<Musician>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
    // Get Reviews by musician id
    getById(musicianId: any): Observable<Musician> {
        return this.http.get<Musician>(`${this.basePath}/${musicianId}`, this.httpOptions)
          .pipe(
            retry(2),
              catchError(this.handleError)
          );
    }
}