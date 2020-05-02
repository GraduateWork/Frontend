import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './login.actions';
import { LoginState, initialState } from './state';

const _loginReducer = createReducer(initialState,
  on(actions.signUpDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(actions.activationDone, (state) => {
    return { ...state, isActivated: true };
  }),
  on(actions.signInDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload }, isSignIn: true };
  }),
  on(actions.signOutDone, () => {
    return { ...initialState };
  }),
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}

