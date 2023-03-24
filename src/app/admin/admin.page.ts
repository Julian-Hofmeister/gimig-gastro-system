import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import { LogoutSettingComponent } from './logout-setting/logout-setting.component';
import { TableNumberPanelComponent } from './table-number-panel/table-number-panel.component';
import {EditService} from './edit.service';

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

  ipAddress = localStorage.getItem('ipAddress') ?? '';

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private modalCtrl: ModalController, private router: Router, private toastController: ToastController, private alertController: AlertController, private editService: EditService) {}

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

  async enableEditMode() {
    const alert = await this.alertController.create({
      header: 'Bearbeitungsmodus',
      message: 'Im bearbeitungsmodus können Sie durch langes klicken auf eine Kategorie oder ein Gericht/Getränk ein passendes Bild hochladen.',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
        },
        {
          text: 'Aktivieren',
          role: 'confirm',
          handler: () => {
            this.closeSettings();

            this.editService.enableEditMode();
          },
        }],
    });

    await alert.present();


  }

  // ----------------------------------------------------------------------------------------------

  onSaveIpAddress() {
    localStorage.setItem('ipAddress', this.ipAddress );

    this.presentToast('Ip Adresse gespeichert!').then();
  }
  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
