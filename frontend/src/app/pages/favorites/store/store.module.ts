import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { favoritesEventsReducer } from './reducer';
import { FavoritesEventsEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  imports: [
    NgrxStore.forFeature(featureKey, favoritesEventsReducer),
    EffectsModule.forFeature([ FavoritesEventsEffects ]),
  ]
})
export class StoreModule { }
