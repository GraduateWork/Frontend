import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FilterPage } from './filter.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: FilterPage }]),
    SharedModule,
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}
