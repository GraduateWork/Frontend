import { NgModule } from '@angular/core';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { StoreModule } from './store/store.module';
import { SharedModule } from '@shared/shared.module';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    FavoritesRoutingModule,
    StoreModule,
    SharedModule,
  ],
  declarations: [FavoritesPage],
})
export class FavoritesModule { }
