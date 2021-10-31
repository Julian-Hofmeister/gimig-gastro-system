import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Table } from '../table.model';
import { TableService } from '../table.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  tableSub: Observable<Table>;

  tableNumber = localStorage.getItem('tableNumber');

  table: Table;

  reservationTimestamp = null;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public router: Router,
    private navCtrl: NavController,
    private tableService: TableService
  ) {
    if (router.getCurrentNavigation().extras.state) {
      const table = this.router.getCurrentNavigation().extras.state;
      console.log(table);
      this.reservationTimestamp = table.reservationTimestamp;
    }
  }
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.fetchTableDataFromFireStore();
  }

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

  private fetchTableDataFromFireStore() {
    this.tableSub = this.tableService.getTableData();

    this.tableSub.subscribe((doc: Table) => {
      this.table = doc;

      this.reservationTimestamp = doc.reservationTimestamp;
    });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
