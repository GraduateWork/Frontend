import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { serverUrl } from 'config';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private readonly http: HttpClient) { }

  getSearchEvents(searchString: string): Observable<BaseEvent[]> {
    const params = new HttpParams().set('request', searchString);
    return this.http.get<BaseEvent[]>(
      `${serverUrl}/search`,
      {
        responseType: 'json',
        params,
      }
    );
  }

  getPopularNowEvents(count: number): Observable<BaseEvent[]> {
    const params = new HttpParams().set('count', count.toString());
    return this.http.get<BaseEvent[]>(
      `${serverUrl}/top`,
      {
        responseType: 'json',
        params,
      },
    );
  }
}
