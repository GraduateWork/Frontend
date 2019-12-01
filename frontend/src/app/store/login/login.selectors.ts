import { createSelector } from '@ngrx/store';
import { RootState } from '@store/root.state';

export const userSelector = (state: RootState) => state.login.user;
export const isSignInSelector = (state: RootState) => state.login.isSignIn;
export const isCodeNeededSelector = createSelector(
  userSelector,
  isSignInSelector,
  (user, isSignIn) => {
    return user && !isSignIn;
  }
);
