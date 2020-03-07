import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoginFacade } from '@store/login/facade';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss'],
})
export class ActivationComponent implements OnInit {
  code = new FormControl('', Validators.required);

  constructor(private loginFacade: LoginFacade) { }

  ngOnInit() {}

  onSubmit() {
    const code: string = this.code.value;
    this.loginFacade.activation(code);
  }

}
