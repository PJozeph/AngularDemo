import { HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoginInterceptorService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log("Outgoing resuest : ");
        console.log(request.url);
        console.log(request.headers);

        return next.handle(request).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log("Incoming response");
                console.log(event.body);
            }
        }));
    }
}