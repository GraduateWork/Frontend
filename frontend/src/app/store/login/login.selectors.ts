import { createSelector } from '@ngrx/store';
import { RootState } from '@store/root.state';

export const userSelector = (state: RootState) => state.login.user;
export const isSignInSelector = (state: RootState) => state.login.isSignIn;
export const isActivatedSelector = (state: RootState) => state.login.isActivated;

export const isSignInNeededSelector = createSelector(
  userSelector,
  isActivatedSelector,
  (user, isActivated) => {
    return user && isActivated;
  }
);
