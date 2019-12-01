import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpData } from '@models/sign-up.model';
import { SignInData } from '@models/sign-in.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = 'http://192.168.0.12';
  private port = 8080;

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpData) {
    return this.http.post(
      `${this.serverUrl}:${this.port}/signUp`,
      { ...signUpData },
    );
  }

  activation(code: string, username: string) {
    return this.http.post(
      `${this.serverUrl}:${this.port}/activation`,
      null,
      {
        params: {
          code,
          username,
        },
      },
    );
  }

  signIn(signInData: SignInData) {
    return this.http.post(
      `${this.serverUrl}:${this.port}/login`,
      { ...signInData },
    );
  }
}
