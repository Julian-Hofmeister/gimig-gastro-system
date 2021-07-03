import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { OrderSuccesComponent } from '../order-succes/order-succes.component';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
})
export class OrderConfirmComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  onOrder() {
    this.cartService.order();
    this.modalCtrl.dismiss();
    this.navCtrl.navigateBack('/home');

    this.modalCtrl
      .create({
        component: OrderSuccesComponent,
        cssClass: 'item-confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
