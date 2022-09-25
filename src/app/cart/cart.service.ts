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

  orderList: Item[] = [];

  orderedList: string[] = [];

  // ----------------------------------------------------------------------------------------------

  cartList: Observable<any[]>;

  orderedCartList: Observable<any[]>;

  // ----------------------------------------------------------------------------------------------

  tableNumber = localStorage.getItem('tableNumber')
    ? localStorage.getItem('tableNumber')
    : '1';

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : 'null';

  // ----------------------------------------------------------------------------------------------

  path = this.afs.collection('restaurants').doc(this.userEmail);

  tableDocument = this.path
    .collection('tables')
    .doc(this.tableNumber.toString());

  orderCollection = this.path.collection('orders');

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

  getCart() {
    this.cartList = this.cartCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((item) => {
          const data = item.payload.doc.data() as Item;
          data.id = item.payload.doc.id;
          return data;
        });
      })
    );

    return this.cartList;
  }

  // ----------------------------------------------------------------------------------------------

  getOrderedCart() {
    this.orderedCartList = this.orderedCartCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((item) => {
          const data = item.payload.doc.data() as Item;
          data.id = item.payload.doc.id;
          return data;
        });
      })
    );

    return this.orderedCartList;
  }

  // ----------------------------------------------------------------------------------------------

  order(loadedCartList: Item[]) {
    loadedCartList.forEach((item) => {
      item.orderTimestamp = Date.now();

      this.addOrdersToFirestore(item);

      this.moveItemsInCartToOrderedCart(item);
    });

    this.updateTableToOrdered();
  }

  // ----------------------------------------------------------------------------------------------

  addItemToCart(item: Item) {
    this.orderList.push(item);

    console.log(item.selectedOptions);

    this.cartCollection.doc(item.id).set({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount ? item.amount : 1,
      isFood: item.isFood,
      imagePath: item.imageRef,
      itemRefId: item.id,
      isOrdered: false,
      availableOptions: item.availableOptions ?? [],
      selectedOptions: item.selectedOptions ?? [],
      availableOptions2: item.availableOptions2 ?? [],
      selectedOptions2: item.selectedOptions2 ?? [],

      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      selectedTimestamp: Date.now(),
      // - METADATA
      parentId: item.parentId,
      description: item.description,
      isVisible: item.isVisible,
    });
  }

  // ----------------------------------------------------------------------------------------------

  deleteItemInCart(item: Item) {
    this.cartCollection.doc(item.id).delete();
  }

  // ----------------------------------------------------------------------------------------------

  resetCart() {
    console.log('OrderList');
    console.log(this.orderList);

    console.log('OrderedList');
    console.log(this.orderedList);

    this.orderList.forEach((item) => {
      this.cartCollection.doc(item.id).delete();
    });

    this.orderedList.forEach((order) => {
      this.orderedCartCollection.doc(order).delete();
    });
  }

  // ----------------------------------------------------------------------------------------------

  getItemById(itemRef: any) {
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

  private addOrdersToFirestore(item: Item) {
    this.orderCollection.doc(item.orderTimestamp.toString()).set({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount,
      isFood: item.isFood,
      imagePath: item.imageRef,
      id: item.id,
      availableOptions: item.availableOptions ?? [],
      selectedOptions: item.selectedOptions ?? [],

      availableOptions2: item.availableOptions2 ?? [],
      selectedOptions2: item.selectedOptions2 ?? [],
      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      isOrdered: true,
      isAccepted: false,
      isServerd: false,
      isPaid: false,
      orderTimestamp: item.orderTimestamp,
      // - METADATA
      parentId: item.parentId,
      description: item.description,
      isVisible: item.isVisible,
    });
  }

  // ----------------------------------------------------------------------------------------------

  private updateTableToOrdered() {
    this.tableDocument.update({
      isOrdered: true,
      isAccepted: false,
      orderRequest: true,
      timestamp: Date.now(),
    });
  }

  // ----------------------------------------------------------------------------------------------

  private moveItemsInCartToOrderedCart(item: Item) {
    console.log(this.orderList);

    this.cartCollection.doc(item.id).delete();

    this.orderedList.push(item.orderTimestamp.toString());

    this.orderedCartCollection.doc(item.orderTimestamp.toString()).set({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount,
      isFood: item.isFood,
      imagePath: item.imageRef,
      id: item.orderTimestamp,
      availableOptions: item.availableOptions ?? [],
      selectedOptions: item.selectedOptions ?? [],

      availableOptions2: item.availableOptions2 ?? [],
      selectedOptions2: item.selectedOptions2 ?? [],
      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      isOrdered: true,
      isAccepted: false,
      isServerd: false,
      isPaid: false,
      orderTimestamp: item.orderTimestamp,
      // - METADATA
      parentId: item.parentId,
      description: item.description,
      isVisible: item.isVisible,
      // - STATUS
      isFinished: false,
    });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
