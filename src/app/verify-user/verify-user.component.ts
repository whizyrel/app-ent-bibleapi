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
  public message = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private verifyUserService: VerifyUserService
  ) {}

  ngOnInit() {
    // this.verifyForm = this.formBuilder.group();
    this.year = new Date().getFullYear();

    /* this.verifyUserService.verifyUser(this.getParam()).subscribe(
      data => {
        this.message = data.body.message;
        console.log(data);
      },
      error => {
        this.message = error.error.message;
        console.log(error);
      }
    ); */
  }
  getParam() {
    // grab param
    const param = this.activatedRoute.params;
    /*
    this.activatedRoute.params.subscribe(data => {
      const param = data.value.enc
    })
     */
    console.log(param);

    return param; // this route param
  }
}
