import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SearchFacade } from './store/facade';
import { BaseEvent } from '../events/models/event.model';
import { Observable } from 'rxjs';
import { EventsFacade } from '../events/store/facade';
import { AuthFacade } from '../auth/store/facade';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  readonly isLoadingEvents$: Observable<boolean>;
  readonly searchEvents$: Observable<BaseEvent[]>;
  readonly popularNowEvents$: Observable<BaseEvent[]>;
  readonly recommendedEvents$: Observable<BaseEvent[]>;
  readonly isSignIn$: Observable<boolean>;

  constructor(
    private searchFacade: SearchFacade,
    private eventsFacade: EventsFacade,
    private authFacade: AuthFacade,
  ) {
    this.isLoadingEvents$ = this.searchFacade.isLoadingEvents;
    this.searchEvents$ = this.searchFacade.searchEvents$;
    this.popularNowEvents$ = this.searchFacade.popularNowEvents$;
    this.recommendedEvents$ = this.eventsFacade.events$.pipe(map(events => [events[0], events[1], events[2]]));
    this.isSignIn$ = this.authFacade.isSignIn$;
  }

  ionViewWillEnter() {
    this.searchFacade.getPopularNowEvents(3);
  }

  onSearchChange(searchString: string) {
    if (searchString.trim()) {
      this.searchFacade.getSearchEvents(searchString);
    } else {
      setTimeout(() => {
        this.searchFacade.clearSearchEvents();
      }, 400);
    }
  }
}
