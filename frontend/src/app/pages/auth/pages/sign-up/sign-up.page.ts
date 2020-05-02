import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  passwordType = 'password';
  isPasswordShown = false;

  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit() {
  }

  onSubmit() {
    const username: string = this.signUpForm.get('username').value;
    const email: string = this.signUpForm.get('email').value;
    const password: string = this.signUpForm.get('password').value;
    this.loginFacade.signUp({ username, email, password });
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
