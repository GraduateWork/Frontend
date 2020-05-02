import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducer } from './reducer';
import { AuthEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  imports: [
    NgrxStore.forFeature(featureKey, authReducer),
    EffectsModule.forFeature([ AuthEffects ]),
  ]
})
export class StoreModule { }
