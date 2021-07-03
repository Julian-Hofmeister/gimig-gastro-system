import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../items/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  // # LISTS
  orderList: Item[] = [];
  orderedList: Item[] = [];
  cartList: Observable<any[]>;
  cartIdList: string[] = [];

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
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(public afs: AngularFirestore) {}
  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public getCart() {
    this.cartList = this.cartCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;

          // console.log(data);
          return data;
        });
      })
    );

    return this.cartList;
  }

  public order() {
    this.addOrdersToFirestore();

    this.updateTableToOrdered();

    this.markItemsInCartAsOrdered();
  }

  public addItemToCart(item: Item) {
    this.addIdToIdList(item.id);
    this.cartCollection.add({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount,
      isFood: item.isFood,
      imagePath: item.imageRef,
      itemId: item.id,
      isOrdered: false,

      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      // - METADATA
      parentId: item.parentId,
      description: item.description,
      isVisible: item.isVisible,
    });
  }

  public updateItemInCart(item: Item) {
    this.cartCollection.doc(item.id).update({
      amount: item.amount,
    });
  }

  public deleteItemInCart(item: Item) {
    this.cartCollection.doc(item.id).delete();
  }

  public resetCart() {
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

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private addOrdersToFirestore() {
    this.orderList.forEach((item) => {
      this.orderCollection.add({
        // - ITEM DETAILS
        name: item.name,
        price: item.price,
        amount: item.amount,
        isFood: item.isFood,
        imagePath: item.imageRef,
        id: item.id,
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
  }

  private updateTableToOrdered() {
    this.tableDocument.update({
      isOrdered: true,
      isAccepted: false,
      orderRequest: true,
      timestamp: Date.now(),
    });
  }

  private markItemsInCartAsOrdered() {
    this.orderList.forEach((item) => {
      this.cartCollection.doc(item.id).update({
        isOrdered: true,
      });
    });

    for (let item of this.orderList) {
      this.orderedList.push(item);
    }
    this.orderList = [];
  }

  public addIdToIdList(id: string) {
    console.log('ITEM ID: ' + id);
    this.cartIdList.push(id);
    console.log(this.cartIdList);
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
