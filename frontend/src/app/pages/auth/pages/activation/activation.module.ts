import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthSharedModule } from '../../auth-shared.module';
import { ActivationPage } from './activation.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ActivationPage },
    ]),
    AuthSharedModule,
  ],
  declarations: [
    ActivationPage
  ]
})
export class ActivationPageModule { }
