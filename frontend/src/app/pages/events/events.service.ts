import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseEvent } from './models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly serverUrl = 'https://placard-backend.herokuapp.com';

  constructor(private readonly http: HttpClient) { }

  getEvents(): Observable<BaseEvent[]> {
    return this.http.get<BaseEvent[]>(
      `${this.serverUrl}/events`,
      { responseType: 'json' }
    );
  }
}
