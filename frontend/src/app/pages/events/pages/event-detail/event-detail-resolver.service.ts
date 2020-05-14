import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BaseEvent } from '../../models/event.model';
import { EventsService } from '../../events.service';

@Injectable({ providedIn: 'root' })
export class EventDetailResolver implements Resolve<BaseEvent> {
  constructor(private eventsService: EventsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<BaseEvent> {
    const eventId = +route.paramMap.get('eventId');
    return this.eventsService.getEvent(eventId);
  }
}
