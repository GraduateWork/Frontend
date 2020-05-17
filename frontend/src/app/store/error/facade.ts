import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@store/root.state';
import { errorSelector } from './selector';
import { Error } from '@models/error.model';

@Injectable({
  providedIn: 'root',
}) export class ErrorFacade {
  readonly error$: Observable<Error>;

  constructor(private readonly store$: Store<RootState>) {
    this.error$ = this.store$.pipe(select(errorSelector));
  }
}
