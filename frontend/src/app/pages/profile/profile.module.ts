import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { AuthGuard } from 'app/pages/profile/auth/auth.guard';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    SharedModule,
    AuthModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage,
        canActivate: [AuthGuard],
      },
    ])
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
