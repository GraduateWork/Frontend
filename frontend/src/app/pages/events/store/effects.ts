import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { getEventsStarted, getEventsDone, updateFavorite } from './actions';
import { setError } from '@store/error/actions';
import { EventsService } from 'app/pages/events/events.service';
import { FavoritesService } from 'app/pages/favorites/pages/favorites/favorites.service';

@Injectable()
export class EventsEffects {
  getEventsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getEventsStarted),
    switchMap(() => {
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

  updateFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(updateFavorite),
    switchMap(action => {
      return this.favoritesService.updateFavorite(action.payload).pipe(
        switchMap(() => {
          return EMPTY;
        }),
        catchError(error => {
          return of(setError({ message: error, time: new Date().getDate() }));
        })
      );
    }),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly eventsService: EventsService,
    private readonly favoritesService: FavoritesService
  ) {}
}
