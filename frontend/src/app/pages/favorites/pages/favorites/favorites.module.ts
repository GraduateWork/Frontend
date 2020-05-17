import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from './store/store.module';
import { SharedModule } from '@shared/shared.module';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: FavoritesPage },
    ]),
    StoreModule,
    SharedModule,
  ],
  declarations: [FavoritesPage],
})
export class FavoritesModule { }
