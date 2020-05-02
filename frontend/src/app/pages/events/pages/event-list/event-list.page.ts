import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthFacade } from 'app/pages/auth/store/facade';

import { BaseEvent } from '../../models/event.model';
import { EventsFacade } from '../../store/facade';

@Component({
  selector: 'app-events-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListPage implements OnInit {
  readonly events$: Observable<BaseEvent[]>;
  readonly isSignIn$: Observable<boolean>;

  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly authFacade: AuthFacade,
  ) {
    this.events$ = this.eventsFacade.events$;
    this.isSignIn$ = this.authFacade.isSignIn$;
  }

  ngOnInit() {
    this.eventsFacade.getEvents();
  }

  onFavoriteClick(eventId: number) {
    this.eventsFacade.updateFavorite(eventId);
  }

  trackByEventId(index: number, event: BaseEvent) {
    return event.eventId;
  }
}
