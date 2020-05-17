import { ErrorState } from './error/state';
import { LoadingState } from './loading/state';

export interface RootState {
  error: ErrorState;
  loading: LoadingState;
}
