import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';

@Component({
  selector: 'app-send-pay-request',
  templateUrl: './send-pay-request.component.html',
  styleUrls: ['./send-pay-request.component.scss'],
})
export class SendPayRequestComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  paysTogether: string = null;
  paysCache: string = null;
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public onChangePaysTogether(selection: string) {
    this.paysTogether = selection;
  }
  public onChangePaysCache(selection: string) {
    this.paysCache = selection;
  }

  public onCall() {
    const paysCache: boolean = this.paysCache == 'true' ? true : false;
    const paysTogether: boolean = this.paysTogether == 'true' ? true : false;
    this.tableService.sendPayRequest(paysCache, paysTogether);
    this.modalCtrl.dismiss();

    this.openFeedbackPage();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
  private openFeedbackPage() {
    setTimeout(() => {
      this.router.navigate(['/', 'feedback']);
    }, 6000);
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
