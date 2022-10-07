import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { Table } from './table.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  table: Observable<Table>;

  tableNumber = localStorage.getItem('tableNumber')
    ? localStorage.getItem('tableNumber')
    : '1';

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // ----------------------------------------------------------------------------------------------

  path = this.afs.collection('restaurants');

  tableCollection = this.path.doc(this.userEmail).collection('tables');

  tablePath = this.path
    .doc(this.userEmail)
    .collection('tables')
    .doc(this.tableNumber);

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public afs: AngularFirestore,
    private navCtrl: NavController,
    private cartService: CartService,
    private modalCtlr: ModalController
  ) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getTableData(): Observable<Table> {
    this.table = this.tablePath.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as Table;
        data.id = a.payload.id;

        return data;
      })
    );

    return this.table;
  }

  // ----------------------------------------------------------------------------------------------

  onResetTable() {
    console.log(this.tablePath);

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
      isReserved: false,
    });

    this.cartService.resetCart();

    setTimeout(() => {
      window.location.reload();
    }, 5000);

    this.navCtrl.navigateBack('/home');
  }

  // ----------------------------------------------------------------------------------------------

  sendServiceRequest(message: string) {
    this.tablePath.update({
      serviceRequest: true,
      serviceTimestamp: Date.now(),
      serviceMessage: message,
    });
  }

  // ----------------------------------------------------------------------------------------------

  sendPayRequest(paysCache: boolean, paysTogether: boolean) {
    this.tablePath.update({
      payRequest: true,
      paysCache: paysCache,
      paysTogether: paysTogether,
      payRequestTimestamp: Date.now(),
    });
  }

  // ----------------------------------------------------------------------------------------------

  setTableData(tableNumber: string) {
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

    this.onResetTable();
  }

  // ----------------------------------------------------------------------------------------------

  updateTableMessage() {
    this.tablePath.update({
      message: '',
    });
  }

  // ----------------------------------------------------------------------------------------------

  dismissReservation() {
    this.tablePath.update({
      isReserved: false,
    });
  }

  // ----------------------------------------------------------------------------------------------
  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
