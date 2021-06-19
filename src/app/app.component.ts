import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TableNumberSettingComponent } from './admin/table-number-setting/table-number-setting.component';
import { AuthService } from './authentication/auth.service';
import { ConnectionModalComponent } from './elements/connection-modal/connection-modal.component';
import { Table } from './home/table.model';
import { TableService } from './home/table.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  tableNumber: string = null;

  tableSub: Observable<Table>;
  table: Table;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private tableService: TableService
  ) {
    window.addEventListener('offline', () => {
      console.log('APPLICATION WENT OFFLINE');
      this.modalCtrl
        .create({
          component: ConnectionModalComponent,
          cssClass: 'item-confirm-css',
          backdropDismiss: false,
        })
        .then((modalEl) => {
          modalEl.present();
        });
    });
    window.addEventListener('online', () => {
      console.log('APPLICATION WENT ONLINE');
      this.modalCtrl.dismiss();
    });
  }

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

    this.tableSub = this.tableService.getTableStatus();
    this.tableSub.subscribe((doc) => {
      this.table = doc;

      if (doc.resetRequest) {
        console.log('is resetting');
        this.tableService.resetTable();
      }
    });
  }
}
