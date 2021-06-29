import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../items/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // # LISTS
  orderList: Item[] = [];
  orderedList: Item[] = [];
  cartList: Observable<any[]>;

  // # LOCALSTORAGE DATA
  tableNumber = localStorage.getItem('tableNumber');
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # FIRESTORE REFERENCES
  path = this.afs.collection('restaurants');
  orderCollection = this.path.doc(this.userEmail).collection('orders');
  tableDocument = this.path
    .doc(this.userEmail)
    .collection('tables')
    .doc(this.tableNumber.toString());
  cartCollection = this.path
    .doc(this.userEmail)
    .collection('tables')
    .doc(this.tableNumber)
    .collection('cart');

  // # CONSTRUCTOR
  constructor(public afs: AngularFirestore) {}

  // # FUNCTIONS

  // # GET FUNCTIONS
  getCart() {
    this.cartList = this.cartCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;

          console.log(data.amount);
          return data;
        });
      })
    );
    return this.cartList;
  }

  // # SET FUNCTIONS
  order() {
    // DEBUG
    console.log(this.orderList);

    // * CREAE ITEMS IN FIRESTORE
    this.orderList.forEach((item) => {
      this.orderCollection.add({
        // - ITEM DETAILS
        name: item.name,
        price: item.price,
        amount: item.amount,
        isFood: item.isFood,
        imagePath: item.imageRef,
        // - FURTHER INFORMATION
        tableNumber: this.tableNumber,
        isOrdered: true,
        isAccepted: false,
        isServerd: false,
        isPaid: false,
        orderTimestamp: Date.now(),
        // - METADATA
        parentId: item.parentId,
        description: item.description,
        isVisible: item.isVisible,
      });
    });

    // * UPDATE CART
    this.orderList.forEach((item) => {
      this.cartCollection.doc(item.id).update({
        isOrdered: true,
      });
    });

    // * UPDATE TABLE
    this.tableDocument.update({
      isOrdered: true,
      isAccepted: false,
      orderRequest: true,
      timestamp: Date.now(),
    });

    // * MARK ITEMS AS ORDERED
    for (let item of this.orderList) {
      this.orderedList.push(item);
    }
    this.orderList = [];
  }

  addItemToCart(item: Item) {
    this.cartCollection.add({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount,
      isFood: item.isFood,
      imagePath: item.imageRef,
      isOrdered: false,
      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      // - METADATA
      parentId: item.parentId,
      description: item.description,
      isVisible: item.isVisible,
    });
  }

  updateItemInCart(item: Item) {
    this.cartCollection.doc(item.id).update({
      amount: item.amount,
    });
  }

  deleteItemInCart(item: Item) {
    this.cartCollection.doc(item.id).delete();
  }

  resetCart() {
    // * CLEAR ORDER LIST
    this.orderList.forEach((item) => {
      console.log(item.id);
      this.cartCollection.doc(item.id).delete();
    });
    // * CLEAR OREDERED LIST
    this.orderedList.forEach((item) => {
      console.log(item.id);
      this.cartCollection.doc(item.id).delete();
    });
  }
}
