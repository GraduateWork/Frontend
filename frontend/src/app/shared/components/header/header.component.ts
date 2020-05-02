import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly isSignIn$: Observable<boolean>;

  constructor(private loginFacade: LoginFacade) {
    this.isSignIn$ = loginFacade.isSignIn$;
  }

  ngOnInit() {}

}
