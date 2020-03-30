import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FavoritesFacade } from './store/facade';
import { BaseEvent } from '../events/models/event.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  readonly favorites$: Observable<BaseEvent[]>;

  constructor(private favoritesFacade: FavoritesFacade) {
    this.favorites$ = favoritesFacade.favorites$;
  }

  ngOnInit() {
    this.favoritesFacade.getFavorites();
  }
}
