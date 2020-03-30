import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RootState } from '@store/root.state';
import { FavoritesState, featureKey } from './state';

export const selectFeature = createFeatureSelector<RootState, FavoritesState>(featureKey);

export const favoritesSelector = createSelector(
  selectFeature,
  (state: FavoritesState) => state.events,
);
