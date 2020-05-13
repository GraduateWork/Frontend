import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EventsState, featureKey } from './state';

export const selectFeature = createFeatureSelector<EventsState>(featureKey);

export const eventsSelector = createSelector(
  selectFeature,
  // ternary operator needed for search.page (recommended for you, local dev)
  // will be an error if you never watched events list page
  (state: EventsState) => state ? state.events : [],
);

export const eventSelector = createSelector(
  selectFeature,
  (state: EventsState, eventId: number) => {
    return state.events.find(event => event.eventId === eventId);
  },
);
