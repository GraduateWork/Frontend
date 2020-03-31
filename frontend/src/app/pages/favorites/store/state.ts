import { BaseEvent } from 'app/pages/events/models/event.model';

export const featureKey = 'favoritesEvents';

export interface FavoritesState {
  events: BaseEvent[];
}

export const initialState: FavoritesState = {
  events: [],
};
