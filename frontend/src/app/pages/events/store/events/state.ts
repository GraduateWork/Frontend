import { BaseEvent } from '../../models/event.model';

export interface EventsState {
  events: BaseEvent[];
}

export const initialState: EventsState = {
  events: [],
};
