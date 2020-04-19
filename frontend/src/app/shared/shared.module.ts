import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
