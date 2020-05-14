import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { StoreModule } from './store/store.module';
import { FormatEventDatePipe } from './pipes/format-event-date.pipe';

@NgModule({
  declarations: [
    FormatEventDatePipe,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    StoreModule,
    FormatEventDatePipe,
  ],
})
export class EventsSharedModule { }
