import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { SharedModule } from '@shared/shared.module';
import { EventsListComponent } from './components/events-list/events-list.component';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    FormsModule,
    MainPageRoutingModule,
    SharedModule,
    StoreModule,
  ],
  declarations: [
    EventsPage,
    EventsListComponent,
  ]
})
export class EventsPageModule {}
