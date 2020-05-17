import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from './store/store.module';
import { SharedModule } from 'app/shared/shared.module';
import { SearchPage } from './search.page';
import { BadgeListComponent } from './components/badge-list/badge-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SearchPage },
    ]),
    StoreModule,
    SharedModule,
  ],
  declarations: [
    SearchPage,
    BadgeListComponent,
  ]
})
export class SearchPageModule { }
