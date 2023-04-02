import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../items/item.model';
import {Order} from '../home/order.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  orderList: Item[] = [];

  orderedList: string[] = [];

  cartList: Observable<any[]>;

  orderedCartList: Observable<any[]>;

  ipAddress = localStorage.getItem('ipAddress');

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

  activeOrders: any[];

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
          data._id = item.payload.doc.id;

          data.stockAmount = item.payload.doc.data().stockAmount;
          data.stockChecking = item.payload.doc.data().stockChecking;

          data.combinedWith =  item.payload.doc.data().combinedWith;
          console.log('GET CART');
          console.log(data);
          // DEGASO
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
          data._id = item.payload.doc.id;
          return data;
        });
      })
    );

    return this.orderedCartList;
  }

  // ----------------------------------------------------------------------------------------------

  order(loadedCartList: Item[]) {
    this.addToDegaso(loadedCartList);

    loadedCartList.forEach((item) => {
      item.orderTimestamp = Date.now();
      // this.addOrderToFirestore(item);
      this.moveItemInCartToOrderedCart(item);
    });

    this.updateTableToOrdered();


  }

  // ----------------------------------------------------------------------------------------------

  addItemToCart(item: Item) {
    this.orderList.push(item);

    console.log(item);
    this.cartCollection.doc(item._id).set({
      // - ITEM DETAILS
      id: item._id,
      name: item.name,
      price: item.price,
      tax: item.tax,
      amount: item.amount ? item.amount : 1,
      kitchenRelevant: item.kitchenRelevant,
      customPrinterAddress: item.customPrinterAddress,
      imagePath: item.imageRef,
      isOrdered: false,
      availableOptions: item.availableOptions ?? [],
      selectedOptions: item.selectedOptions ?? [],
      availableOptions2: item.availableOptions2 ?? [],
      selectedOptions2: item.selectedOptions2 ?? [],

      // - FURTHER INFORMATION
      tableNumber: this.tableNumber,
      selectedTimestamp: Date.now(),
      // - METADATA
      description: item.description ?? '',
      isVisible: item.isVisible ?? true,

      stockChecking: item.stockChecking,
      stockAmount: item.stockAmount,

      combinableWith: item.combinableWith,
      combinedWith: item.combinedWith,
      // active: item.active,
    });
  }

  // ----------------------------------------------------------------------------------------------

  deleteItemInCart(item: Item) {
    this.cartCollection.doc(item._id).delete();
  }

  // ----------------------------------------------------------------------------------------------

  resetCart() {

    console.log(this.orderList);
    console.log(this.orderedList);
    this.orderList.forEach((item) => {
      if (typeof item._id !== 'string') {
        this.cartCollection.doc(item._id).delete();
      }
    });


    this.orderedList.forEach((order: any) => {
      if (typeof order._id !== 'string') {
      this.orderedCartCollection.doc(order._id).delete();
      }

    });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // private addOrderToFirestore(item: Item) {
  //   this.orderCollection.doc(item.orderTimestamp.toString()).set({
  //     // - ITEM DETAILS
  //     name: item.name,
  //     price: item.price,
  //     amount: item.amount,
  //     isFood: item.isFood,
  //     imagePath: item.imageRef,
  //     id: item.id,
  //     availableOptions: item.availableOptions ?? [],
  //     selectedOptions: item.selectedOptions ?? [],
  //
  //     availableOptions2: item.availableOptions2 ?? [],
  //     selectedOptions2: item.selectedOptions2 ?? [],
  //     // - FURTHER INFORMATION
  //     tableNumber: this.tableNumber,
  //     isOrdered: true,
  //     isAccepted: false,
  //     isServerd: false,
  //     isPaid: false,
  //     orderTimestamp: item.orderTimestamp,
  //     // - METADATA
  //     parentId: item.parentId,
  //     description: item.description,
  //     isVisible: item.isVisible,
  //   });
  // }

  // ----------------------------------------------------------------------------------------------

  private updateTableToOrdered() {
    this.tableDocument.update({
      isOrdered: true,
      isAccepted: false,
      orderRequest: true,
      timestamp: Date.now(),
      ableToPay: true,
    });
  }

  // ----------------------------------------------------------------------------------------------

  private moveItemInCartToOrderedCart(item: Item) {
    console.log(this.orderList);

    this.cartCollection.doc(item._id).delete();

    this.orderedList.push(item.orderTimestamp.toString());

    this.orderedCartCollection.doc(item.orderTimestamp.toString()).set({
      // - ITEM DETAILS
      name: item.name,
      price: item.price,
      amount: item.amount,
      kitchenRelevant: item.kitchenRelevant,
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
      description: item.description,
      isVisible: item.isVisible,
      // - STATUS
      isFinished: false,
    });
  }

  // ----------------------------------------------------------------------------------------------

  private addToDegaso(items: Item[]) {
    const orderArray: Order[] = [];

    if (!items) { return; }

    for (const item of items) {

      for (let i = 0; i < item.amount; i++) {
        let price = Number(item.price);
        let optionText = '';

        if (item.stockChecking) {
          this.degasoUpdateStockAmount(item);
        }

        if (item.combinedWith) {
          for (const option of item.combinedWith) {
            // @ts-ignore
            price += Number(option.price);
            // @ts-ignore
            optionText = optionText + 'mit ' + option.name + '; ';
          }
        }


        const order: Order = {
          name: item.name,
          price: price.toString(),
          tax: item.tax,
          kitchenRelevant: item.kitchenRelevant,
          active: true,
          combinationProduct: false,
          infoText: item.description,
          additionalInfo: optionText,
          stockChecking: item.stockChecking,
          customPrinterAddress: item.customPrinterAddress,
          _id: item._id,
          identifyForList: uuidv4(),
          uniqueOrderArticleId: uuidv4(),
          course: 0,
          brangToTable: false,
          combinedWith: item.combinedWith,
          combinableWith: [],
          employee: ''
        };

        console.log(order.customPrinterAddress);
        orderArray.push(order);


      }
    }

    this.degasoGetActiveOrders().then( (data) => {
      if (!data) {
        this.degasoNewOrder(orderArray);
      } else {
        for (const order of data) {
          if (order.table === this.tableNumber.toString()) {
            this.degasoAddToOrder(orderArray, order._id);
            return;
          }
        }
        this.degasoNewOrder(orderArray);
      }
    });
  }

  private degasoUpdateStockAmount(product: Item) {
    fetch('http://' + this.ipAddress + ':3434/updatestockAmount/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stockAmount: product.stockAmount - product.amount, _id: product._id }),
    })
      .then(response => { })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  private degasoAddToOrder(orderArray: any, orderId) {
    const data = {
      orderId,
      articles: orderArray,
      employee: '',
      dontPrint: false
    };

    fetch('http://' + this.ipAddress + ':3434/addToOrder/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => console.log('add done'))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  private degasoNewOrder(orderArray: any[]) {
    const data = {
      table: this.tableNumber,
      articles: orderArray,
      employee: ''
    };


    fetch('http://' + this.ipAddress + ':3434/newOrder/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      // tslint:disable-next-line:no-shadowed-variable
      .then(data => {
        console.log('Success:', data);

      });
  }



  private async degasoGetActiveOrders() {
    return fetch('http://' + this.ipAddress + ':3434/getAllActiveOrders/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data != null) {
          this.activeOrders = data;

          console.log(this.activeOrders);

          return data;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  //#endregion
}
