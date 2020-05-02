import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap, withLatestFrom } from 'rxjs/operators';

import { RootState } from '@store/root.state';
import {
  signUpStarted,
  signUpDone,
  signInStarted,
  signInDone,
  signOutStarted,
  signOutDone,
  activationStarted,
  activationDone,
} from '@store/login/login.actions';
import { AuthService } from 'app/pages/auth/auth.service';
import { setError } from '@store/error/actions';

@Injectable()
export class LoginEffects {
  signUpEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpStarted),
    switchMap(({ type, ...payload }) => {
      return this.authService.signUp(payload).pipe(
        map(response => {
          return signUpDone({
            username: payload.username,
          });
        }),
        catchError(error => {
          return of(setError({ message: error, time: new Date().getDate() }));
        }),
      );
    }),
  ));

  activationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(activationStarted),
    withLatestFrom(this.store$),
    switchMap(([{ type, payload }, state]) => {
      const { username } = state.login.user;
      return this.authService.activation(payload, username).pipe(
        map(response => {
          return activationDone();
        }),
        catchError(error => {
          return of(setError({ message: error, time: new Date().getDate() }));
        })
      );
    })
  ));

  signInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signInStarted),
    switchMap(({ type, ...payload }) => {
      return this.authService.signIn(payload).pipe(
        map(response => {
          return signInDone({
            username: payload.username,
          });
        }),
        catchError(error => {
          return of(setError({ message: error, time: new Date().getDate() }));
        }),
      );
    }),
  ));

  signOutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signOutStarted),
    switchMap(action => {
      return this.authService.signOut().pipe(
        map(response => {
            return signOutDone();
        }),
        catchError(error => {
          return of(setError({ message: error, time: new Date().getDate() }));
        }),
      );
    }),
  ));

  navigateAfterSignUpEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpDone),
    tap(() => {
      this.router.navigate(['/auth/activation']);
    })
  ), { dispatch: false });

  navigateAfterActivationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(activationDone),
    tap(() => {
      this.router.navigate(['/auth/sign-in']);
    })
  ), { dispatch: false });

  navigateAfterSignInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signInDone),
    tap(() => {
      this.router.navigate(['/profile']);
    }),
  ), { dispatch: false });

  navigateAfterSignOutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signOutDone),
    tap(() => {
      this.router.navigate(['/']);
    }),
  ), { dispatch: false });


  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
