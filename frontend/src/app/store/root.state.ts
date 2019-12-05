import { LoginState } from './login/login.reducer';
import { EventsState } from './events/events.reducer';

export interface RootState {
  login: LoginState;
  events: EventsState;
}
