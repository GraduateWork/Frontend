import { createReducer, on, Action } from '@ngrx/store';

import {
  getEventsDone,
  getEventsFailure,
} from './events.actions';
import { Event } from '@models/event.model';

export interface EventsState {
  events: Event[];
}

export const initialState: EventsState = {
  events: [],
};

const _eventsReducer = createReducer(initialState,
  on(getEventsDone, (state, { type, payload }) => {
    return { ...state, events: [ ...payload ] };
  }),
  on(getEventsFailure, (state, action) => {
    return { ...state };
  }),
);

export function eventsReducer(state: EventsState, action: Action) {
  return _eventsReducer(state, action);
}

