import { HttpHandler, HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs' ;


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any> , next:HttpHandler){
        return next.handle(request).pipe(
            catchError( err => {
                let errMsg = "";
                console.log(err);
                return throwError("Invalid code");
            }
            )
        )
    }

    
}