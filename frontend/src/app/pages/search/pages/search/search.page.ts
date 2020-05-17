import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

import { SearchFacade } from './store/facade';
import { Observable } from 'rxjs';
import { LoadingFacade } from '@store/loading/facade';
import { BaseEvent } from 'app/pages/events/models/event.model';
import { AuthFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage implements OnInit, OnDestroy {
  readonly isLoading$: Observable<boolean>;
  readonly searchEvents$: Observable<BaseEvent[]>;
  readonly popularNowEvents$: Observable<BaseEvent[]>;
  readonly recommendedEvents$: Observable<BaseEvent[]>;
  readonly isSignIn$: Observable<boolean>;

  constructor(
    private searchFacade: SearchFacade,
    private authFacade: AuthFacade,
    private loadingFacade: LoadingFacade,
  ) {
    this.isLoading$ = this.loadingFacade.isLoading$;
    this.searchEvents$ = this.searchFacade.searchEvents$;
    this.popularNowEvents$ = this.searchFacade.popularNowEvents$;
    this.recommendedEvents$ = this.searchFacade.recommendedEvents$;
    this.isSignIn$ = this.authFacade.isSignIn$;
  }

  ngOnInit() {
    this.searchFacade.getPopularNowEvents(3);
    this.searchFacade.getRecommendedEvents(3);
  }

  ngOnDestroy() {
    this.searchFacade.clearSearchEvents();
  }

  onSearchChange(searchString: string) {
    if (searchString.trim()) {
      this.searchFacade.getSearchEvents(searchString);
    } else {
      setTimeout(() => {
        this.searchFacade.clearSearchEvents();
      }, 800);
    }
  }

  onFavoriteClick(eventId: number) {
    this.searchFacade.updateFavorite(eventId);
  }
}
