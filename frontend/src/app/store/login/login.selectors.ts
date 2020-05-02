import { createSelector } from '@ngrx/store';

import { RootState } from '@store/root.state';
import { LoginStep } from './state';

export const userSelector = (state: RootState) => state.login.user;
export const loginStepSelector = (state: RootState) => state.login.loginStep;

export const isSignInSelector = createSelector(
  loginStepSelector,
  (step) => step === LoginStep.SignIn,
);
