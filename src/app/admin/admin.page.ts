import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LogoutSettingComponent } from './logout-setting/logout-setting.component';
import { TableNumberSettingComponent } from './table-number-setting/table-number-setting.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  // # CONSTRUCTOR
  constructor(private modalCtrl: ModalController, private router: Router) {}

  // # FUNCTIONS
  openTableNumberModal() {
    this.modalCtrl
      .create({
        component: TableNumberSettingComponent,
        cssClass: 'table-setting-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  openLogoutConfirmationModal() {
    this.modalCtrl
      .create({
        component: LogoutSettingComponent,
        cssClass: 'logout-confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  closeSettings() {
    this.router.navigate(['/', 'home']);
  }
}
