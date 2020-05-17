import { createReducer, on, Action } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { getFavoritesDone, updateFavorite } from './actions';
import { FavoritesState, initialState } from './state';

function getFavoritesHandler(state: FavoritesState, events: BaseEvent[]): FavoritesState {
  return { ...state, events: [ ...events ] };
}

function updateFavoriteHandler(state: FavoritesState, eventId: number): FavoritesState {
  const events = state.events.filter(event => {
    if (event.eventId !== eventId) {
      return event;
    }
  });

  return {
    ...state,
    events,
  };
}

const _favoritesReducer = createReducer(initialState,
  on(getFavoritesDone, (state, { payload }) => {
    return getFavoritesHandler(state, payload);
  }),
  on(updateFavorite, (state, { payload }) => {
    return updateFavoriteHandler(state, payload);
  }),
);

export function favoritesEventsReducer(state: FavoritesState, action: Action) {
  return _favoritesReducer(state, action);
}
