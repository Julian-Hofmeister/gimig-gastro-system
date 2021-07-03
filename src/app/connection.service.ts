import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectionModalComponent } from './elements/connection-modal/connection-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(private modalCtrl: ModalController) {}
  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  checkConnection() {
    window.addEventListener('offline', () => {
      console.log('APPLICATION WENT OFFLINE');

      if (this.modalCtrl) {
        this.modalCtrl.dismiss();
      }
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
      setTimeout(() => {
        console.log('APPLICATION WENT ONLINE');
        this.modalCtrl.dismiss();
      }, 1000);
    });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
