import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseEvent } from 'app/pages/events/models/event.model';
import { RootState } from '@store/root.state';
import { getFavoritesStarted } from './actions';
import { favoritesSelector } from './selectors';

@Injectable({
  providedIn: 'root',
}) export class FavoritesFacade {
  readonly favorites$: Observable<BaseEvent[]>;

  constructor(private readonly store$: Store<RootState>) {
    this.favorites$ = this.store$.pipe(select(favoritesSelector));
  }

  getFavorites() {
    this.store$.dispatch(getFavoritesStarted());
  }
}
