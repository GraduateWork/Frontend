import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsSharedModule } from '../../events-shared.module';
import { EventDetailPage } from './event-detail.page';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EventDetailPage },
    ]),
    EventsSharedModule,
  ],
  declarations: [
    EventDetailPage,
    ExpansionPanelComponent,
  ]
})
export class EventDetailPageModule { }
