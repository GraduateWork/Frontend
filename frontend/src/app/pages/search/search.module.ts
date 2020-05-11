import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { StoreModule } from './store/store.module';
import { SharedModule } from 'app/shared/shared.module';
import { SearchPage } from './search.page';

@NgModule({
  imports: [
    SearchRoutingModule,
    StoreModule,
    SharedModule,
  ],
  declarations: [SearchPage]
})
export class SearchPageModule { }
