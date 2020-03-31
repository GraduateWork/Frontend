import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginFacade } from '@store/login/facade';

import { EventsFacade } from '../../store/facade';
import { BaseEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event$: Observable<BaseEvent>;
  readonly isSignIn$: Observable<boolean>;
  readonly objectKeys = Object.keys;

  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly loginFacade: LoginFacade,
    private readonly route: ActivatedRoute
  ) {
    this.isSignIn$ = this.loginFacade.isSignIn$;
  }

  ngOnInit() {
    const title: number = +this.route.snapshot.params.title;
    this.event$ = this.eventsFacade.getEvent(title);
  }

  getTime(event: BaseEvent) {
    if (event.startTime && event.endTime) {
      return event.startTime + ' - ' + event.endTime;
    } else if (event.startTime) {
      return event.startTime;
    } else {
      return event.endTime;
    }
  }

  onFavoriteClick(eventId: number) {
    this.eventsFacade.updateFavorite(eventId);
  }
}
