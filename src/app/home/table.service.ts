import { Injectable } from '@angular/core';
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
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

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
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    public afs: AngularFirestore,
    private navCtrl: NavController,
    private cartService: CartService
  ) {}
  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  public getTableData() {
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

  public onResetTable() {
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

  public sendServiceRequest() {
    this.tablePath.update({
      serviceRequest: true,
      serviceTimestamp: Date.now(),
    });
  }

  public sendPayRequest(paysCache: boolean, paysTogether: boolean) {
    this.tablePath.update({
      payRequest: true,
      paysCache: paysCache,
      paysTogether: paysTogether,
      payRequestTimestamp: Date.now(),
    });
  }

  public setTableData(tableNumber: string) {
    this.tableCollection.doc(tableNumber).set({
      tableNumber: Number(tableNumber),
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
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
