import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { ProfilePage } from './profile.page';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage,
        canActivate: [AuthGuard],
      },
    ]),
    SharedModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
