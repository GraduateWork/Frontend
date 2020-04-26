import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.scss'],
})
export class AuthLinkComponent {
  @Input() readonly link: string;
  @Input() readonly linkText: string;
  @Input() readonly greetText: string;
}