import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@store/root.state';
import { isLoadingSelector } from './selector';

@Injectable({
  providedIn: 'root',
}) export class LoadingFacade {
  readonly isLoading$: Observable<boolean>;

  constructor(private readonly store$: Store<RootState>) {
    this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
  }
}
