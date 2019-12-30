import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Event } from '@models/event.model';
import { RootState } from '@store/root.state';
import { getEventsStarted } from './actions';
import { eventsSelector } from '@store/events/selectors';

@Injectable({
  providedIn: 'root',
}) export class EventsFacade {
  events$: Observable<Event[]>;

  constructor(private store$: Store<RootState>) {
    this.events$ = this.store$.pipe(select(eventsSelector));
  }

  getEvents() {
    this.store$.dispatch(getEventsStarted());
  }
}
