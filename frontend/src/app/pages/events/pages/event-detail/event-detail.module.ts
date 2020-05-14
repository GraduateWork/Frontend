import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsSharedModule } from '../../events-shared.module';
import { EventDetailPage } from './event-detail.page';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { EventDetailResolver } from './event-detail-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EventDetailPage,
        resolve: {
          event: EventDetailResolver,
        }
      },
    ]),
    EventsSharedModule,
  ],
  declarations: [
    EventDetailPage,
    ExpansionPanelComponent,
  ]
})
export class EventDetailPageModule { }
