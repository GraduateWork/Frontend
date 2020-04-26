import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-logo',
  templateUrl: './auth-logo.component.html',
  styleUrls: ['./auth-logo.component.scss'],
})
export class AuthLogoComponent {
  @Input() readonly logoSrc: string;
}
