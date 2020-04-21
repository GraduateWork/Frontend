import { Pipe, PipeTransform } from '@angular/core';

import { BaseEvent } from 'app/pages/events/models/event.model';

@Pipe({name: 'formatEventDate'})
export class FormatEventDatePipe implements PipeTransform {
  transform(event: BaseEvent): string {
    const { startTime, endTime } = event;
    if (startTime && endTime) {
      return startTime + ' - ' + endTime;
    } else if (startTime) {
      return startTime;
    } else {
      return endTime;
    }
  }
}
