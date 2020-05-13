import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage {
  passwordType = 'password';
  isPasswordShown = false;

  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authFacade: AuthFacade) { }

  onSubmit() {
    const username = this.signInForm.get('username').value;
    const password = this.signInForm.get('password').value;
    this.authFacade.signIn({ username, password });
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
