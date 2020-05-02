import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoginFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.page.html',
  styleUrls: ['./activation.page.scss'],
})
export class ActivationPage implements OnInit {
  code = new FormControl('', Validators.required);

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit() {}

  onSubmit() {
    const code: string = this.code.value;
    this.loginFacade.activation(code);
  }

}
