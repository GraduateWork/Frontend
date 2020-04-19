import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import * as mapper from 'assets/i18n/ru.json';
import { BaseEvent } from 'app/pages/events/models/event.model';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @Input() readonly title: string;
  @Input() readonly event: BaseEvent;
  readonly objectKeys = Object.keys;
  readonly mapper = (mapper as any).default;
  isOpen = false;

  onOpen() {
    this.isOpen = !this.isOpen;
  }
}
