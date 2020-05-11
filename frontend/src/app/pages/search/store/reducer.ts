import { createReducer, on, Action } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { getSearchEventsDone } from './actions';
import { SearchState, initialState } from './state';

function getSearchEventsHandler(state: SearchState, events: BaseEvent[]): SearchState {
  return { ...state, events: [ ...events ] };
}

const _searchReducer = createReducer(initialState,
  on(getSearchEventsDone, (state, { payload }) => {
    return getSearchEventsHandler(state, payload);
  }),
);

export function searchReducer(state: SearchState, action: Action) {
  return _searchReducer(state, action);
}
