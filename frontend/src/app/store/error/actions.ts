import { createAction, props } from '@ngrx/store';

import { Error } from '@models/error.model';
import * as types from './action-types';

export const setError = createAction(types.SET_ERROR, props<Error>());
export const resetError = createAction(types.RESET_ERROR);


