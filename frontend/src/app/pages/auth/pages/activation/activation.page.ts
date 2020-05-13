import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.page.html',
  styleUrls: ['./activation.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivationPage {
  code = new FormControl('', Validators.required);

  constructor(private authFacade: AuthFacade) { }

  onSubmit() {
    const code: string = this.code.value;
    this.authFacade.activation(code);
  }

}
