import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthFacade } from 'app/pages/auth/store/facade';

import { EventsFacade } from '../../store/facade';
import { BaseEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailPage implements OnInit {
  event$: Observable<BaseEvent>;
  readonly isSignIn$: Observable<boolean>;
  readonly objectKeys = Object.keys;

  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly authFacade: AuthFacade,
    private readonly route: ActivatedRoute
  ) {
    this.isSignIn$ = this.authFacade.isSignIn$;
  }

  ngOnInit() {
    const eventId: number = +this.route.snapshot.params.eventId;
    this.event$ = this.eventsFacade.getEvent(eventId);
  }

  onFavoriteClick(eventId: number) {
    this.eventsFacade.updateFavorite(eventId);
  }
}
