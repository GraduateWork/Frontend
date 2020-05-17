import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { map, filter } from 'rxjs/operators';

import { updateLoading } from './actions';

@Injectable()
export class LoadingEffects {
  updateIsLoadingStartedEffect$ = createEffect(() => this.actions$.pipe(
    filter(action => action.type.endsWith('Started')),
    map(() => updateLoading({ payload: true })),
  ));

  updateIsLoadingDoneEffect$ = createEffect(() => this.actions$.pipe(
    filter(action => action.type.endsWith('Done')),
    map(() => updateLoading({ payload: false })),
  ));

  constructor(
    private readonly actions$: Actions,
  ) {}
}
