import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VerifyUserService } from '../services/verify-user.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {
  public year;
  public response: { message?: string };
  public message = '';
  private verificationData: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private verifyUserService: VerifyUserService
  ) {}

  ngOnInit() {
    this.year = new Date().getFullYear();

    this.getParam();

    this.verifyUserService.verifyUser(this.verificationData).subscribe(
      data => {
        this.response = data.body;
        this.message = this.response.message;
        console.log(data);
      },
      error => {
        this.message = error.error.message;
        console.log(error);
      }
    );
  }
  getParam() {
    // grab param
    this.activatedRoute.queryParams.subscribe(params => {
      const value = params.enc;
      this.verificationData = value;
      console.log(params);
    });
  }
  // add loading bar
}
