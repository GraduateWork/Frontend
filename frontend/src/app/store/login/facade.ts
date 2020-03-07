import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@store/root.state';
import { userSelector } from './login.selectors';
import { signOutStarted, signUpStarted, signInStarted, activationStarted } from './login.actions';
import { SignUpData } from '@models/sign-up.model';
import { User } from '@models/user.model';
import { SignInData } from '@models/sign-in.model';

@Injectable({
  providedIn: 'root',
}) export class LoginFacade {
  user$: Observable<User>;

  constructor(private store$: Store<RootState>) {
    this.user$ = this.store$.pipe(select(userSelector));
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
    this.store$.dispatch(signInStarted(signInStarted(data)));
  }
}
