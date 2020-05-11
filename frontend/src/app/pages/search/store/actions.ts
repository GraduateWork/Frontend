import { createAction, props } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import * as types from './action-types';

export const getSearchEventsStarted = createAction(types.GET_SEARCH_EVENTS_STARTED, props<{ payload: string }>());
export const getSearchEventsDone = createAction(types.GET_SEARCH_EVENTS_DONE, props<{ payload: BaseEvent[] }>());
