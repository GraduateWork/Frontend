import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { RootState } from '@store/root.state';
import { LoginStep } from '@store/login/state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store$: Store<RootState>,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store$.pipe(
      take(1),
      map(rootState => {
        const { loginStep } = rootState.login;
        if (loginStep === LoginStep.SignIn) {
          return true;
        }

        switch (loginStep) {
          case LoginStep.None:
            this.router.navigate(['/auth/sign-in']);
            break;
          case LoginStep.SignUp:
            this.router.navigate(['/auth/activation']);
            break;
          case LoginStep.Activation:
            this.router.navigate(['/auth/sign-in']);
            break;
        }

        return false;
      }),
    );
  }
}
