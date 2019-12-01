import { createAction, props } from '@ngrx/store';

import { SignUpData } from '@models/sign-up.model';
import { User } from '@models/user.model';
import { SignInData } from '@models/sign-in.model';

const prefix = '[Login]';

const SIGN_UP_STARTED = `${prefix} Sign Up Started`;
const SIGN_UP_DONE = `${prefix} Sign Up Done`;
const SIGN_UP_FAILURE = `${prefix} Sign Up Failure`;

const SIGN_IN_STARTED = `${prefix} Sign In Started`;
const SIGN_IN_DONE = `${prefix} Sign In Done`;
const SIGN_IN_FAILURE = `${prefix} Sign In Failure`;

const CHANGE_IS_SIGN_IN = `${prefix} CHANGE Is Sign In`;

export const signUpStarted = createAction(SIGN_UP_STARTED, props<SignUpData>());
export const signUpDone = createAction(SIGN_UP_DONE, props<User>());
export const signUpFailure = createAction(SIGN_UP_FAILURE);

export const signInStarted = createAction(SIGN_IN_STARTED, props<SignInData>());
export const signInDone = createAction(SIGN_IN_DONE, props<User>());
export const signInFailure = createAction(SIGN_IN_FAILURE);

export const changeIsSignIn = createAction(CHANGE_IS_SIGN_IN, props<{ payload: boolean }>());
