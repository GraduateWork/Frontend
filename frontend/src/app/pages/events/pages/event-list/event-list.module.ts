import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsSharedModule } from '../../events-shared.module';
import { EventListPage } from './event-list.page';
import { EventItemComponent } from './components/event-item/event-item.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EventListPage },
    ]),
    EventsSharedModule,
  ],
  declarations: [
    EventListPage,
    EventItemComponent,
  ]
})
export class EventListPageModule { }
