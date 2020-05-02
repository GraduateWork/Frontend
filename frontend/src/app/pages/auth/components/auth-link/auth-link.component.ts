import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLinkComponent {
  @Input() readonly link: string;
  @Input() readonly linkText: string;
  @Input() readonly greetText: string;
}
