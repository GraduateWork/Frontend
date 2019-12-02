import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { AuthGuard } from 'app/pages/home/pages/profile/auth/auth.guard';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
