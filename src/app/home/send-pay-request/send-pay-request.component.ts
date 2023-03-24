import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-send-pay-request',
  templateUrl: './send-pay-request.component.html',
  styleUrls: ['./send-pay-request.component.scss'],
})
export class SendPayRequestComponent {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  paysTogether: string = null;

  paysCache: string = null;

  lastCall = Number(localStorage.getItem('payCall'));

  timeout = 120000;

  ipAddress = localStorage.getItem('ipAddress');

  tableNumber = localStorage.getItem('tableNumber');

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onChangePaysTogether(selection: string) {
    this.paysTogether = selection;
  }

  // ----------------------------------------------------------------------------------------------

  onChangePaysCache(selection: string) {
    this.paysCache = selection;
  }

  // ----------------------------------------------------------------------------------------------

  onCall() {
    const paysCache: boolean = this.paysCache === 'true' ? true : false;
    const paysTogether: boolean = this.paysTogether === 'true' ? true : false;

    this.tableService.sendPayRequest(paysCache, paysTogether);

    this.onCallDegasoPay();

    this.modalCtrl.dismiss();

    this.openFeedbackPage();
  }

  onCallDegasoPay() {
    this.modalCtrl.dismiss();
    if (this.lastCall > Date.now() - this.timeout) {
      return;
    }

    localStorage.setItem('payCall', String(Date.now()));

    const additionalInfo = (this.paysTogether ? 'Zahlt zusammen &' : 'Zahlt getrennt &') + (this.paysCache ? ' Zahlt Bar' : ' Zahlt mit Karte');
    console.log(additionalInfo);

    const orderArray = [];
    const order = {
      name: 'Bezahlanfrage',
      price: '0',
      tax: '0',
      kitchenRelevant: true,
      active: true,
      combinationProduct: false,
      infoText: '',
      additionalInfo,
      customPrinterAddress: 'barPrinter',
      _id: 'pay',
      course: '0',
      brangToTable: false,
      identifyForList: uuidv4(),
      uniqueOrderArticleId: uuidv4(),
      combinableWith: [],
    };

    orderArray.push(order);

    const data = {
      table: this.tableNumber,
      articles: orderArray,
      employee: ''
    };

    fetch('http://' + this.ipAddress + ':3434/newOrder/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      // tslint:disable-next-line:no-shadowed-variable
      .then(data => {
        console.log('Success:', data);
        this.removeCall(data._id);
      });

  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private openFeedbackPage() {
    setTimeout(() => {
      this.router.navigate(['/', 'feedback']);
    }, 6000);
  }


  // ----------------------------------------------------------------------------------------------

  private removeCall(orderId) {
    const data = {
      _id: orderId,
      payed: true,
    };

    fetch('http://' + this.ipAddress + ':3434/deleteOrder/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => console.log(response.status))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  //#endregion
}
