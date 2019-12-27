import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { userSelector } from '@store/login/login.selectors';
import { User } from '@models/user.model';
import { RootState } from '@store/root.state';
import { signOutStarted } from '@store/login/login.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$: Observable<User>;

  constructor(private store$: Store<RootState>) {
    this.user$ = this.store$.pipe(select(userSelector));
  }

  ngOnInit() {
  }

  onSignOut() {
    this.store$.dispatch(signOutStarted());
  }
}
