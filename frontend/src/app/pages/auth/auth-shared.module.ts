import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AuthLogoComponent } from './components/auth-logo/auth-logo.component';
import { AuthInfoComponent } from './components/auth-info/auth-info.component';
import { AuthLinkComponent } from './components/auth-link/auth-link.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [
    AuthLogoComponent,
    AuthInfoComponent,
    AuthLinkComponent,
    AuthButtonComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    AuthLogoComponent,
    AuthInfoComponent,
    AuthLinkComponent,
    AuthButtonComponent,
    SharedModule,
  ],
})
export class AuthSharedModule { }
