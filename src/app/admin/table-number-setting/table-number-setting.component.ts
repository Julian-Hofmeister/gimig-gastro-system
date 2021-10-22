import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Table } from 'src/app/home/table.model';
import { TableService } from 'src/app/home/table.service';

@Component({
  selector: 'app-table-number-setting',
  templateUrl: './table-number-setting.component.html',
  styleUrls: ['./table-number-setting.component.scss'],
})
export class TableNumberSettingComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  table: Table;

  tableNumber: number = 1;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private tableService: TableService,
    private navCtrl: NavController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  setTablenumber() {
    localStorage.setItem('tableNumber', this.tableNumber.toString());
    console.log('TABLENUMBER ' + localStorage.getItem('tableNumber'));
    this.modalCtrl.dismiss();

    this.tableService.setTableData(this.tableNumber.toString());
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
