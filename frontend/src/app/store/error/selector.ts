import { RootState } from '@store/root.state';

export const errorSelector = (state: RootState) => state.error.error;
