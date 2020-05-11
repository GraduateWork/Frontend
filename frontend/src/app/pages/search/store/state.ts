import { BaseEvent } from 'app/pages/events/models/event.model';

export const featureKey = 'search';

export interface SearchState {
  events: BaseEvent[];
}

export const initialState: SearchState = {
  events: [],
};
