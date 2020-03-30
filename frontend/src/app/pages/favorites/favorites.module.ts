import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { FavoritesPage } from './favorites.page';
import { StoreModule } from './store/store.module';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  imports: [
    FavoritesRoutingModule,
    StoreModule,
    SharedModule,
  ],
  declarations: [FavoritesPage],
})
export class FavoritesModule { }
