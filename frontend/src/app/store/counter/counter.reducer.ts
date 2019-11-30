import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0,
}

const _counterReducer = createReducer(initialState,
  on(increment, state => {
    return { ...state, value: state.value + 1 };
  }),
  on(decrement, state => {
    return { ...state, value: state.value - 1 };
  }),
  on(reset, state => {
    return { ...state, value: 0 };
  }),
);

export function counterReducer(state: CounterState, action: Action) {
  return _counterReducer(state, action);
}
