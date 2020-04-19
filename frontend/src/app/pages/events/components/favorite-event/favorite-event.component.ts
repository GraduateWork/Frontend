import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BaseEvent } from '../../models/event.model';

@Component({
  selector: 'app-favorite-event',
  templateUrl: './favorite-event.component.html',
  styleUrls: ['./favorite-event.component.scss'],
})
export class FavoriteEventComponent {
  @Input() readonly event: BaseEvent;
  @Output() readonly favoriteClick = new EventEmitter<number>();

  onFavoriteClick(eventId: number) {
    this.favoriteClick.emit(eventId);
  }
}
