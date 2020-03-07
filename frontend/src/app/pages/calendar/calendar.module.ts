import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarPage } from './calendar.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: CalendarPage }]),
    SharedModule,
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
