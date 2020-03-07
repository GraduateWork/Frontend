import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginFacade } from '@store/login/facade';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  passwordType = 'password';
  isPasswordShown = false;

  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit() {}

  onSubmit() {
    const username = this.signInForm.get('username').value;
    const password = this.signInForm.get('password').value;
    this.loginFacade.signIn({ username, password });
  }

  togglePassword() {
    if (this.isPasswordShown) {
      this.isPasswordShown = false;
      this.passwordType = 'password';
    } else {
      this.isPasswordShown = true;
      this.passwordType = 'string';
    }
  }
}
