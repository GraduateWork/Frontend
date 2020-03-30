import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { favoritesEventsReducer } from './reducer';
import { FavoritesEventsEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStore.forFeature(featureKey, favoritesEventsReducer),
    EffectsModule.forFeature([ FavoritesEventsEffects ]),
  ]
})
export class StoreModule { }
