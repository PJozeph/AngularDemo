import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';


export class AuthenticationInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const modifiedRequest = request.clone({headers : request.headers.append( 'Auth' , 'XYZ' )});
        return next.handle(modifiedRequest);
    }
}