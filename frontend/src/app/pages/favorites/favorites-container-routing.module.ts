import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesContainerPage } from './favorites-container.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesContainerPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesContainerRoutingModule { }
