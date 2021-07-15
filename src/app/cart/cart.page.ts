import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ItemDetailComponent } from '../items/item-detail/item-detail.component';
import { Item } from '../items/item.model';
import { CartService } from './cart.service';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  // # SUBSCRIPTIONS
  private itemCartSub: Subscription;
  private itemOrderedCartSub: Subscription;

  // # LISTS
  loadedCartList: Item[] = [];
  loadedOrderedCartList: Item[] = [];

  isLoading = false;

  // # LOCALSTORAGE DATA
  tableNumber = localStorage.getItem('tableNumber');
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # FIRESTORE REFERNCES
  path = this.afs.collection('restaurants').doc(this.userEmail);
  foodCollection = this.path.collection('items-food');
  beverageCollection = this.path.collection('items-beverages');
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private modalCtrl: ModalController,
    private afStorage: AngularFireStorage,
    private afs: AngularFirestore,
    private cartService: CartService
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.fetchItemsFromCartCollection();
    this.fetchItemsFromorderedCartCollection();
  }

  ngOnDestroy() {
    this.itemCartSub.unsubscribe();
    this.itemOrderedCartSub.unsubscribe();
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public openItemDetailModal(item: Item) {
    this.modalCtrl
      .create({
        component: ItemDetailComponent,
        componentProps: {
          item: item,
          modalOpenedFromCart: true,
          itemInCart: true,
        },
        cssClass: 'item-detail-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  public openOrderConfirmModal() {
    this.modalCtrl
      .create({
        component: OrderConfirmComponent,
        cssClass: 'confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
  private fetchItemsFromCartCollection() {
    this.isLoading = true;
    this.itemCartSub = this.cartService.getCart().subscribe((cart) => {
      this.loadedCartList = [];

      for (let item of cart) {
        const imagePath = this.afStorage.ref(item.imagePath).getDownloadURL();

        const fetchedItem: Item = {
          name: item.name,
          description: item.description,
          price: item.price,
          imagePath: imagePath,
          imageRef: item.imagePath,

          isVisible: item.isVisible,
          isFood: item.isFood,
          id: item.id,
          parentId: item.parentId,
          amount: item.amount ? item.amount : 1,
          isOrdered: item.isOrdered ? item.isOrdered : false,
          itemRefId: item.itemRefId ? item.itemRefId : '',
        };
        this.loadedCartList.push(fetchedItem);
      }

      this.isLoading = false;
    });
  }

  private fetchItemsFromorderedCartCollection() {
    this.isLoading = true;
    this.itemOrderedCartSub = this.cartService
      .getOrderedCart()
      .subscribe((orders) => {
        this.loadedOrderedCartList = [];

        for (let item of orders) {
          const imagePath = this.afStorage.ref(item.imagePath).getDownloadURL();

          const fetchedItem: Item = {
            name: item.name,
            description: item.description,
            price: item.price,
            imagePath: imagePath,
            imageRef: item.imagePath,

            isVisible: item.isVisible,
            isFood: item.isFood,
            id: item.id,
            parentId: item.parentId,
            amount: item.amount ? item.amount : 1,
            isOrdered: item.isOrdered ? item.isOrdered : false,
            itemRefId: item.itemRefId ? item.itemRefId : '',
          };

          this.loadedOrderedCartList.push(fetchedItem);

          if (this.cartService.orderedList.indexOf(fetchedItem.id) == -1) {
            this.cartService.orderedList.push(fetchedItem.id);
          }
        }

        this.isLoading = false;
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
