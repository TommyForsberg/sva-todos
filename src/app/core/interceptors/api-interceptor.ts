import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    @Inject('BASE_API_URL') private baseUrl: string) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });
    return next.handle(apiReq);
  }
}