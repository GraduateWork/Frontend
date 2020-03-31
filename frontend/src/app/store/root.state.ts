import { LoginState } from './login/state';
import { ErrorState } from './error/state';

import { featureKey as eventsFeatureKey, EventsState } from 'app/pages/events/store/state';
import { featureKey as favoritesFeatureKey, FavoritesState } from 'app/pages/favorites/store/state';

export interface RootState {
  login: LoginState;
  error: ErrorState;
  [eventsFeatureKey]: EventsState;
  [favoritesFeatureKey]: FavoritesState;
}
