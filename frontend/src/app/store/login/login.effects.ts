import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { RootState } from '@store/root.state';
import {
  signUpStarted,
  signUpDone,
  signUpFailure,
  signInStarted,
  signInDone,
  signInFailure
} from '@store/login/login.actions';
import { AuthService } from 'app/pages/auth/auth.service';

@Injectable()
export class LoginEffects {
  signUpEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpStarted),
    map(({ type, ...payload }) => payload),
    switchMap(payload => {
      return this.authService.signUp(payload).pipe(
        map(response => {
          return signUpDone({
            username: payload.username,
          });
        }),
        catchError(error => {
          return of(signUpFailure());
        }),
      );
    }),
  ));

  signInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signInStarted),
    map(({ type, ...payload }) => payload),
    switchMap(payload => {
      return this.authService.signIn(payload).pipe(
        map(response => {
          return signInDone({
            username: payload.username,
          });
        }),
        catchError(error => {
          return of(signInFailure());
        }),
      );
    }),
  ));

  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
