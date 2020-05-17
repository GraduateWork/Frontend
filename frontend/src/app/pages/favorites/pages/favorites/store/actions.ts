import { createAction, props } from '@ngrx/store';

import { BaseEvent } from 'app/pages/events/models/event.model';
import * as types from './action-types';

export const getFavoritesStarted = createAction(types.GET_FAVORITES_STARTED);
export const getFavoritesDone = createAction(types.GET_FAVORITES_DONE, props<{ payload: BaseEvent[] }>());
export const updateFavorite = createAction(types.UPDATE_FAVORITE, props<{ payload: number }>());
