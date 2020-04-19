import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginFacade } from '@store/login/facade';

import { BaseEvent } from '../../models/event.model';
import { EventsFacade } from '../../store/facade';

@Component({
  selector: 'app-events-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
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

  onFavoriteClick(eventId: number) {
    this.eventsFacade.updateFavorite(eventId);
  }
}
