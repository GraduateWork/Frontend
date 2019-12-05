import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { SharedModule } from '@shared/shared.module';
import { EventsListComponent } from './components/events-list/events-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    EventsPage,
    EventsListComponent,
  ]
})
export class EventsPageModule {}
