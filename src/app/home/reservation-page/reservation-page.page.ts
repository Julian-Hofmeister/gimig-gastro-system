import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Table } from '../table.model';
import { TableService } from '../table.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() table: Table;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private navCtrl: NavController,
    private tableService: TableService
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {}

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onActivate() {
    this.navCtrl.navigateForward('home');

    this.tableService.dismissReservation();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
