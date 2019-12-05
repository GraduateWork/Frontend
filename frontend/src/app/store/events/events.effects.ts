import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { RootState } from '@store/root.state';
import { getEventsStarted, getEventsDone, getEventsFailure } from './events.actions';
import { EventsService } from 'app/pages/home/pages/events/events.service';

@Injectable()
export class EventsEffects {
  getEventsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getEventsStarted),
    switchMap(action => {
      return this.eventsService.getEvents().pipe(
        map(events => {
          return getEventsDone({ payload: events });
        }),
        catchError(error => {
          return of(getEventsFailure());
        })
      );
    })
  ));

  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private eventsService: EventsService,
    private router: Router,
  ) {}
}
