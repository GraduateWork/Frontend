import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { SmallEventListComponent } from './components/small-event-list/small-event-list.component';
import { FavoriteEventComponent } from './components/favorite-event/favorite-event.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SmallEventListComponent,
    FavoriteEventComponent,
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
    FavoriteEventComponent,
  ]
})
export class SharedModule { }
