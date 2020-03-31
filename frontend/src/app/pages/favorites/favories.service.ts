import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly serverUrl = 'https://placard-backend.herokuapp.com';

  constructor(private readonly http: HttpClient) { }

  getFavorites(): Observable<BaseEvent[]> {
    return this.http.get<BaseEvent[]>(
      `${this.serverUrl}/favorites`,
      { responseType: 'json' }
    );
  }

  updateFavorite(eventId: number) {
    const params = new HttpParams().set('eventId', eventId.toString());
    return this.http.put(
      `${this.serverUrl}/favorites`,
      null,
      { params }
    );
  }
}
