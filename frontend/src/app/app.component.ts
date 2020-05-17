import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { RootState } from '@store/root.state';
import { errorSelector } from '@store/error/selector';
import { Error } from '@models/error.model';
import { isLoadingSelector } from '@store/loading/selector';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  error$: Observable<Error>;
  isLoading$: Observable<boolean>;

  constructor(
    private store$: Store<RootState>,
    private toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();

    this.error$ = this.store$.pipe(select(errorSelector));
    this.isLoading$ = this.store$.pipe(select(isLoadingSelector));

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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
