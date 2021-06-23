import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../items/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  orderList: Item[] = [];
  orderedItems: Item[] = [];

  tableNumber = localStorage.getItem('tableNumber');

  userEmail = JSON.parse(localStorage.getItem('user')).email;
  path = this.afs.collection('restaurants');

  constructor(public afs: AngularFirestore) {}

  order() {
    console.log(this.orderList);
    this.orderList.forEach((item) => {
      this.path.doc(this.userEmail).collection('orders').add({
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

        orderTimestamp: Date.now(),

        // METADATA
        parentId: item.parentId,
        description: item.description,
        isVisible: item.isVisible,
      });
    });
    this.path
      .doc(this.userEmail)
      .collection('tables')
      .doc(this.tableNumber.toString())
      .update({
        isOrdered: true,
        isAccepted: false,
        orderRequest: true,
        timestamp: Date.now(),
      });
    for (let item of this.orderList) {
      this.orderedItems.push(item);
    }
    this.orderList = [];
    console.log('this.orderedItems');
    console.log(this.orderedItems);
  }

  resetCart() {
    this.orderList = [];
    this.orderedItems = [];
  }
}
