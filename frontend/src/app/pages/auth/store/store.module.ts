import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { loginReducer } from './reducer';
import { LoginEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  imports: [
    NgrxStore.forFeature(featureKey, loginReducer),
    EffectsModule.forFeature([ LoginEffects ]),
  ]
})
export class StoreModule { }
