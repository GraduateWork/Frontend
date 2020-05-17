import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FavoritesFacade } from './store/facade';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPage implements OnInit {
  readonly favorites$: Observable<BaseEvent[]>;

  constructor(private favoritesFacade: FavoritesFacade) {
    this.favorites$ = favoritesFacade.favorites$;
  }

  ngOnInit() {
    this.favoritesFacade.getFavorites();
  }

  onFavoriteClick(eventId: number) {
    this.favoritesFacade.updateFavorite(eventId);
  }
}
