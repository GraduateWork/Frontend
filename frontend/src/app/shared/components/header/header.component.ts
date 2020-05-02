import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthFacade } from 'app/pages/auth/store/facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly isSignIn$: Observable<boolean>;

  constructor(private authFacade: AuthFacade) {
    this.isSignIn$ = authFacade.isSignIn$;
  }

  ngOnInit() {}

}
