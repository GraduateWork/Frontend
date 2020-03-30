import { createReducer, on, Action } from '@ngrx/store';

import { getEventsDone, updateFavorite } from './actions';
import { EventsState, initialState } from './state';
import { BaseEvent } from '../models/event.model';

function getEventsHandler(state: EventsState, payload: BaseEvent[]) {
  return { ...state, events: [ ...payload ] };
}

function updateFavoriteHandler(state: EventsState, eventId: number): EventsState {
  const events = state.events.map(event => {
    if (event.eventId !== eventId) {
      return event;
    } else {
      return {
        ...event,
        favorite: !event.favorite,
      };
    }
  });

  return {
    events,
  };
}

const _eventsReducer = createReducer(initialState,
  on(getEventsDone, (state, { payload }) => {
    return getEventsHandler(state, payload);
  }),
  on(updateFavorite, (state, { payload }) => {
    return updateFavoriteHandler(state, payload);
  }),
);

export function eventsReducer(state: EventsState, action: Action) {
  return _eventsReducer(state, action);
}
