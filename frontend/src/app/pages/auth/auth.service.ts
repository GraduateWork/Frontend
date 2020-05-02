import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpData } from '@models/sign-up.model';
import { SignInData } from '@models/sign-in.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = 'https://placard-backend.herokuapp.com';

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpData) {
    return of(true);
    // return this.http.post(
    //   `${this.serverUrl}/signUp`,
    //   { ...signUpData },
    // );
  }

  activation(code: string, username: string) {
    return of(true);
    // return this.http.post(
    //   `${this.serverUrl}/activation`,
    //   { code, username },
    // );
  }

  signIn(signInData: SignInData) {
    return of(true);
    // return this.http.post(
    //   `${this.serverUrl}/login`,
    //   { ...signInData },
    // );
  }

  signOut() {
    return of(true);
    // return this.http.post(
    //   `${this.serverUrl}/logout`,
    //   null
    // );
  }
}
