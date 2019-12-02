import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpData } from '@models/sign-up.model';
import { SignInData } from '@models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = 'https://placard-backend.herokuapp.com';

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpData) {
    return this.http.post(
      `${this.serverUrl}/signUp`,
      { ...signUpData },
    );
  }

  activation(code: string, username: string) {
    return this.http.post(
      `${this.serverUrl}/activation`,
      { code, username },
    );
  }

  signIn(signInData: SignInData) {
    return this.http.post(
      `${this.serverUrl}/login`,
      { ...signInData },
    );
  }
}
