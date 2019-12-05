import { createReducer, on, Action } from '@ngrx/store';

import { User } from '@models/user.model';
import {
  signUpDone,
  signUpFailure,
  changeIsSignIn,
  changeIsActivated,
  signInDone,
  signInFailure,
  signOutDone,
  signOutFailure,
  activationDone,
  activationFailure
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
  on(signUpFailure, (state, action) => {
    return { ...state };
  }),
  on(activationDone, (state, { type, ...payload }) => {
    return { ...state, user: { ...payload } };
  }),
  on(activationFailure, (state, action) => {
    return { ...state };
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
  on(signInFailure, (state, action) => {
    return { ...state };
  }),
  on(signOutDone, (state, action) => {
    return { ...initialState };
  }),
  on(signOutFailure, (state, action) => {
    return { ...state };
  })
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}

