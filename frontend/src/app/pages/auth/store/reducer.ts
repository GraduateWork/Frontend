import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './actions';
import { AuthState, initialState, AuthStep } from './state';

const _authReducer = createReducer(initialState,
  on(actions.signUpDone, (state, { type, ...payload }) => {
    return { ...state, authStep: AuthStep.SignUp, user: { ...payload } };
  }),
  on(actions.activationDone, (state) => {
    return { ...state, authStep: AuthStep.Activation };
  }),
  on(actions.signInDone, (state, { type, ...payload }) => {
    return { ...state, authStep: AuthStep.SignIn, user: { ...payload } };
  }),
  on(actions.signOutDone, () => {
    return { ...initialState };
  }),
);

export function authReducer(state: AuthState, action: Action) {
  return _authReducer(state, action);
}

