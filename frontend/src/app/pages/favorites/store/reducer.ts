import { createReducer, on, Action } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { getFavoritesDone } from './actions';
import { FavoritesState, initialState } from './state';

function getFavoritesHandler(state: FavoritesState, events: BaseEvent[]): FavoritesState {
  return { ...state, events: [ ...events ] };
}

const _favoritesReducer = createReducer(initialState,
  on(getFavoritesDone, (state, { payload }) => {
    return getFavoritesHandler(state, payload);
  }),
);

export function favoritesEventsReducer(state: FavoritesState, action: Action) {
  return _favoritesReducer(state, action);
}
