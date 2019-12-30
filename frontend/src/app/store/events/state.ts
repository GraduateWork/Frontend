import { Event } from '@models/event.model';

export interface EventsState {
  events: Event[];
}

export const initialState: EventsState = {
  events: [],
};
