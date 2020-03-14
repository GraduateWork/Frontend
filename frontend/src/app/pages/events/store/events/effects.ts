import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { getEventsStarted, getEventsDone } from './actions';
import { EventsService } from 'app/pages/events/events.service';
import { setError } from '@store/error/actions';

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
          return of(setError({ message: error, time: new Date().getDate() }));
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private eventsService: EventsService,
  ) {}
}
