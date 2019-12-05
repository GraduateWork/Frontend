import { loginReducer } from './login/login.reducer';
import { eventsReducer } from './events/events.reducer';

export const rootReducers = {
  login: loginReducer,
  events: eventsReducer,
};
