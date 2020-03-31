import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { eventsReducer } from './reducer';
import { EventsEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStore.forFeature(featureKey, eventsReducer),
    EffectsModule.forFeature([ EventsEffects ]),
  ]
})
export class StoreModule { }
