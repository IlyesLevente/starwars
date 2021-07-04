import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {             
              this.snackBar.open(
                this.getErrorMessage(error), 
                error.status.toString(), 
                {
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    duration: 4000
                }
              );
              return throwError(error);
            })
          ) as Observable<HttpEvent<any>>;    
    }

    getErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Forbidden: ${error.message}`;
            }
            case 500: {
                return `Server Error: ${error.message}`;
            }
            default: {
                return `Error: ${error.message}`;
            }

        }
    }
}