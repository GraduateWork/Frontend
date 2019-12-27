import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@store/root.state';
import { errorSelector } from '@store/error/error.selector';
import { Error } from '@models/error.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  error$: Observable<Error>;

  constructor(private store$: Store<RootState>, private toastController: ToastController) {
    this.error$ = this.store$.pipe(select(errorSelector));

    this.error$.subscribe(async error => {
      if (error) {
        const errorToast = await this.toastController.create({
          message: error.message,
          duration: 2000,
          color: 'secondary',
          position: 'top',
        });
        await errorToast.present();
      }
    });
  }
}
