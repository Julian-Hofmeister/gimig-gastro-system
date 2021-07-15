import { Injectable } from '@angular/core';
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
  orderedList: string[] = [];
  cartList: Observable<any[]>;
  orderedCartList: Observable<any[]>;

  // # LOCALSTORAGE DATA
  tableNumber = localStorage.getItem('tableNumber');
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # FIRESTORE REFERENCES
  path = this.afs.collection('restaurants').doc(this.userEmail);
  orderCollection = this.path.collection('orders');
  tableDocument = this.path
    .collection('tables')
    .doc(this.tableNumber.toString());
  cartCollection = this.path
    .collection('tables')
    .doc(this.tableNumber)
    .collection('cart', (ref) => ref.orderBy('selectedTimestamp', 'desc'));
  orderedCartCollection = this.path
    .collection('tables')
    .doc(this.tableNumber)
    .collection('orderedCart', (ref) => ref.orderBy('orderTimestamp', 'desc'));
  foodCollection = this.path.collection('items-food');
  beverageCollection = this.path.collection('items-beverages');
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(public afs: AngularFirestore) {}
  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public getCart() {
    this.cartList = this.cartCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

    return this.cartList;
  }

  public getOrderedCart() {
    this.orderedCartList = this.orderedCartCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

    return this.orderedCartList;
  }

  public order() {
    this.addOrdersToFirestore();

    this.updateTableToOrdered();

    this.moveItemsInCartToOrderedCart();
  }

  public addItemToCart(item: Item) {
    this.orderList.push(item);

    this.cartCollection.doc(item.id).set({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount ? item.amount : 1,
      isFood: item.isFood,
      imagePath: item.imageRef,
      itemRefId: item.id,
      isOrdered: false,

      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      selectedTimestamp: Date.now(),

      // - METADATA
      parentId: item.parentId,
      description: item.description,
      isVisible: item.isVisible,
    });
  }

  public deleteItemInCart(item: Item) {
    this.cartCollection.doc(item.id).delete();
  }

  public resetCart() {
    console.log('reset');

    console.log('OrderList');
    console.log(this.orderList);

    console.log('OrderedList');
    console.log(this.orderedList);

    // * CLEAR ORDER LIST
    this.orderList.forEach((item) => {
      this.cartCollection.doc(item.id).delete();
    });
    // * CLEAR OREDERED LIST
    this.orderedList.forEach((order) => {
      this.orderedCartCollection.doc(order).delete();
    });
  }

  public getItemById(itemRef) {
    const pathRef = itemRef.isFood
      ? this.foodCollection
      : this.beverageCollection;

    const item = pathRef
      .doc(itemRef.itemId)
      .ref.get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          return doc.data() as Item;
        }
      });
    return item;
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

  private moveItemsInCartToOrderedCart() {
    const orderTimestamp = Date.now();

    console.log(this.orderList);

    this.orderList.forEach((item) => {
      this.cartCollection.doc(item.id).delete();

      this.orderedList.push(orderTimestamp.toString());
      console.log('move');

      this.orderedCartCollection.doc(orderTimestamp.toString()).set({
        // - ITEM DETAILS
        name: item.name,
        price: item.price,
        amount: item.amount,
        isFood: item.isFood,
        imagePath: item.imageRef,
        id: orderTimestamp,
        // - FURTHER INFORMATION
        tableNumber: this.tableNumber,
        isOrdered: true,
        isAccepted: false,
        isServerd: false,
        isPaid: false,
        orderTimestamp: orderTimestamp,
        // - METADATA
        parentId: item.parentId,
        description: item.description,
        isVisible: item.isVisible,
      });
    });

    this.orderList = [];
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
