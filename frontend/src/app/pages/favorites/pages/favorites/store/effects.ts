import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { getFavoritesStarted, getFavoritesDone, updateFavorite } from './actions';
import { setError } from '@store/error/actions';
import { FavoritesService } from '../favorites.service';

@Injectable()
export class FavoritesEventsEffects {
  getFavoritesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getFavoritesStarted),
    switchMap(() => {
      return this.favoritesService.getFavorites().pipe(
        map(events => getFavoritesDone({ payload: events })),
        catchError(error => of(setError({ message: error, time: new Date().getDate() }))),
      );
    }),
  ));

  updateFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(updateFavorite),
    switchMap(action => {
      return this.favoritesService.updateFavorite(action.payload).pipe(
        switchMap(() => EMPTY),
        catchError(error => of(setError({ message: error, time: new Date().getDate() }))),
      );
    }),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly favoritesService: FavoritesService,
  ) {}
}
