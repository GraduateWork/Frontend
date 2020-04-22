import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthSharedModule } from '../../auth-shared.module';
import { SignUpPage } from './sign-up.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SignUpPage },
    ]),
    AuthSharedModule,
  ],
  declarations: [
    SignUpPage,
  ]
})
export class SignUpPageModule { }
