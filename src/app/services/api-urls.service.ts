import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {
  constructor() {}

  get userUrls() {
    return {
      signup: 'http://localhost:4445/users/signup',
      signin: 'http://localhost:4445/users/signin',
      modify: 'http://localhost:4445/users/modify',
      delete: 'http://localhost:4445/users/delete',
      forgot: 'http://localhost:4445/users/forgot',
      retrieve: 'http://localhost:4445/users/retrieve',
      list: 'http://localhost:4445/users/lists',
      upgrade: 'http://localhost:4445/users/upgrade',
      payments: 'http://localhost:4445/users/payments',
      verify: 'http://localhost:4445/users/verify/'
    };
  }
  get donationUrls() {
    return {
      give: 'localhost:4445/users/give',
      list: 'localhost:4445/users/list'
    };
  }
  get FeedbackUrls() {
    return {
      list: 'localhost:4445/users/payments',
      submit: 'localhost:4445/users/submit',
      archive: 'localhost:4445/users/archive'
    };
  }
}
