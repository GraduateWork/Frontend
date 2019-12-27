import { createAction, props } from '@ngrx/store';

import { SignUpData } from '@models/sign-up.model';
import { User } from '@models/user.model';
import { SignInData } from '@models/sign-in.model';

const prefix = '[Login]';

const SIGN_UP_STARTED = `${prefix} Sign Up Started`;
const SIGN_UP_DONE = `${prefix} Sign Up Done`;

const ACTIVATION_STARTED = `${prefix} Activation Started`;
const ACTIVATION_DONE = `${prefix} Activation Done`;

const SIGN_IN_STARTED = `${prefix} Sign In Started`;
const SIGN_IN_DONE = `${prefix} Sign In Done`;

const SIGN_OUT_STARTED = `${prefix} Sign Out Started`;
const SIGN_OUT_DONE = `${prefix} Sign Out Done`;

const CHANGE_IS_SIGN_IN = `${prefix} Change Is Sign In`;
const CHANGE_IS_ACTIVATED = `${prefix} Change Is Activated`;


export const signUpStarted = createAction(SIGN_UP_STARTED, props<SignUpData>());
export const signUpDone = createAction(SIGN_UP_DONE, props<User>());

export const activationStarted = createAction(ACTIVATION_STARTED, props<{ payload: string }>());
export const activationDone = createAction(ACTIVATION_DONE, props<User>());

export const signInStarted = createAction(SIGN_IN_STARTED, props<SignInData>());
export const signInDone = createAction(SIGN_IN_DONE, props<User>());

export const signOutStarted = createAction(SIGN_OUT_STARTED);
export const signOutDone = createAction(SIGN_OUT_DONE);

export const changeIsSignIn = createAction(CHANGE_IS_SIGN_IN, props<{ payload: boolean }>());
export const changeIsActivated = createAction(CHANGE_IS_ACTIVATED, props<{ payload: boolean }>());

