import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthStep, AuthState } from 'app/pages/auth/store/state';
import { authStepSelector } from './store/selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store$: Store<AuthState>,
    private router: Router,
  ) { }

  canActivate(): Observable<boolean> {
    return this.store$.pipe(
      take(1),
      map(rootState => {
        const authStep = authStepSelector(rootState);
        if (authStep === AuthStep.SignIn) {
          return true;
        }

        switch (authStep) {
          case AuthStep.None:
            this.router.navigate(['/auth/sign-in']);
            break;
          case AuthStep.SignUp:
            this.router.navigate(['/auth/activation']);
            break;
          case AuthStep.Activation:
            this.router.navigate(['/auth/sign-in']);
            break;
        }

        return false;
      }),
    );
  }
}
