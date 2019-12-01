import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad,
  Route
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { RootState } from '@store/root.state';
import { isCodeNeededSelector } from '@store/login/login.selectors';

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
        const { user, isSignIn } = rootState.login;
        if (isSignIn) {
          return true;
        }

        if (!user) {
          this.router.navigate(['sign-in']);
        } else if (isCodeNeededSelector(rootState)) {
          console.log('CODE PAGE');
        } else {
          this.router.navigate(['sign-up']);
        }

        return false;
      }),
    );
  }
}