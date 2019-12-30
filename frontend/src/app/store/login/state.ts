import { User } from '@models/user.model';

export interface LoginState {
  isSignIn: boolean;
  isActivated: boolean;
  user: User;
}

export const initialState: LoginState = {
  isSignIn: false,
  isActivated: false,
  user: null,
};