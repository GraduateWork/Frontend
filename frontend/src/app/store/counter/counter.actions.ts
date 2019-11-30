import { createAction } from '@ngrx/store';

const prefix = '[Counter]';

export const increment = createAction(`${prefix} Increment`);
export const decrement = createAction(`${prefix} Decrement`);
export const reset = createAction(`${prefix} Reset`);
