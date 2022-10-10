import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ItemDetailComponent } from '../items/item-detail/item-detail.component';
import { Item } from '../items/item.model';
import { CartService } from './cart.service';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderSuccesComponent } from './order-succes/order-succes.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  loadedCartList: Item[] = [];

  loadedOrderedCartList: Item[] = [];

  // ----------------------------------------------------------------------------------------------

  isLoading = false;

  tableNumber = localStorage.getItem('tableNumber');

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // ----------------------------------------------------------------------------------------------

  path = this.afs.collection('restaurants').doc(this.userEmail);

  foodCollection = this.path.collection('items-food');

  beverageCollection = this.path.collection('items-beverages');

  mainCategory1 = localStorage.getItem('mainCategory1');
  mainCategory2 = localStorage.getItem('mainCategory2');

  //#endregion

  //#region [ MEMBERS ] //////////////////////////////////////////////////////////////////////////

  private itemCartSub: Subscription;

  private itemOrderedCartSub: Subscription;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private afStorage: AngularFireStorage,
    private afs: AngularFirestore,
    private cartService: CartService,
    private navCtrl: NavController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    console.log('1.');
    console.log(this.loadedCartList);

    this.fetchItemsFromCartCollection();

    this.fetchItemsFromorderedCartCollection();

    console.log('2.');
    console.log(this.loadedCartList);
  }

  // ----------------------------------------------------------------------------------------------

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

  openItemDetailModal(item: Item) {
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

  // ----------------------------------------------------------------------------------------------

  onOrder() {
    console.log(this.loadedCartList);

    this.cartService.order(this.loadedCartList);

    this.loadedCartList = [];

    this.navCtrl.navigateBack('/home');

    this.modalCtrl
      .create({
        component: OrderSuccesComponent,
        cssClass: 'order-succes-modal-css',
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

          availableOptions: item.availableOptions ?? [],
          selectedOptions: item.selectedOptions ?? [],

          availableOptions2: item.availableOptions2 ?? [],
          selectedOptions2: item.selectedOptions2 ?? [],

          amount: item.amount ? item.amount : 1,
          isOrdered: item.isOrdered ? item.isOrdered : false,
          itemRefId: item.itemRefId ? item.itemRefId : '',
        };
        this.loadedCartList.push(fetchedItem);
      }

      this.isLoading = false;
    });
  }

  // ----------------------------------------------------------------------------------------------

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

            availableOptions: item.availableOptions ?? [],
            selectedOptions: item.selectedOptions ?? [],
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
