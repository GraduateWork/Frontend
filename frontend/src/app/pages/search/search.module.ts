import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchPage } from './search.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: SearchPage }]),
    SharedModule,
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
