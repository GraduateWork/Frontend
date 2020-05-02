import { createAction, props } from '@ngrx/store';

import { SignUpData } from 'app/pages/auth/models/sign-up.model';
import { User } from '@models/user.model';
import { SignInData } from 'app/pages/auth/models/sign-in.model';
import * as types from './action-types';

export const signUpStarted = createAction(types.SIGN_UP_STARTED, props<SignUpData>());
export const signUpDone = createAction(types.SIGN_UP_DONE, props<User>());

export const activationStarted = createAction(types.ACTIVATION_STARTED, props<{ payload: string }>());
export const activationDone = createAction(types.ACTIVATION_DONE);

export const signInStarted = createAction(types.SIGN_IN_STARTED, props<SignInData>());
export const signInDone = createAction(types.SIGN_IN_DONE, props<User>());

export const signOutStarted = createAction(types.SIGN_OUT_STARTED);
export const signOutDone = createAction(types.SIGN_OUT_DONE);
