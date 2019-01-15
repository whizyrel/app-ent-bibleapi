import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { ApiUrlsService } from './api-urls.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyUserService {
  private url: string;

  constructor(private http: HttpClient, private apiUrls: ApiUrlsService) {}

  verifyUser(param): Observable<HttpResponse<Object>> {
    window.console.log(param);
    this.url = this.apiUrls.userUrls.verify;
    return this.http.patch(this.url, null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      params: new HttpParams().set('enc', param),
      responseType: 'json'
    });
  }
}
