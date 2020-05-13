import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { SmallEventListComponent } from './components/small-event-list/small-event-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SmallEventListComponent,
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
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SmallEventListComponent,
  ]
})
export class SharedModule { }
