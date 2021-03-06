import { createAction, props } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import * as types from './action-types';

export const getSearchEventsStarted = createAction(types.GET_SEARCH_EVENTS_STARTED, props<{ payload: string }>());
export const getSearchEventsDone = createAction(types.GET_SEARCH_EVENTS_DONE, props<{ payload: BaseEvent[] }>());
export const searchEventsClear = createAction(types.SEARCH_EVENTS_CLEAR);

export const getPopularNowEventsStarted = createAction(types.GET_POPULAR_NOW_EVENTS_STARTED, props<{ payload: number }>());
export const getPopularNowEventsDone = createAction(types.GET_POPULAR_NOW_EVENTS_DONE, props<{ payload: BaseEvent[] }>());

export const getRecommendedEventsStarted = createAction(types.GET_RECOMMENDED_EVENTS_STARTED, props<{ payload: number }>());
export const getRecommendedEventsDone = createAction(types.GET_RECOMMENDED_EVENTS_DONE, props<{ payload: BaseEvent[] }>());

export const updateFavorite = createAction(types.UPDATE_FAVORITE, props<{ payload: number }>());

