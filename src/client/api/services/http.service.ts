'use strict';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
    
    constructor ( private http: HttpClient ) { }

    /**PRIVATE**/    
    private handleError( error: HttpErrorResponse ) {
        
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an ErrorObservable with a user-facing error message
      return new ErrorObservable(
        'Something bad happened; please try again later.');
        
    };

    /**PUBLIC**/    
    getMethod( path, header) {
        
        /**TODO: Implement Back End server:
         * FIXES ISSUE: CORS request blocked
         * */

        return this.http.get( path, header )
                 .pipe(
                      catchError(this.handleError)
                 );
                
        /* Remove Later
        //console.log("get works");
        return this.http.get( '/api', this.CustomHeader )
                 .pipe(
                      catchError(this.handleError)
                 );
        */
    }
    
    postMethod( path, json, header) {
        
        /**TODO: Implement Back End server:
         * FIXES ISSUE: CORS request blocked: FIXED
         * */
                
        return this.http.post( path, json, header )
                .pipe(
                    catchError(this.handleError)
                );
        /* Remove Later 
        //console.log("post works");
        return this.http.post( '/api', { "url": this.configUrl }, this.CustomHeader )
                .pipe(
                    catchError(this.handleError)
                );
        */
    }
}