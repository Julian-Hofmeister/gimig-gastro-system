import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  passwordInput: string = '';
  passwordArray: string[] = [];
  adminPassword = '301';
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private router: Router, private modalCtrl: ModalController) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public inputNumber(number: string) {
    this.passwordArray.push(number);
    this.passwordInput = this.passwordInput + number;

    if (this.passwordArray.length > 2) {
      this.onSubmit(true);
    }
  }

  public onSubmit(autoSubmit: boolean) {
    if (this.passwordInput != this.adminPassword) {
      console.log('PASSWORD IS INCORRECT');
      if ((autoSubmit && this.passwordArray.length > 3) || !autoSubmit) {
        this.modalCtrl.dismiss();
      }
    } else {
      console.log('PASSWORD IS CORRECT');
      this.modalCtrl.dismiss();
      this.router.navigate(['/', 'admin']);
    }
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
