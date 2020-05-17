import { createAction, props } from '@ngrx/store';

import * as types from './action-types';

export const updateLoading = createAction(types.UPDATE_LOADING, props<{ payload: boolean }>());
