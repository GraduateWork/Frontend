import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
