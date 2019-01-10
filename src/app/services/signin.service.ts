import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
/* import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw'; */

import { ApiUrlsService } from '../services/api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private url: string;

  constructor(private _http: HttpClient, private _url: ApiUrlsService) {}

  submitUser(details): Observable<HttpResponse<Object>> {
    // grab the url
    this.url = this._url.userUrls.signin;
    console.log(this.url);
    console.log(details);
    // make http call and grab token
    return this._http.put<Object>(this.url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json'
    });
  }
}
