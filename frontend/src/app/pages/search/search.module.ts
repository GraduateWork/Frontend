import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { StoreModule } from './store/store.module';
import { SharedModule } from 'app/shared/shared.module';
import { SearchPage } from './search.page';
import { BadgeListComponent } from './badge-list/badge-list.component';

@NgModule({
  imports: [
    SearchRoutingModule,
    StoreModule,
    SharedModule,
  ],
  declarations: [
    SearchPage,
    BadgeListComponent,
  ]
})
export class SearchPageModule { }
