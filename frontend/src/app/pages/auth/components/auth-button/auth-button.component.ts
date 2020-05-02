import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthButtonComponent {
  @Input() readonly text: string;
  @Input() readonly type = 'submit';
  @Input() readonly isDisabled: boolean;

  @Output() readonly submit = new EventEmitter();

  onSubmit(): void {
    this.submit.emit(null);
  }
}
