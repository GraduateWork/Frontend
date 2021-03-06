import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap, withLatestFrom } from 'rxjs/operators';

import {
  signUpStarted,
  signUpDone,
  signInStarted,
  signInDone,
  signOutStarted,
  signOutDone,
  activationStarted,
  activationDone,
} from 'app/pages/auth/store/actions';
import { AuthService } from 'app/pages/auth/auth.service';
import { setError } from '@store/error/actions';
import { AuthState } from './state';
import { userSelector } from './selectors';

@Injectable()
export class AuthEffects {
  signUpEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpStarted),
    switchMap(({ type, ...payload }) => {
      return this.authService.signUp(payload).pipe(
        map(() => {
          return signUpDone({
            username: payload.username
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
    switchMap(([{ payload }, state]) => {
      const { username } = userSelector(state);
      return this.authService.activation(payload, username).pipe(
        map(() => {
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
        map(() => {
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
    switchMap(() => {
      return this.authService.signOut().pipe(
        map(() => {
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
    private store$: Store<AuthState>,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
