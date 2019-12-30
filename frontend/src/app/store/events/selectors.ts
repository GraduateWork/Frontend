import { RootState } from '@store/root.state';

export const eventsSelector = (state: RootState) => state.events.events;
