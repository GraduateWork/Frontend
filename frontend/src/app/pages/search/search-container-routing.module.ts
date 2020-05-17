import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchContainerPage } from './search-container.page';

const routes: Routes = [
  {
    path: '',
    component: SearchContainerPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchContainerRoutingModule { }
