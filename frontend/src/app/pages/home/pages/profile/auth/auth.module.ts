import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-rouitng.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SharedModule } from '@shared/shared.module';
import { ActivationComponent } from './pages/activation/activation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: [
    SignUpComponent,
    ActivationComponent,
    SignInComponent,
  ]
})
export class AuthModule {}
