import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-rouitng.module';
import { AuthSharedModule } from './auth-shared.module';
import { AuthPage } from './auth.page';

@NgModule({
  imports: [
    AuthRoutingModule,
    AuthSharedModule,
  ],
  declarations: [
    AuthPage,
  ]
})
export class AuthModule { }
