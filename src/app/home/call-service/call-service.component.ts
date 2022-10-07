import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';

@Component({
  selector: 'app-call-service',
  templateUrl: './call-service.component.html',
  styleUrls: ['./call-service.component.scss'],
})
export class CallServiceComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() message: string = 'Bedienung Rufen';

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  message1 = localStorage.getItem('serviceMessage1');

  message2 = localStorage.getItem('serviceMessage2');

  message3 = localStorage.getItem('serviceMessage3');

  message4 = localStorage.getItem('serviceMessage4');

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onCallService() {
    this.tableService.sendServiceRequest();
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
