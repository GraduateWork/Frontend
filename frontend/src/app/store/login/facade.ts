import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SignUpData } from '@models/sign-up.model';
import { User } from '@models/user.model';
import { SignInData } from '@models/sign-in.model';
import { RootState } from '@store/root.state';

import { userSelector, isSignInSelector } from './login.selectors';
import { signOutStarted, signUpStarted, signInStarted, activationStarted } from './login.actions';

@Injectable({
  providedIn: 'root',
}) export class LoginFacade {
  readonly user$: Observable<User>;
  readonly isSignIn$: Observable<boolean>;

  constructor(private store$: Store<RootState>) {
    this.user$ = this.store$.pipe(select(userSelector));
    this.isSignIn$ = this.store$.pipe(select(isSignInSelector));
  }

  public signUp(data: SignUpData) {
    this.store$.dispatch(signUpStarted(data));
  }

  public activation(code: string) {
    this.store$.dispatch(activationStarted({ payload: code }));
  }

  public signOut() {
    this.store$.dispatch(signOutStarted());
  }

  public signIn(data: SignInData) {
    this.store$.dispatch(signInStarted(data));
  }
}
