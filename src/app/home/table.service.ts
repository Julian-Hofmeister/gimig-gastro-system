import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { Table } from './table.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  // # OBSERVABLES
  table: Observable<Table>;

  // # LOCALSTORAGE VARIABLES
  tableNumber = localStorage.getItem('tableNumber')
    ? localStorage.getItem('tableNumber')
    : '1';
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # FIRESTORE REFERENCES
  path = this.afs.collection('restaurants');
  tableCollection = this.path.doc(this.userEmail).collection('tables');
  tablePath = this.userEmail
    ? this.path.doc(this.userEmail).collection('tables').doc(this.tableNumber)
    : null;

  // # CONSTRUCTOR
  constructor(
    public afs: AngularFirestore,
    private navCtrl: NavController,

    // # SERVICES
    private cartService: CartService
  ) {}

  // # GET FUNCTIONS
  getTableData() {
    if (this.userEmail) {
      this.table = this.tablePath.snapshotChanges().pipe(
        map((a) => {
          const data = a.payload.data() as Table;
          data.id = a.payload.id;
          return data;
        })
      );
      return this.table;
    } else {
      console.log('WARNING! NO TABLE STATUS!');
    }
  }

  getAllTables() {
    this.tableCollection.get;
  }

  onResetTable() {
    this.tablePath.update({
      resetRequest: false,
      ableToPay: false,
      orderRequest: false,
      serviceRequest: false,
      orderTime: null,
      paysTogether: null,
      paysCache: null,
      isServed: false,
      isPaid: false,
      isAccepted: false,
      serviceTimestamp: null,
      payRequestTimestamp: null,
    });

    this.cartService.resetCart();
    this.navCtrl.navigateBack('/home');
  }

  // # SET FUNCTIONS
  sendServiceRequest() {
    this.tablePath.update({
      serviceRequest: true,
      serviceTimestamp: Date.now(),
    });
  }

  sendPayRequest(paysCache: boolean, paysTogether: boolean) {
    this.tablePath.update({
      payRequest: true,
      paysCache: paysCache,
      paysTogether: paysTogether,
      payRequestTimestamp: Date.now(),
    });
  }

  setTableData(tableNumber: number) {
    this.tableCollection.doc(tableNumber.toString()).set({
      tableNumber: tableNumber,
      resetRequest: false,
      ableToPay: false,
      orderRequest: false,
      serviceRequest: false,
      orderTime: null,
      paysTogether: null,
      paysCache: null,
      isServed: false,
      isPaid: false,
      isAccepted: false,
      serviceTimestamp: null,
      payRequestTimestamp: null,
    });
  }
}
