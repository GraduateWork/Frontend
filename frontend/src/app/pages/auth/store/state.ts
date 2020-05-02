import { User } from '@models/user.model';

export const featureKey = 'login';

export enum LoginStep {
  None,
  SignUp,
  Activation,
  SignIn,
}

export interface LoginState {
  loginStep: LoginStep;
  user: User;
}

export const initialState: LoginState = {
  loginStep: LoginStep.None,
  user: null,
};
