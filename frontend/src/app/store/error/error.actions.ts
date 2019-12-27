import { createAction, props } from '@ngrx/store';

import { Error } from '@models/error.model';

const prefix = '[Error]';

const SET_ERROR = `${prefix} Update Error`;
const RESET_ERROR = `${prefix} Reset Error`;

export const setError = createAction(SET_ERROR, props<Error>());
export const resetError = createAction(RESET_ERROR);


