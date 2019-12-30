import { createReducer, on, Action } from '@ngrx/store';

import { getEventsDone } from './actions';
import { EventsState, initialState } from './state';

const _eventsReducer = createReducer(initialState,
  on(getEventsDone, (state, { payload }) => {
    return { ...state, events: [ ...payload ] };
  }),
);

export function eventsReducer(state: EventsState, action: Action) {
  return _eventsReducer(state, action);
}

