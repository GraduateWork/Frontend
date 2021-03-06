import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Component({
  selector: 'app-small-event-list',
  templateUrl: './small-event-list.component.html',
  styleUrls: ['./small-event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallEventListComponent {
  @Input() events: BaseEvent[] = [];
  @Input() readonly isSignIn: boolean;

  @Output() readonly favoriteClick = new EventEmitter<number>();

  trackByEventId(index: number, event: BaseEvent) {
    return event.eventId;
  }

  onFavoriteClick(eventId: number) {
    this.favoriteClick.emit(eventId);
  }
}
