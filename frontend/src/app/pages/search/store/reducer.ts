import { createReducer, on, Action } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import {
  getSearchEventsDone,
  getPopularNowEventsDone,
  searchEventsClear,
  getSearchEventsStarted,
  getRecommendedEventsDone,
} from './actions';
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

function getRecommendedEventsHandler(state: SearchState, events: BaseEvent[]): SearchState {
  return { ...state, recommendedEvents: [ ...events ] };
}

const _searchReducer = createReducer(initialState,
  on(getSearchEventsStarted, (state) => {
    return { ...state, isLoading: true };
  }),
  on(getSearchEventsDone, (state, { payload }) => {
    return getSearchEventsHandler(state, payload);
  }),
  on(searchEventsClear, (state) => {
    return searchEventsClearHandler(state);
  }),
  on(getPopularNowEventsDone, (state, { payload }) => {
    return getPopularNowEventsHandler(state, payload);
  }),
  on(getRecommendedEventsDone, (state, { payload }) => {
    return getRecommendedEventsHandler(state, payload);
  }),
);

export function searchReducer(state: SearchState, action: Action) {
  return _searchReducer(state, action);
}
