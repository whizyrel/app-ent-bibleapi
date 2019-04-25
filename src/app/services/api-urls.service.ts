import { Injectable } from '@angular/core';

@Injectable({
  providedIn: `root`
})
export class ApiUrlsService {
  private URL = `https://api-ent-tech.herokuapp.com`;

  constructor() {}

  get userUrls() {
    return {
      signup: `${this.URL}/users/signup`,
      signin: `${this.URL}/users/signin`,
      modify: `${this.URL}/users/modify`,
      delete: `${this.URL}/users/delete`,
      forgot: `${this.URL}/users/forgot`,
      retrieve: `${this.URL}/users/retrieve`,
      list: `${this.URL}/users/lists`,
      upgrade: `${this.URL}/users/upgrade`,
      payments: `${this.URL}/users/payments`,
      verify: `${this.URL}/users/verify/`
    };
  }
  get donationUrls() {
    return {
      give: `${this.URL}/users/give`,
      list: `${this.URL}/users/list`
    };
  }
  get FeedbackUrls() {
    return {
      list: `${this.URL}/users/payments`,
      submit: `${this.URL}/users/submit`,
      archive: `${this.URL}/users/archive`
    };
  }
}
