import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CallServiceComponent } from './call-service/call-service.component';
import { SendPayRequestComponent } from './send-pay-request/send-pay-request.component';
import { Table } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tableSub: Observable<Table>;
  table: Table;
  tableNumber = localStorage.getItem('tableNumber');

  ableToPay = false;
  serviceRequest = false;

  constructor(
    private router: Router,
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.tableSub = this.tableService.getTableStatus();
    console.log(this.tableSub);
    this.tableSub.subscribe((doc) => {
      this.table = doc;

      this.ableToPay = this.table.ableToPay;
      this.serviceRequest = this.table.serviceRequest;
    });
  }

  ionViewWillEnter() {
    this.tableNumber = localStorage.getItem('tableNumber');
  }

  openCategory(content: string) {
    console.log(content);
    this.router.navigate(['/', 'categories', content]);
  }

  openCart() {
    this.router.navigate(['/', 'cart']);
  }

  openAdmin() {
    this.router.navigate(['/', 'admin']);
  }

  sendServiceRequest() {
    if (!this.serviceRequest) {
      // this.tableService.callService();
      this.modalCtrl
        .create({
          component: CallServiceComponent,
          cssClass: 'confirm-css',
          componentProps: { message: 'Bedienung Rufen' },
        })
        .then((modalEl) => {
          modalEl.present();
        });
      console.log('CALLED SERVICE');
    } else {
      this.modalCtrl
        .create({
          component: CallServiceComponent,
          cssClass: 'confirm-css',
          componentProps: { message: 'Bedienung wurde bereits gerufen' },
        })
        .then((modalEl) => {
          modalEl.present();
        });
      console.log('ALREADY DONE');
    }
  }

  sendPayRequest() {
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
