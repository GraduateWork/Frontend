import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { serverUrl } from 'config';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private readonly http: HttpClient) { }

  getSearchEvents(): Observable<BaseEvent[]> {
    return this.http.get<BaseEvent[]>(
      `${serverUrl}/events`,
      { responseType: 'json' }
    );
  }
}
