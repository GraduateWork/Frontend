import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { serverUrl } from 'config';
import { BaseEvent } from './models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private readonly http: HttpClient) { }

  getEvents(): Observable<BaseEvent[]> {
    return this.http.get<BaseEvent[]>(
      `${serverUrl}/events`,
      { responseType: 'json' }
    );
  }

  getEvent(eventId: number): Observable<BaseEvent> {
    const params = new HttpParams().set('eventId', eventId.toString());
    return this.http.get<BaseEvent>(
      `${serverUrl}/event`,
      {
        responseType: 'json',
        params,
      }
    );
  }

  view(eventId: number) {
    const params = new HttpParams().set('eventId', eventId.toString());
    return this.http.post(
      `${serverUrl}/view`,
      null,
      { params },
    );
  }
}
