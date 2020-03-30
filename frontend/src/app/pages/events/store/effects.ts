import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { getEventsStarted, getEventsDone, updateFavorite } from './actions';
import { setError } from '@store/error/actions';
import { EventsService } from 'app/pages/events/events.service';
import { FavoritesService } from 'app/pages/favorites/favories.service';

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

  updateFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(updateFavorite),
    tap(action => {
      this.favoritesService.updateFavorite(action.payload).subscribe(answer => {
        console.log('ANSWER FROM SERVER');
        console.log(answer);
      });
    }),
  ), { dispatch: false });

  constructor(
    private readonly actions$: Actions,
    private readonly eventsService: EventsService,
    private readonly favoritesService: FavoritesService
  ) {}
}