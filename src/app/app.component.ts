import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableNumberSettingComponent } from './admin/table-number-setting/table-number-setting.component';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  tableNumber: string = null;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.autoSignIn();

    this.tableNumber = localStorage.getItem('tableNumber');
    if (this.tableNumber == null) {
      this.modalCtrl
        .create({
          component: TableNumberSettingComponent,
          cssClass: 'table-setting-css',
        })
        .then((modalEl) => {
          modalEl.present();
        });
    }
  }
}
