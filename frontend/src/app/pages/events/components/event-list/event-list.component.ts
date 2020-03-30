import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseEvent } from '../../models/event.model';
import { EventsFacade } from '../../store/events/facade';

@Component({
  selector: 'app-events-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  readonly events$: Observable<BaseEvent[]>;

  constructor(private readonly eventsFacade: EventsFacade) {
    this.events$ = eventsFacade.events$;
  }

  ngOnInit() {
    this.eventsFacade.getEvents();
  }

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
