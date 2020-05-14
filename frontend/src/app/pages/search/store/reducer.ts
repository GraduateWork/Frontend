import { createReducer, on, Action } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { getSearchEventsDone, getPopularNowEventsDone, searchEventsClear, getSearchEventsStarted } from './actions';
import { SearchState, initialState } from './state';

function getSearchEventsHandler(state: SearchState, events: BaseEvent[]): SearchState {
  return { ...state, events: [ ...events ], isLoading: false };
}

function searchEventsClearHandler(state: SearchState): SearchState {
  return { ...state, events: [] };
}

function getPopularNowEventsHandler(state: SearchState, events: BaseEvent[]): SearchState {
  return { ...state, popularNowEvents: [ ...events ] };
}

const _searchReducer = createReducer(initialState,
  on(getSearchEventsStarted, (state, { payload }) => {
    return { ...state, isLoading: true };
  }),
  on(getSearchEventsDone, (state, { payload }) => {
    return getSearchEventsHandler(state, payload);
  }),
  on(searchEventsClear, (state, action) => {
    return searchEventsClearHandler(state);
  }),
  on(getPopularNowEventsDone, (state, { payload }) => {
    return getPopularNowEventsHandler(state, payload);
  }),
);

export function searchReducer(state: SearchState, action: Action) {
  return _searchReducer(state, action);
}
