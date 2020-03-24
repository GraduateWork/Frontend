import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageRoutingModule } from './events-routing.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from './store/store.module';

import { EventsPage } from './events.page';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
  imports: [
    FormsModule,
    MainPageRoutingModule,
    SharedModule,
    StoreModule,
  ],
  declarations: [
    EventsPage,
    EventListComponent,
    EventDetailComponent,
  ]
})
export class EventsPageModule {}
