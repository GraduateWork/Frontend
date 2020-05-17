import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SearchState, featureKey } from './state';

export const selectFeature = createFeatureSelector<SearchState>(featureKey);

export const isLoadingEventsSelector = createSelector(
  selectFeature,
  (state: SearchState) => state.isLoading,
);

export const searchEventsSelector = createSelector(
  selectFeature,
  (state: SearchState) => state.events,
);

export const popularNowEventsSelector = createSelector(
  selectFeature,
  (state: SearchState) => state.popularNowEvents,
);

export const recommendedEventsSelector = createSelector(
  selectFeature,
  (state: SearchState) => state.recommendedEvents,
);
