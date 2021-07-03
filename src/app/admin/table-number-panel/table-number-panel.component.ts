import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TableService } from 'src/app/home/table.service';

@Component({
  selector: 'app-table-number-panel',
  templateUrl: './table-number-panel.component.html',
  styleUrls: ['./table-number-panel.component.scss'],
})
export class TableNumberPanelComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  tableNumberInput: string = '';
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private modalCtrl: ModalController,
    private tableService: TableService
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public inputNumber(number: string) {
    this.tableNumberInput = this.tableNumberInput + number;
    console.log(this.tableNumberInput);
  }

  public onSubmit() {
    if (this.tableNumberInput != '') {
      localStorage.setItem('tableNumber', this.tableNumberInput);
      console.log('TABLENUMBER ' + localStorage.getItem('tableNumber'));
      this.modalCtrl.dismiss();

      this.tableService.setTableData(this.tableNumberInput);
    }
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
