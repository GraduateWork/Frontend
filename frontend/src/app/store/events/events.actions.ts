import { createAction, props } from '@ngrx/store';

import { Event } from '@models/event.model';

const prefix = '[Events]';

const GET_EVENTS_STARTED = `${prefix} Get Events Started`;
const GET_EVENTS_DONE = `${prefix} Get Events Done`;
const GET_EVENTS_FAILURE = `${prefix} Get Events Failure`;

export const getEventsStarted = createAction(GET_EVENTS_STARTED);
export const getEventsDone = createAction(GET_EVENTS_DONE, props<{ payload: Event[] }>());
export const getEventsFailure = createAction(GET_EVENTS_FAILURE);
