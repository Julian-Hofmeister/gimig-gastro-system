import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { CallServiceComponent } from './call-service/call-service.component';
import { SendPayRequestComponent } from './send-pay-request/send-pay-request.component';
import { Table } from './table.model';
import { TableService } from './table.service';
import { User } from './user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // # OBJECTS
  table: Table;
  user: User;

  // # OBSERVABLES
  tableSub: Observable<Table>;

  // # LOCALSTORAGE VARIABLES
  tableNumber = localStorage.getItem('tableNumber');
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # PROPERTIES
  ableToPay = false;
  serviceRequest = false;
  resetRequest = false;

  // # CONSTRUCTOR
  constructor(
    private router: Router,
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  // # On INIT
  ngOnInit() {
    if (this.userEmail) {
      this.tableSub = this.tableService.getTableData();

      this.tableSub.subscribe((doc) => {
        this.table = doc;
        this.ableToPay = this.table.ableToPay;
        this.serviceRequest = this.table.serviceRequest;
        this.resetRequest = this.table.resetRequest;

        if (this.resetRequest) {
          console.log('RESETTING..');
          this.tableService.onResetTable();
        }
      });
    }
  }

  // # FUNCTIONS
  openCategory(content: string) {
    this.router.navigate(['/', 'categories', content]);
  }

  openCart() {
    this.router.navigate(['/', 'cart']);
  }

  openAdmin() {
    // this.router.navigate(['/', 'admin']);
    this.modalCtrl
      .create({
        component: AdminLoginComponent,
        cssClass: 'admin-login-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  openFeedback() {
    this.router.navigate(['/', 'feedback']);
  }

  openServiceRequestModal() {
    this.modalCtrl
      .create({
        component: CallServiceComponent,
        cssClass: 'confirm-css',
        componentProps: {
          message: !this.serviceRequest
            ? 'Bedienung Rufen'
            : 'Bedienung wurde bereits gerufen',
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  openPayRequestModal() {
    this.modalCtrl
      .create({
        component: SendPayRequestComponent,
        cssClass: 'send-pay-request-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
