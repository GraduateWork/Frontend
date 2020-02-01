import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPage } from './filter.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: FilterPage }]),
    SharedModule,
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}
