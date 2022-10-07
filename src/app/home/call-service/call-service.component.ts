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

  message1: string = 'Bedienung Rufen';

  message2: string = 'Bedienung Rufen';

  message3: string = 'Bedienung Rufen';

  message4: string = 'Bedienung Rufen';

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
