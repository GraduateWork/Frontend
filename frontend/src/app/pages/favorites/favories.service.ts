import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { serverUrl } from 'config';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private readonly http: HttpClient) { }

  getFavorites(): Observable<BaseEvent[]> {
    return this.http.get<BaseEvent[]>(
      `${serverUrl}/favorites`,
      { responseType: 'json' }
    );
  }

  updateFavorite(eventId: number) {
    const params = new HttpParams().set('eventId', eventId.toString());
    return this.http.put(
      `${serverUrl}/favorites`,
      null,
      { params }
    );
  }
}
