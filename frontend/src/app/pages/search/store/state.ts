import { BaseEvent } from 'app/pages/events/models/event.model';

export const featureKey = 'search';

export interface SearchState {
  isLoading: boolean;
  events: BaseEvent[];
  popularNowEvents: BaseEvent[];
}

export const initialState: SearchState = {
  isLoading: false,
  events: [],
  popularNowEvents: [],
};
