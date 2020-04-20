import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/event-list/event-list.module').then(m => m.EventListPageModule),
      },
      {
        path: ':eventId',
        loadChildren: () => import('./pages/event-detail/event-detail.module').then(m => m.EventDetailPageModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule { }
