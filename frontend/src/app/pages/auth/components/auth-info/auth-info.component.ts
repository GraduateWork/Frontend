import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss'],
})
export class AuthInfoComponent {
  @Input() readonly text: string;
}
