import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { StoreModule } from './store/store.module';
import { FavoriteEventComponent } from './components/favorite-event/favorite-event.component';
import { FormatEventDatePipe } from './pipes/format-event-date.pipe';

@NgModule({
  imports: [
    SharedModule,
    StoreModule,
  ],
  declarations: [
    FavoriteEventComponent,
    FormatEventDatePipe,
  ],
  exports: [
    SharedModule,
    StoreModule,
    FavoriteEventComponent,
    FormatEventDatePipe,
  ],
})
export class EventsSharedModule { }
