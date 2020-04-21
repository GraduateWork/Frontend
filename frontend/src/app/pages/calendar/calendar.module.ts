import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CalendarPage } from './calendar.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: CalendarPage }]),
    SharedModule,
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule { }
