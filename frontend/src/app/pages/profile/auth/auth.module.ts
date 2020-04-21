import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-rouitng.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SharedModule } from '@shared/shared.module';
import { ActivationComponent } from './pages/activation/activation.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: [
    SignUpComponent,
    ActivationComponent,
    SignInComponent,
  ]
})
export class AuthModule { }
