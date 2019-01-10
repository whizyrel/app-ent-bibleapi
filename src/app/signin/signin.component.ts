import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

import { signInProp } from '../interfaces/signin.interface';

import { SigninService } from '../services/signin.service';
import { AuthTokenService } from '../services/auth-token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  logInForm: FormGroup;
  signInDet: signInProp;
  message: string;

  public hide = true;
  public submitted = false;

  private _response;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _submitForm: SigninService,
    private _saveToken: AuthTokenService
  ) {}

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          // tslint:disable-next-line:max-line-length
          /[a-zA-Z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
        )
      ]),
      password: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage() {
    if (this.status.password.hasError) {
      return this.status.password.hasError('required')
        ? 'You must enter a value'
        : '';
    }
    if (this.status.email.hasError) {
      return this.status.email.hasError('required')
        ? 'You must enter a value'
        : this.status.email.hasError('pattern')
        ? 'Not a valid email'
        : '';
    }
  }

  get status() {
    return this.logInForm.controls;
  }

  onSubmit() {
    if (this.logInForm.valid) {
      JSON.stringify(
        (this.signInDet = {
          email: this.status.email.value,
          password: this.status.password.value
        })
      );

      this._submitForm.submitUser(this.signInDet).subscribe(
        data => {
          this._response = data.body;
          if (this._response.hasOwnProperty('token')) {
            // if verified
            this._saveToken.getToken(data.body);
            this.message = '';
            // navigate to dashboard route
            this.router.navigate(['user/dashboard']);
          } else {
            // others like wrong details || unverified
            this.message = this._response.message;
            window.console.log(data);
          }
        },
        error => {
          this.message = error.error.message;
          window.console.log(error);
        }
      );
    }

    // reset form fields to '' - don't need to reset form field for didnt get verification link sake
    // forgot password route and component

    // regexp pattern validation for email and password
    // show messages for other error codes
  }
}
