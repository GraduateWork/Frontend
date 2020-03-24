import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { EventsFacade } from '../../store/events/facade';
import { BaseEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event$: Observable<BaseEvent>;

  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    const title: string = this.route.snapshot.params.title;
    this.event$ = this.eventsFacade.getEvent(title);
  }
}
