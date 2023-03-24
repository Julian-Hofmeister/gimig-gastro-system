import {Component, Input, OnInit} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {Wifi} from '../../shared/wifi.model';
import {Restaurant} from "../restaurant.model";

@Component({
  selector: 'app-wifi-modal',
  templateUrl: './wifi-modal.component.html',
  styleUrls: ['./wifi-modal.component.scss'],
})
export class WifiModalComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  restaurant: Restaurant = JSON.parse(localStorage.getItem('restaurant'));

  qrCodeImage: string;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private storage: AngularFireStorage) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit() {
    this.qrCodeImage = await this.storage
      .ref(this.restaurant.wifiQrCode)
      .getDownloadURL()
      .toPromise();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
