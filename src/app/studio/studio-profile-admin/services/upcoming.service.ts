import {EventEmitter, Injectable, Output} from '@angular/core';
import {Upcoming} from "../model/upcoming";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  basePath='http://localhost:3000/api/v1/upcoming';

  httpOptions = {
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

  // Create Student
  create(item: any): Observable<Upcoming> {
    return this.http.post<Upcoming>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get Student by id
  getById(id: any): Observable<Upcoming> {
    return this.http.get<Upcoming>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get all students
  getAll(): Observable<Upcoming> {
    return this.http.get<Upcoming>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Upcoming> {
    return this.http.put<Upcoming>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete student
  delete(id: any): Observable<Upcoming> {
    return this.http.delete<Upcoming>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}
