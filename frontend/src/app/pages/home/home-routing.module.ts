import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'filter',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/filter/filter.module').then(m => m.FilterPageModule)
          }
        ]
      },
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
