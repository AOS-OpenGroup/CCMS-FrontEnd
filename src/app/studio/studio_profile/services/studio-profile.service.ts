import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Studio } from 'src/app/bookings/model/studio';

@Injectable({
  providedIn: 'root'
})
export class StudioProfileService {
  basePath='http://localhost:3000/api/v1/studios';
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

    // Create Studio
    create(item: any): Observable<Studio> {
      return this.http.post<Studio>(this.basePath, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }
  
    // Get Studio by id
    getById(id: any): Observable<Studio> {
      return this.http.get<Studio>(`${this.basePath}/${id}`, this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }
  
    // Get all Studios
    getAll(): Observable<Studio> {
      return this.http.get<Studio>(this.basePath, this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }

}
