import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoginStep, LoginState, featureKey } from './state';

export const selectFeature = createFeatureSelector<LoginState>(featureKey);

export const userSelector = createSelector(
  selectFeature,
  (state: LoginState) => state.user,
);

export const loginStepSelector = createSelector(
  selectFeature,
  (state: LoginState) => state ? state.loginStep : LoginStep.None,
);

export const isSignInSelector = createSelector(
  selectFeature,
  (state: LoginState) => state ? state.loginStep === LoginStep.SignIn : false,
);
