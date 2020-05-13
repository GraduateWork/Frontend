import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Component({
  selector: 'app-small-event-list',
  templateUrl: './small-event-list.component.html',
  styleUrls: ['./small-event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallEventListComponent {
  @Input() readonly events: BaseEvent[] = [];

  trackByEventId(index: number, event: BaseEvent) {
    return event.eventId;
  }
}
