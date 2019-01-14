import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { signUpProp } from '../interfaces/signup.interface';

import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpDet: signUpProp;
  response: { message?: string };
  message: string;

  public step = 0;
  public submitted = true;
  public hide = true;

  constructor(private router: Router, private formBuilder: FormBuilder, private _signUpService: SignupService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        organisation: new FormControl('', Validators.required),
        email: new FormControl('', [
          Validators.required /* Validators.email, */,
          Validators.pattern(
            // tslint:disable-next-line:max-line-length
            /[a-zA-Z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
          )
        ]),
        accountType: new FormControl('', Validators.required),
        package: new FormControl('', Validators.required),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')
        ]),
        confirm: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')
        ])
      },
      { validators: this.passwordMatchValidator }
    );
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  passwordMatchValidator(form) {
    return form.get('password').value === form.get('confirm').value ? null : { mismatch: true };
  }

  getErrorMessage() {
    if (this.status.email.hasError) {
      // tslint:disable-next-line:max-line-length
      return this.status.email.hasError('required')
        ? 'You must enter a value'
        : this.status.email.hasError('pattern') ? 'Not a valid email' : '';
    }
    if (this.status.password.hasError) {
      return this.status.password.hasError('required')
        ? 'You must enter a value'
        : this.status.password.hasError('pattern')
          ? 'Password must contain at least 1 Uppercase letter and number'
          : '';
    }
    if (this.status.confirm.hasError) {
      return this.status.confirm.hasError('required')
        ? 'You must enter a value'
        : this.status.confirm.hasError('pattern')
          ? 'Password must contain at least 1 Uppercase letter and number'
          : '';
    }
    if (this.status.firstname.hasError) {
      return this.status.firstname.hasError('required') ? 'You must enter a value' : '';
    }
    if (this.status.lastname.hasError) {
      return this.status.lastname.hasError('required') ? 'You must enter a value' : '';
    }
    if (this.status.address.hasError) {
      return this.status.address.hasError('required') ? 'You must enter a value' : '';
    }
    if (this.status.organisation.hasError) {
      return this.status.organisation.hasError('required') ? 'You must enter a value' : '';
    }
  }

  get status() {
    return this.signUpForm.controls;
  }

  disableBtn() {
    if (
      this.status.firstname.value === '' ||
      this.status.lastname.value === '' ||
      this.status.address.value === '' ||
      this.status.organisation.value === '' ||
      this.status.email.value === '' ||
      (this.status.password.value === '' || this.status.password.invalid) ||
      (this.status.confirm.value === '' || this.status.confirm.invalid)
    ) {
      return true;
    }
  }

  onSubmit() {
    this.signUpForm.patchValue({
      package: 'classic',
      accountType: 'regular'
    });
    // if (this.signUpForm.valid) {
    if (!this.disableBtn()) {
      this.submitted = true;
      this.signUpDet = this.signUpForm.getRawValue();
      window.console.log(this.signUpDet);
      // post details to server for creating account
      this._signUpService.createAccount(this.signUpDet).subscribe(
        (data) => {
          this.response = data;
          this.message = this.response.message;
          console.log(data);
          // navigate to confirmation component render route
          // this.router.navigate(['/account/confirm']);
          // probable: didnt get mail buttton
        },
        (error) => {
          this.message = error.error.message;
          console.log(error);
        }
      );
    }
    // display messages || reset form fields to ''
    // this.signUpForm.reset({});
    // navigate to account confirm route
    // password doesn't match error
    // }
    // window.console.log(this.signUpForm.invalid);
    // window.console.log(this.signUpForm);
  }
}
