import { loginReducer } from './login/login.reducer';
import { errorReducer } from './error/reducer';

export const rootReducers = {
  login: loginReducer,
  error: errorReducer,
};
