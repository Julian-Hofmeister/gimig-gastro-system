import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-logout-setting',
  templateUrl: './logout-setting.component.html',
  styleUrls: ['./logout-setting.component.scss'],
})
export class LogoutSettingComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onLogout() {
    console.log('LOGGING OUT...');
    this.authService.logout();
    this.onDismiss();
  }

  // ----------------------------------------------------------------------------------------------

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
