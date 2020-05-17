import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SearchFacade } from './store/facade';
import { BaseEvent } from '../events/models/event.model';
import { Observable } from 'rxjs';
import { AuthFacade } from '../auth/store/facade';
import { LoadingFacade } from '@store/loading/facade';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  readonly isLoading$: Observable<boolean>;
  readonly searchEvents$: Observable<BaseEvent[]>;
  readonly popularNowEvents$: Observable<BaseEvent[]>;
  readonly recommendedEvents$: Observable<BaseEvent[]>;
  readonly isSignIn$: Observable<boolean>;

  searchInput = '';

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

  ionViewWillEnter() {
    this.searchFacade.getPopularNowEvents(3);
    this.searchFacade.getRecommendedEvents(3);
  }

  ionViewWillLeave() {
    this.searchInput = '';
    this.searchFacade.clearSearchEvents();
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

  onFavoriteClick(eventId: number) {
    this.searchFacade.updateFavorite(eventId);
  }
}
