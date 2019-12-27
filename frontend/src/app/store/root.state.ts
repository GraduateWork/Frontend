import { LoginState } from './login/login.reducer';
import { EventsState } from './events/events.reducer';
import { ErrorState } from './error/error.reducer';

export interface RootState {
  login: LoginState;
  events: EventsState;
  error: ErrorState;
}
