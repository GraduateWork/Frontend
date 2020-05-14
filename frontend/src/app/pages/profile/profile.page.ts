import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthFacade } from 'app/pages/auth/store/facade';
import { User } from '@models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  user$: Observable<User>;

  constructor(private authFacade: AuthFacade) {
    this.user$ = this.authFacade.user$;
  }

  onSignOut() {
    this.authFacade.signOut();
  }
}
