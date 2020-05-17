import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { searchReducer } from './reducer';
import { SearchEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  imports: [
    NgrxStore.forFeature(featureKey, searchReducer),
    EffectsModule.forFeature([ SearchEffects ]),
  ]
})
export class StoreModule { }
