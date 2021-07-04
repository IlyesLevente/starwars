import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../service/spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.isLoading$.next(true);

        return next
            .handle(request)
            .pipe(
                finalize( () => {
                    this.spinnerService.isLoading$.next(false);
                })
            )
    }

}