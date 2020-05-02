import { User } from '@models/user.model';

export const featureKey = 'auth';

export enum AuthStep {
  None,
  SignUp,
  Activation,
  SignIn,
}

export interface AuthState {
  authStep: AuthStep;
  user: User;
}

export const initialState: AuthState = {
  authStep: AuthStep.None,
  user: null,
};
