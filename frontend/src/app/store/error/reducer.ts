import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './actions';
import { ErrorState, initialState } from './state';

const _errorReducer = createReducer(initialState,
  on(actions.setError, (state, { type, ...payload }) => {
    return { ...state, error: { ...payload } };
  }),
  on(actions.resetError, () => {
    return initialState;
  }),
);

export function errorReducer(state: ErrorState, action: Action) {
  return _errorReducer(state, action);
}

