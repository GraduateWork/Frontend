import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FavoritesState, featureKey } from './state';

export const selectFeature = createFeatureSelector<FavoritesState>(featureKey);

export const favoritesSelector = createSelector(
  selectFeature,
  (state: FavoritesState) => state.events,
);
