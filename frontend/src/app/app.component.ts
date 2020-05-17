import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Error } from '@models/error.model';
import { LoadingFacade } from '@store/loading/facade';
import { ErrorFacade } from '@store/error/facade';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly error$: Observable<Error>;
  readonly isLoading$: Observable<boolean>;

  constructor(
    private toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private errorFacade: ErrorFacade,
    private loadingFacade: LoadingFacade,
  ) {
    this.initializeApp();

    this.error$ = this.errorFacade.error$;
    this.isLoading$ = this.loadingFacade.isLoading$;

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
