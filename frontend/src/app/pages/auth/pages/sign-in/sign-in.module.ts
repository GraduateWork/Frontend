import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthSharedModule } from '../../auth-shared.module';
import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SignInPage },
    ]),
    AuthSharedModule,
  ],
  declarations: [
    SignInPage
  ]
})
export class SignInPageModule { }
