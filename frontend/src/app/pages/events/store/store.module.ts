import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { rootReducers } from './root.reducer';
import { rootEffects } from './root.effect';
import { featureKey } from './root.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStore.forFeature(featureKey, rootReducers),
    EffectsModule.forFeature(rootEffects),
  ]
})
export class StoreModule { }
