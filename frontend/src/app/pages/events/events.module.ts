import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { SharedModule } from '@shared/shared.module';
import { EventsListComponent } from './components/events-list/events-list.component';

@NgModule({
  imports: [
    FormsModule,
    MainPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    EventsPage,
    EventsListComponent,
  ]
})
export class EventsPageModule {}
