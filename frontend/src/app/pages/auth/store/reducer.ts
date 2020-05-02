import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './actions';
import { LoginState, initialState, LoginStep } from './state';

const _loginReducer = createReducer(initialState,
  on(actions.signUpDone, (state, { type, ...payload }) => {
    return { ...state, loginStep: LoginStep.SignUp, user: { ...payload } };
  }),
  on(actions.activationDone, (state) => {
    return { ...state, loginStep: LoginStep.Activation };
  }),
  on(actions.signInDone, (state, { type, ...payload }) => {
    return { ...state, loginStep: LoginStep.SignIn, user: { ...payload } };
  }),
  on(actions.signOutDone, () => {
    return { ...initialState };
  }),
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}

