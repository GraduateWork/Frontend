import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from './store/store.module';

import { EventsPage } from './events.page';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

@NgModule({
  imports: [
    FormsModule,
    EventsRoutingModule,
    StoreModule,
    SharedModule,
  ],
  declarations: [
    EventsPage,
    EventListComponent,
    EventDetailComponent,
    ExpansionPanelComponent,
  ]
})
export class EventsPageModule {}
