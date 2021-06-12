import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';

@Component({
  selector: 'app-send-pay-request',
  templateUrl: './send-pay-request.component.html',
  styleUrls: ['./send-pay-request.component.scss'],
})
export class SendPayRequestComponent implements OnInit {
  paysTogether: string = null;
  paysCache: string = null;

  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

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
  }
}
