import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from './models/message.model';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(
    private http:HttpClient
  ) { }


  getMessages(url:string): Observable<any>{
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  getMessageById(url:string):Observable<any>{
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  postMessage(url:string, data:Message , option?:any):Observable<any>{
    return this.http.post(url,data , option).pipe(
      catchError(this.handleError)
    )
  }

  updateMessage(url:string, data:any , option?:any): Observable<any>{
    return this.http.put(url, data, option).pipe(
      catchError(this.handleError)
    )
  }

  deleteMessage(url:string,option?:any): Observable<any>{
    return this.http.delete(url,option).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
