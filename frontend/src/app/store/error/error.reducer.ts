import { createReducer, on, Action } from '@ngrx/store';

import {
  setError,
  resetError
} from './error.actions';
import { Error } from '@models/error.model';

export interface ErrorState {
  error: Error;
}

export const initialState: ErrorState = {
  error: null,
};

const _errorReducer = createReducer(initialState,
  on(setError, (state, { type, ...payload }) => {
    return { ...state, error: { ...payload } };
  }),
  on(resetError, (state, action) => {
    return initialState;
  }),
);

export function errorReducer(state: ErrorState, action: Action) {
  return _errorReducer(state, action);
}

