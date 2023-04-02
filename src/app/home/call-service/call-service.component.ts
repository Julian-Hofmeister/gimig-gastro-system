import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-call-service',
  templateUrl: './call-service.component.html',
  styleUrls: ['./call-service.component.scss'],
})
export class CallServiceComponent implements OnInit{
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  message1 = localStorage.getItem('serviceMessage1');

  message2 = localStorage.getItem('serviceMessage2');

  message3 = localStorage.getItem('serviceMessage3');

  message4 = localStorage.getItem('serviceMessage4');


  message = 'Service Rufen';

  ipAddress = localStorage.getItem('ipAddress');

  tableNumber = localStorage.getItem('tableNumber');

  lastCall = Number(localStorage.getItem('serviceCall'));

  timeout = 120000;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  //#endregion

  ngOnInit() {
    if (this.lastCall > Date.now() - this.timeout) {
      this.message = 'Eine Bedienung wurde bereits gerufen';
    }
  }

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onCallService(message: string) {
    this.tableService.sendServiceRequest(message);
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  onClose() {
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  onCallDegasoService() {

    this.modalCtrl.dismiss();
    if (this.lastCall > Date.now() - this.timeout) {
      return;
    }
    localStorage.setItem('serviceCall', String(Date.now()));


    const orderArray = [];
    const order = {
        name: 'Serviceruf',
        price: '0',
        tax: '0',
        kitchenRelevant: true,
        active: true,
        combinationProduct: false,
        infoText: '',
      course: '0',
      brangToTable: false,
      additionalInfo: 'test',

        customPrinterAddress: 'barPrinter',
        _id: 'service',
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
  //#endregion

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
}
