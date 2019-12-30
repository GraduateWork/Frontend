import { loginReducer } from './login/login.reducer';
import { eventsReducer } from './events/reducer';
import { errorReducer } from './error/reducer';

export const rootReducers = {
  login: loginReducer,
  events: eventsReducer,
  error: errorReducer,
};
