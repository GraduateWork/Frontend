import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { BaseEvent } from 'app/pages/events/models/event.model';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeListComponent {
  @Input() readonly title: string;
  @Input() readonly badgeList: BaseEvent[] = [];
}
