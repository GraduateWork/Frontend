import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { RootState } from '@store/root.state';
import { getSearchEventsStarted, getPopularNowEventsStarted, searchEventsClear, getRecommendedEventsStarted } from './actions';
import { searchEventsSelector, popularNowEventsSelector, isLoadingEventsSelector, recommendedEventsSelector } from './selectors';

@Injectable({
  providedIn: 'root',
}) export class SearchFacade {
  readonly isLoadingEvents: Observable<boolean>;
  readonly searchEvents$: Observable<BaseEvent[]>;
  readonly popularNowEvents$: Observable<BaseEvent[]>;
  readonly recommendedEvents$: Observable<BaseEvent[]>;

  constructor(private readonly store$: Store<RootState>) {
    this.isLoadingEvents = this.store$.pipe(select(isLoadingEventsSelector));
    this.searchEvents$ = this.store$.pipe(select(searchEventsSelector));
    this.popularNowEvents$ = this.store$.pipe(select(popularNowEventsSelector));
    this.recommendedEvents$ = this.store$.pipe(select(recommendedEventsSelector));
  }

  getSearchEvents(searchString: string): void {
    this.store$.dispatch(getSearchEventsStarted({ payload: searchString }));
  }

  getPopularNowEvents(count: number): void {
    this.store$.dispatch(getPopularNowEventsStarted({ payload: count }));
  }

  getRecommendedEvents(count: number): void {
    this.store$.dispatch(getRecommendedEventsStarted({ payload: count }));
  }

  clearSearchEvents(): void {
    this.store$.dispatch(searchEventsClear());
  }
}
