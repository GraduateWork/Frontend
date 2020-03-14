import { LoginState } from './login/state';
import { ErrorState } from './error/state';

import { featureKey as eventsFeatureKey, FeatureEventsState } from 'app/pages/events/store/root.state';

export interface RootState {
  login: LoginState;
  error: ErrorState;
  [eventsFeatureKey]: FeatureEventsState;
}
