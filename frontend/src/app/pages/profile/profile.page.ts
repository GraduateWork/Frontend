import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginFacade } from '@store/login/facade';
import { User } from '@models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$: Observable<User>;

  constructor(private loginFacade: LoginFacade) {
    this.user$ = this.loginFacade.user$;
  }

  ngOnInit() {
  }

  onSignOut() {
    this.loginFacade.signOut();
  }
}
