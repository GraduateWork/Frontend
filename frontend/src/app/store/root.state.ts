import { LoginState } from './login/state';
import { EventsState } from './events/state';
import { ErrorState } from './error/state';

export interface RootState {
  login: LoginState;
  events: EventsState;
  error: ErrorState;
}
