import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiUrlsService } from './api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url: string;

  constructor(private _urls: ApiUrlsService, private _http: HttpClient) {}

  createAccount(details): Observable<Object> {
    this.url = this._urls.userUrls.signup;

    console.log(this.url);
    console.log(details);
    // make http call and grab token
    return this._http.post<Object>(this.url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'body',
      responseType: 'json'
    });
  }
}
