import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'sign-up',
        loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule),
      },
      {
        path: 'activation',
        loadChildren: () => import('./pages/activation/activation.module').then(m => m.ActivationPageModule),
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInPageModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
