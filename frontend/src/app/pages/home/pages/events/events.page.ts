import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@store/root.state';
import { getEventsStarted } from '@store/events/events.actions';
import { Event } from '@models/event.model';
import { eventsSelector } from '@store/events/events.selectors';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events$: Observable<Event[]>;

  constructor(private store$: Store<RootState>) {
    this.events$ = this.store$.pipe(select(eventsSelector));
  }

  ngOnInit() {
    this.store$.dispatch(getEventsStarted());
  }
}
