import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { BaseEvent } from 'app/pages/events/models/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventItemComponent {
  @Input() readonly event: BaseEvent;
  @Input() readonly isSignIn: boolean;

  @Output() readonly favoriteClick = new EventEmitter<number>();

  onFavoriteClick(eventId: number) {
    this.favoriteClick.emit(eventId);
  }
}
