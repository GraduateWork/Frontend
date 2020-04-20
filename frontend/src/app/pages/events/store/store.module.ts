import { NgModule } from '@angular/core';
import { StoreModule as NgrxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { eventsReducer } from './reducer';
import { EventsEffects } from './effects';
import { featureKey } from './state';

@NgModule({
  imports: [
    NgrxStore.forFeature(featureKey, eventsReducer),
    EffectsModule.forFeature([ EventsEffects ]),
  ]
})
export class StoreModule { }
