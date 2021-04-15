import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LogoutSettingComponent } from './logout-setting/logout-setting.component';
import { TableNumberSettingComponent } from './table-number-setting/table-number-setting.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  opentableNumberSetting() {
    this.modalCtrl
      .create({
        component: TableNumberSettingComponent,
        cssClass: 'table-setting-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  openLogoutSetting() {
    this.modalCtrl
      .create({
        component: LogoutSettingComponent,
        cssClass: 'logout-confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
