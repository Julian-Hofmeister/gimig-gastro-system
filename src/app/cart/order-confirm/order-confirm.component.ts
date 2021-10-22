import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Item } from 'src/app/items/item.model';
import { CartService } from '../cart.service';
import { OrderSuccesComponent } from '../order-succes/order-succes.component';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
})
export class OrderConfirmComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() loadedCartList: Item[];

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

  ngOnInit() {
    console.log(this.loadedCartList);
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onOrder() {
    console.log(this.loadedCartList);

    this.cartService.order(this.loadedCartList);

    this.loadedCartList = [];

    this.modalCtrl.dismiss();

    this.navCtrl.navigateBack('/home');

    this.modalCtrl
      .create({
        component: OrderSuccesComponent,
        cssClass: 'order-succes-modal-css',
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
