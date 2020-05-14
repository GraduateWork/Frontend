import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { RootState } from '@store/root.state';
import { getSearchEventsStarted, getPopularNowEventsStarted, searchEventsClear } from './actions';
import { searchEventsSelector, popularNowEventsSelector, isLoadingEventsSelector } from './selectors';

@Injectable({
  providedIn: 'root',
}) export class SearchFacade {
  readonly isLoadingEvents: Observable<boolean>;
  readonly searchEvents$: Observable<BaseEvent[]>;
  readonly popularNowEvents$: Observable<BaseEvent[]>;

  constructor(private readonly store$: Store<RootState>) {
    this.isLoadingEvents = this.store$.pipe(select(isLoadingEventsSelector));
    this.searchEvents$ = this.store$.pipe(select(searchEventsSelector));
    this.popularNowEvents$ = this.store$.pipe(select(popularNowEventsSelector));
  }

  getSearchEvents(searchString: string): void {
    this.store$.dispatch(getSearchEventsStarted({ payload: searchString }));
  }

  getPopularNowEvents(count: number): void {
    this.store$.dispatch(getPopularNowEventsStarted({ payload: count }));
  }

  clearSearchEvents(): void {
    this.store$.dispatch(searchEventsClear());
  }
}
