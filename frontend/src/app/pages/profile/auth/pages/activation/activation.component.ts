import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { RootState } from '@store/root.state';
import { activationStarted } from '@store/login/login.actions';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss'],
})
export class ActivationComponent implements OnInit {
  code = new FormControl('', Validators.required);

  constructor(private store$: Store<RootState>) { }

  ngOnInit() {}

  onSubmit() {
    const code = this.code.value;
    this.store$.dispatch(activationStarted({ payload: code }));
  }

}
