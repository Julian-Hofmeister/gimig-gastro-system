import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LogoutSettingComponent } from './logout-setting/logout-setting.component';
import { TableNumberPanelComponent } from './table-number-panel/table-number-panel.component';

// declare let KioskPlugin: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private modalCtrl: ModalController, private router: Router) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  openTableNumberModal() {
    this.modalCtrl
      .create({
        component: TableNumberPanelComponent,
        cssClass: 'table-number-panel-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openLogoutConfirmationModal() {
    this.modalCtrl
      .create({
        component: LogoutSettingComponent,
        cssClass: 'logout-confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  closeSettings() {
    this.router.navigate(['/', 'home']);
  }

  // ----------------------------------------------------------------------------------------------

  exitKioskMode() {
    // KioskPlugin.exitKiosk()
    // KioskMode.enable();
    // ActivityOptions.setLockTaskEnabled();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
