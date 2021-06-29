import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectionModalComponent } from './elements/connection-modal/connection-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  // # CONSTRUCTOR
  constructor(private modalCtrl: ModalController) {}

  // # FUNCTIONS
  checkConnection() {
    window.addEventListener('offline', () => {
      console.log('APPLICATION WENT OFFLINE');
      this.modalCtrl
        .create({
          component: ConnectionModalComponent,
          cssClass: 'item-confirm-css',
          backdropDismiss: false,
        })
        .then((modalEl) => {
          modalEl.present();
        });
    });
    window.addEventListener('online', () => {
      console.log('APPLICATION WENT ONLINE');
      this.modalCtrl.dismiss();
    });
  }
}
