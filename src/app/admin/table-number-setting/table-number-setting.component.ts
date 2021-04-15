import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-table-number-setting',
  templateUrl: './table-number-setting.component.html',
  styleUrls: ['./table-number-setting.component.scss'],
})
export class TableNumberSettingComponent implements OnInit {
  tableNumber: number = 1;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  setTablenumber() {
    localStorage.setItem('tableNumber', this.tableNumber.toString());
    this.modalCtrl.dismiss();
  }
}
