import { NgModule } from '@angular/core';

import { FavoritesContainerRoutingModule } from './favorites-container-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FavoritesContainerPage } from './favorites-container.page';

@NgModule({
  imports: [
    FavoritesContainerRoutingModule,
    SharedModule,
  ],
  declarations: [
    FavoritesContainerPage,
  ],
})
export class FavoritesModule { }
