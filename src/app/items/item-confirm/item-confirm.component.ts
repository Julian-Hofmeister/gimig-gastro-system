import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from '../item.model';

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
  public dismiss() {
    this.modalCtrl.dismiss();
  }

  public confirm() {
    this.dismiss();

    this.navCtrl.navigateForward(['/', 'cart']);
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
