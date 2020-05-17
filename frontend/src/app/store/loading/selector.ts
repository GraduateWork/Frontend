import { RootState } from '@store/root.state';

export const isLoadingSelector = (state: RootState) => state.loading.isLoading;
