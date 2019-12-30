import { Error } from '@models/error.model';

export interface ErrorState {
  error: Error;
}

export const initialState: ErrorState = {
  error: null,
};
