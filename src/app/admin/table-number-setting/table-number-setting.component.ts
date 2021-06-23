import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Table } from 'src/app/home/table.model';
import { TableService } from 'src/app/home/table.service';

@Component({
  selector: 'app-table-number-setting',
  templateUrl: './table-number-setting.component.html',
  styleUrls: ['./table-number-setting.component.scss'],
})
export class TableNumberSettingComponent implements OnInit {
  tableNumber: number = 1;

  table: Table;

  constructor(
    private modalCtrl: ModalController,
    private tableService: TableService
  ) {}

  ngOnInit() {}

  setTablenumber() {
    localStorage.setItem('tableNumber', this.tableNumber.toString());
    console.log('TABLENUMBER ' + localStorage.getItem('tableNumber'));
    this.modalCtrl.dismiss();

    this.tableService.setTable(this.tableNumber);
  }
}
