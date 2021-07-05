import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
                return `The requested resource could not be found but may be available in the future`;
            }
            case 403: {
                return `Forbidden, the server is refusing action`;
            }
            case 500: {
                setTimeout( () => window.open('https://github.com/juriy', "_blank"), 4500);
                return `Unexpected error, contact the Administrator`;
            }
            default: {
                return `Error`;
            }

        }
    }

}