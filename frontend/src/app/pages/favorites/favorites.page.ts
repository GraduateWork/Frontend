import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { FavoritesFacade } from './store/facade';
import { BaseEvent } from '../events/models/event.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPage {
  readonly favorites$: Observable<BaseEvent[]>;

  constructor(private favoritesFacade: FavoritesFacade) {
    this.favorites$ = favoritesFacade.favorites$;
  }

  // ionic life cycle hook instead of ngOnInit
  // (this component aren't destroyed after leaving it)
  ionViewWillEnter() {
    this.favoritesFacade.getFavorites();
  }
}
