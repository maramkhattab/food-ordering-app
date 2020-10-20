import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, this.passwordLength]),
      'mobile': new FormControl(null, [Validators.required, this.mobileLength]),
      'address': new FormControl(null, [Validators.required]),
    });
  }
  passwordLength(control: FormControl): { [s: string]: boolean } {

    if (control.value && ((control.value).length < 8 || control.value.length > 25)) {
      return { 'passwordLengthIncorrect': true };
    }


    return null;
  }
  mobileLength(control: FormControl): { [s: string]: boolean } {

    if (control.value && (control.value).length < 11) {
      return { 'mobileLengthIncorrect': true };
    }


    return null;
  }

}
