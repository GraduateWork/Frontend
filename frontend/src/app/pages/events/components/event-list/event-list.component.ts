import { Component, Input } from '@angular/core';

import { BaseEvent } from '../../models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  @Input() readonly events: BaseEvent[];

  getFormatDate(event: BaseEvent): string {
    const { startTime, endTime } = event;
    if (startTime && endTime) {
      return startTime + ' - ' + endTime;
    } else if (startTime) {
      return startTime;
    } else {
      return endTime;
    }
  }
}
