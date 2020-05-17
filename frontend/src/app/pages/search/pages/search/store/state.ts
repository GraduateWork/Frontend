import { BaseEvent } from 'app/pages/events/models/event.model';

export const featureKey = 'search';

export interface SearchState {
  events: BaseEvent[];
  popularNowEvents: BaseEvent[];
  recommendedEvents: BaseEvent[];
}

export const initialState: SearchState = {
  events: [],
  popularNowEvents: [],
  recommendedEvents: [],
};
