import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../items/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  orderList: Item[] = [];

  tableNumber = localStorage.getItem('tableNumber');
  // userEmail = JSON.parse(localStorage.getItem('user')).email;
  // path = this.afs.collection('restaurants').doc(this.userEmail);
  path = this.afs.collection('restaurants').doc('julian@web.de');

  constructor(public afs: AngularFirestore) {}

  order() {
    console.log(this.orderList);
    this.orderList.forEach((item) => {
      this.path.collection('orders').add({
        // ITEM DETAILS
        name: item.name,
        price: item.price,
        amount: item.amount,
        isFood: item.isFood,
        imagePath: item.imageRef,

        // INFORMATION
        tableNumber: this.tableNumber,
        isOrdered: true,
        isAccepted: false,
        isServerd: false,
        isPaid: false,

        timestamp: Date.now(),

        // METADATA
        parentId: item.parentId,
        description: item.description,
        isVisible: item.isVisible,
      });
    });
    this.path.collection('tables').doc(this.tableNumber.toString()).update({
      isOrdered: true,
      isAccepted: false,
      timestamp: Date.now(),
    });
  }
}
