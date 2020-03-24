import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPage,
  },
  {
    path: 'details/:title',
    component: EventDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
