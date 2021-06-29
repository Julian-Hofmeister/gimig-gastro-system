import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TableNumberSettingComponent } from './admin/table-number-setting/table-number-setting.component';
import { AuthService } from './authentication/auth.service';
import { ConnectionService } from './connection.service';
import { ConnectionModalComponent } from './elements/connection-modal/connection-modal.component';
import { Table } from './home/table.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  // # OBJECTS
  table: Table;

  // # OBSERVABLES
  tableSub: Observable<Table>;

  // # LOCALSTORAGE VARIABLES
  tableNumber = localStorage.getItem('tableNumber');

  // # CONSTRUCTOR
  constructor(
    private modalCtrl: ModalController,
    // # SERVICES
    private authService: AuthService,
    private connectionService: ConnectionService
  ) {
    // # FUNCTIONS
    this.connectionService.checkConnection();
  }

  // # ON INIT
  ngOnInit() {
    if (this.tableNumber == null) {
      this.openTableNumberModal();
    }

    this.authService.autoSignIn();
  }

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
}
