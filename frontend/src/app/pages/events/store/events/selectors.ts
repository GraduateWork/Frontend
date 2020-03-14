import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RootState } from '@store/root.state';
import { FeatureEventsState, featureKey } from '../root.state';

export const selectFeature = createFeatureSelector<RootState, FeatureEventsState>(featureKey);

export const eventsSelector = createSelector(
  selectFeature,
  (state: FeatureEventsState) => state.events.events,
);
