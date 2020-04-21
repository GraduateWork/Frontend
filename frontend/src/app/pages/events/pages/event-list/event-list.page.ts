import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginFacade } from '@store/login/facade';

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
    private readonly loginFacade: LoginFacade,
  ) {
    this.events$ = this.eventsFacade.events$;
    this.isSignIn$ = this.loginFacade.isSignIn$;
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