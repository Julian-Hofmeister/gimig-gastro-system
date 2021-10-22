import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallServiceComponent } from '../call-service/call-service.component';

@Component({
  selector: 'app-show-greetings-modal',
  templateUrl: './show-greetings-modal.component.html',
  styleUrls: ['./show-greetings-modal.component.scss'],
})
export class ShowGreetingsModalComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private modalCtrl: ModalController) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {}

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onClose() {
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  onCallService() {
    this.modalCtrl.dismiss();

    this.modalCtrl
      .create({
        component: CallServiceComponent,
        cssClass: 'confirm-css',
        componentProps: {
          message: 'Bedienung Rufen',
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
