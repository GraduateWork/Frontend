import { EventsState } from './events/state';

export const featureKey = 'events';

export interface FeatureEventsState {
  events: EventsState;
}
