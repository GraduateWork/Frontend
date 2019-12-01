import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterPage } from './filter.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FilterPage }]),
    SharedModule,
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}
