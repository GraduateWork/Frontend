import { errorReducer } from './error/reducer';
import { loadingReducer } from './loading/reducer';

export const rootReducers = {
  error: errorReducer,
  loading: loadingReducer,
};
