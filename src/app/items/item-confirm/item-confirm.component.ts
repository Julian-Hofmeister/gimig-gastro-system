import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-confirm',
  templateUrl: './item-confirm.component.html',
  styleUrls: ['./item-confirm.component.scss'],
})
export class ItemConfirmComponent {
  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  dismiss() {
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  confirm() {
    this.dismiss();

    this.navCtrl.navigateForward(['/', 'cart']);
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
