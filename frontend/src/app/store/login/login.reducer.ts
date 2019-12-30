import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './login.actions';
import { LoginState, initialState } from './state';

const _loginReducer = createReducer(initialState,
  on(actions.signUpDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(actions.activationDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(actions.changeIsSignIn, (state, { payload }) => {
    return { ...state, isSignIn: payload };
  }),
  on(actions.changeIsActivated, (state,{ payload } ) => {
    return { ...state, isActivated: payload };
  }),
  on(actions.signInDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(actions.signOutDone, () => {
    return { ...initialState };
  }),
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}

