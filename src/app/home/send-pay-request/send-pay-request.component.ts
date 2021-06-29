import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';

@Component({
  selector: 'app-send-pay-request',
  templateUrl: './send-pay-request.component.html',
  styleUrls: ['./send-pay-request.component.scss'],
})
export class SendPayRequestComponent {
  // # PROPERTIES
  paysTogether: string = null;
  paysCache: string = null;

  // # CONSTRUCTOR
  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  onChangePaysTogether(selection: string) {
    this.paysTogether = selection;
  }
  onChangePaysCache(selection: string) {
    this.paysCache = selection;
  }

  onCall() {
    const paysCache: boolean = this.paysCache == 'true' ? true : false;
    const paysTogether: boolean = this.paysTogether == 'true' ? true : false;
    this.tableService.sendPayRequest(paysCache, paysTogether);
    this.modalCtrl.dismiss();

    this.openFeedbackPage();
  }

  openFeedbackPage() {
    setTimeout(() => {
      this.router.navigate(['/', 'feedback']);
    }, 6000);
  }
}
