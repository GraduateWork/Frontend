import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { getFavoritesStarted, getFavoritesDone } from './actions';
import { setError } from '@store/error/actions';
import { FavoritesService } from '../favories.service';

@Injectable()
export class FavoritesEventsEffects {
  getFavoritesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getFavoritesStarted),
    switchMap(action => {
      return this.favoritesService.getFavorites().pipe(
        map(events => {
          return getFavoritesDone({ payload: events });
        }),
        catchError(error => {
          return of(setError({ message: error, time: new Date().getDate() }));
        }),
      );
    })
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly favoritesService: FavoritesService,
  ) {}
}
