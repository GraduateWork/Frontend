import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPage {

  constructor() {}

}
