import { createAction, props } from '@ngrx/store';

import { Event } from '../../models/event.model';
import * as types from './action-types';

export const getEventsStarted = createAction(types.GET_EVENTS_STARTED);
export const getEventsDone = createAction(types.GET_EVENTS_DONE, props<{ payload: Event[] }>());
