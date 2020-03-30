import { BaseEvent } from '../models/event.model';

export const featureKey = 'events';

export interface EventsState {
  events: BaseEvent[];
}

export const initialState: EventsState = {
  events: [],
};
