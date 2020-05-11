import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { RootState } from '@store/root.state';
import { getSearchEventsStarted } from './actions';
import { searchEventsSelector } from './selectors';

@Injectable({
  providedIn: 'root',
}) export class SearchFacade {
  readonly searchEvents$: Observable<BaseEvent[]>;

  constructor(private readonly store$: Store<RootState>) {
    this.searchEvents$ = this.store$.pipe(select(searchEventsSelector));
  }

  getSearchEvents(searchString: string) {
    this.store$.dispatch(getSearchEventsStarted({ payload: searchString }));
  }
}
