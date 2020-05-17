import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, switchMap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import {
  getSearchEventsStarted,
  getSearchEventsDone,
  getPopularNowEventsStarted,
  getPopularNowEventsDone,
  getRecommendedEventsStarted,
  getRecommendedEventsDone,
  updateFavorite,
} from './actions';
import { setError } from '@store/error/actions';
import { SearchService } from '../search.service';
import { FavoritesService } from 'app/pages/favorites/pages/favorites/favorites.service';

@Injectable()
export class SearchEffects {
  getSearchEventsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getSearchEventsStarted),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap(({ payload }) => {
      return this.searchService.getSearchEvents(payload).pipe(
        map(events => getSearchEventsDone({ payload: events })),
        catchError(error => of(setError({ message: error, time: new Date().getDate() }))),
      );
    })
  ));

  getPopularNowEventsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularNowEventsStarted),
    switchMap(({ payload }) => {
      return this.searchService.getPopularNowEvents(payload).pipe(
        map(events =>  getPopularNowEventsDone({ payload: events })),
        catchError(error => of(setError({ message: error, time: new Date().getDate() })))
      );
    })
  ));

  getRecommendedEventsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(getRecommendedEventsStarted),
    switchMap(({ payload }) => {
      return this.searchService.getRecommendedEvents(payload).pipe(
        map(events => getRecommendedEventsDone({ payload: events })),
        catchError(error => of(setError({ message: error, time: new Date().getDate() })))
      );
    })
  ));

  updateFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(updateFavorite),
    switchMap(action => {
      return this.favoritesService.updateFavorite(action.payload).pipe(
        switchMap(() => EMPTY),
        catchError(error => of(setError({ message: error, time: new Date().getDate() })))
      );
    })
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly searchService: SearchService,
    private readonly favoritesService: FavoritesService,
  ) {}
}
