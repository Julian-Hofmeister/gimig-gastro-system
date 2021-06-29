import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Table } from 'src/app/home/table.model';
import { TableService } from 'src/app/home/table.service';

@Component({
  selector: 'app-table-number-setting',
  templateUrl: './table-number-setting.component.html',
  styleUrls: ['./table-number-setting.component.scss'],
})
export class TableNumberSettingComponent {
  // # OBJECTS
  table: Table;

  // # PROPERTIES
  tableNumber: number = 1;

  // # CONTRUCTOR
  constructor(
    private modalCtrl: ModalController,
    private tableService: TableService
  ) {}

  // # FUNCTIONS
  setTablenumber() {
    localStorage.setItem('tableNumber', this.tableNumber.toString());
    console.log('TABLENUMBER ' + localStorage.getItem('tableNumber'));
    this.modalCtrl.dismiss();

    this.tableService.setTableData(this.tableNumber);
  }
}
