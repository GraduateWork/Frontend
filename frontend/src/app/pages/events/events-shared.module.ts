import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { StoreModule } from './store/store.module';
import { FavoriteEventComponent } from './components/favorite-event/favorite-event.component';
import { FormatEventDatePipe } from './pipes/format-event-date.pipe';

@NgModule({
  declarations: [
    FavoriteEventComponent,
    FormatEventDatePipe,
  ],
  imports: [
    SharedModule,
    StoreModule,
  ],
  exports: [
    SharedModule,
    StoreModule,
    FavoriteEventComponent,
    FormatEventDatePipe,
  ],
})
export class EventsSharedModule { }
