import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private token: string;

  constructor() { }

  getToken(data) {
    this.token = data.token;
    console.log(this.token);
  }
  sendToken() {
    return this.token;
  }
}
