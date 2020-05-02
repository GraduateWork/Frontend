import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthInfoComponent {
  @Input() readonly text: string;
}
