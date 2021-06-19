import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { Table } from './table.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  tableNumber = localStorage.getItem('tableNumber');

  ableToPay = new Observable<boolean>();
  status: string;
  isOrdered: boolean;
  isAccepted: boolean;
  table: Observable<Table>;
  tableDocument: AngularFirestoreDocument<Table>;

  userEmail = JSON.parse(localStorage.getItem('user')).email;
  path = this.afs.collection('restaurants').doc(this.userEmail);

  constructor(
    public afs: AngularFirestore,
    private cartService: CartService,
    private navCtrl: NavController
  ) {}

  getTableStatus() {
    this.tableDocument = this.path.collection('tables').doc(this.tableNumber);

    this.table = this.tableDocument.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as Table;
        data.id = a.payload.id;
        return data;
      })
    );
    return this.table;
  }

  sendServiceRequest() {
    this.tableDocument = this.path.collection('tables').doc(this.tableNumber);

    this.tableDocument.update({
      serviceRequest: true,
      serviceTimestamp: Date.now(),
    });
  }

  sendPayRequest(paysCache: boolean, paysTogether: boolean) {
    this.tableDocument = this.path.collection('tables').doc(this.tableNumber);

    this.tableDocument.update({
      payRequest: true,
      paysCache: paysCache,
      paysTogether: paysTogether,
      payRequestTimestamp: Date.now(),
    });
  }

  resetTable() {
    this.tableDocument = this.path.collection('tables').doc(this.tableNumber);

    this.tableDocument.update({
      resetRequest: false,
    });

    this.cartService.resetCart();
    this.navCtrl.navigateBack('/home');
  }
}
