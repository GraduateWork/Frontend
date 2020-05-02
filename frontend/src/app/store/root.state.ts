import { LoginState } from './login/state';
import { ErrorState } from './error/state';

export interface RootState {
  login: LoginState;
  error: ErrorState;
}
