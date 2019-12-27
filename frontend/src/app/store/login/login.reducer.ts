import { createReducer, on, Action } from '@ngrx/store';

import { User } from '@models/user.model';
import {
  signUpDone,
  changeIsSignIn,
  changeIsActivated,
  signInDone,
  signOutDone,
  activationDone,
} from './login.actions';

export interface LoginState {
  isSignIn: boolean;
  isActivated: boolean;
  user: User;
}

export const initialState: LoginState = {
  isSignIn: false,
  isActivated: false,
  user: null,
};

const _loginReducer = createReducer(initialState,
  on(signUpDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(activationDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(changeIsSignIn, (state, { payload }) => {
    return { ...state, isSignIn: payload };
  }),
  on(changeIsActivated, (state,{ payload } ) => {
    return { ...state, isActivated: payload };
  }),
  on(signInDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(signOutDone, (state, action) => {
    return { ...initialState };
  }),
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}

