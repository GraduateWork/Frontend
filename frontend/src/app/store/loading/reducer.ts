import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './actions';
import { LoadingState, initialState } from './state';

function updateLoadingHandler(state: LoadingState, isLoading: boolean): LoadingState {
  return { ...state, isLoading };
}

const _loadingReducer = createReducer(initialState,
  on(actions.updateLoading, (state, { payload }) => {
    return updateLoadingHandler(state, payload);
  }),
);

export function loadingReducer(state: LoadingState, action: Action) {
  return _loadingReducer(state, action);
}
