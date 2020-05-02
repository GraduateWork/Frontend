import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStep, AuthState, featureKey } from './state';

export const selectFeature = createFeatureSelector<AuthState>(featureKey);

export const userSelector = createSelector(
  selectFeature,
  (state: AuthState) => state.user,
);

export const authStepSelector = createSelector(
  selectFeature,
  (state: AuthState) => state ? state.authStep : AuthStep.None,
);

export const isSignInSelector = createSelector(
  selectFeature,
  (state: AuthState) => state ? state.authStep === AuthStep.SignIn : false,
);
