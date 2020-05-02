import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EventsState, featureKey } from './state';

export const selectFeature = createFeatureSelector<EventsState>(featureKey);

export const eventsSelector = createSelector(
  selectFeature,
  (state: EventsState) => state.events,
);

export const eventSelector = createSelector(
  selectFeature,
  (state: EventsState, eventId: number) => {
    return state.events.find(event => event.eventId === eventId);
  },
);
