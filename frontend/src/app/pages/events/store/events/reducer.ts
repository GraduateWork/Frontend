import { createReducer, on, Action } from '@ngrx/store';

import { getEventsDone } from './actions';
import { EventsState, initialState } from './state';
import { BaseEvent } from '../../models/event.model';

function getEventsHandler(state: EventsState, payload: BaseEvent[]) {
  return { ...state, events: [ ...payload ] };
}

const _eventsReducer = createReducer(initialState,
  on(getEventsDone, (state, { payload }) => {
    return getEventsHandler(state, payload);
  }),
);

export function eventsReducer(state: EventsState, action: Action) {
  return _eventsReducer(state, action);
}

