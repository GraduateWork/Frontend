import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '@models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  //private serverUrl = 'http://192.168.0.12:8080';
  private serverUrl = 'https://placard-backend.herokuapp.com';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${this.serverUrl}/events`,
      { responseType: 'json' }
    );
  }
}
