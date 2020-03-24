import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseEvent } from './models/event.model';
import { EventsFacade } from './store/events/facade';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  readonly events$: Observable<BaseEvent[]>;

  constructor(private readonly eventsFacade: EventsFacade) {
    this.events$ = eventsFacade.events$;
  }

  ngOnInit() {
    this.eventsFacade.getEvents();
  }
}
