import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { serverUrl } from 'config';
import { SignUpData } from './models/sign-up.model';
import { SignInData } from './models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpData) {
    return this.http.post(
      `${serverUrl}/signUp`,
      { ...signUpData },
    );
  }

  activation(code: string, username: string) {
    return this.http.post(
      `${serverUrl}/activation`,
      { code, username },
    );
  }

  signIn(signInData: SignInData) {
    return this.http.post(
      `${serverUrl}/login`,
      { ...signInData },
    );
  }

  signOut() {
    return this.http.post(
      `${serverUrl}/logout`,
      null
    );
  }
}
