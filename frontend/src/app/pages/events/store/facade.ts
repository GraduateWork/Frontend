import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseEvent } from '../models/event.model';
import { RootState } from '@store/root.state';
import { getEventsStarted, updateFavorite } from './actions';
import { eventsSelector, eventSelector } from './selectors';

@Injectable({
  providedIn: 'root',
}) export class EventsFacade {
  readonly events$: Observable<BaseEvent[]>;

  constructor(private readonly store$: Store<RootState>) {
    this.events$ = this.store$.pipe(select(eventsSelector));
  }

  getEvents(): void {
    this.store$.dispatch(getEventsStarted());
  }

  getEvent(eventId: number): Observable<BaseEvent> {
    return this.store$.pipe(select(eventSelector, eventId));
  }

  updateFavorite(eventId: number): void {
    this.store$.dispatch(updateFavorite({ payload: eventId }));
  }
}
