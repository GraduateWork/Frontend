import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsSharedModule } from './events-shared.module';
import { EventsPage } from './events.page';

@NgModule({
  imports: [
    EventsRoutingModule,
    EventsSharedModule,
  ],
  declarations: [
    EventsPage,
  ]
})
export class EventsPageModule { }
