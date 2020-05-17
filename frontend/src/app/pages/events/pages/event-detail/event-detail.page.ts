import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { AuthFacade } from 'app/pages/auth/store/facade';

import { EventsFacade } from '../../store/facade';
import { BaseEvent } from '../../models/event.model';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailPage implements OnInit {
  event: BaseEvent;
  readonly isSignIn$: Observable<boolean>;
  readonly objectKeys = Object.keys;

  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly eventsService: EventsService,
    private readonly authFacade: AuthFacade,
    private readonly route: ActivatedRoute
  ) {
    this.isSignIn$ = this.authFacade.isSignIn$;
  }

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe((data: { event: BaseEvent }) => {
      this.event = data.event;
    });
    const eventId: number = +this.route.snapshot.params.eventId;
    this.isSignIn$.pipe(take(1)).subscribe(isSignIn => {
      if (isSignIn) {
        this.eventsService.view(eventId).subscribe();
      }
    });
  }

  onFavoriteClick(eventId: number) {
    this.event = {
      ...this.event,
      favorite: !this.event.favorite,
    };
    this.eventsFacade.updateFavorite(eventId);
  }

  onSourceClick(event: BaseEvent) {
    window.location.href = event.source;
  }
}
