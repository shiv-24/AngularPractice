import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");

    // console.log("requst is on it's way");
    const modifiedReq = req.clone({
        headers: req.headers.append('ashjhas','asgha')
    })
    return next.handle(modifiedReq);
  }
}
