import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  @Input() events: Event[];

  constructor() { }

  ngOnInit() {}

  getFormatDate(event: Event): string {
    const { startTime, endTime } = event;
    let formatDate = this.formatDate(startTime);
    if (endTime) {
      formatDate += ' - ' + this.formatDate(endTime);
    }
    return formatDate;
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [day, month, year].join('.');
  }
}
