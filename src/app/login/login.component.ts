import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),

      'password': new FormControl(null, [Validators.required, this.passwordLength]),

    });
  }
  passwordLength(control: FormControl): { [s: string]: boolean } {

    if (control.value && ((control.value).length < 8 || control.value.length > 25)) {
      return { 'passwordLengthIncorrect': true };
    }


    return null;
  }

}
