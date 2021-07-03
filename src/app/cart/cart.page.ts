import { Component, OnDestroy, OnInit } from '@angular/core';
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
  private itemSub: Subscription;

  cartList: Item[] = [];
  orderedCartList: Item[] = [];

  isLoading = false;
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private modalCtrl: ModalController,
    private afStorage: AngularFireStorage,
    private cartService: CartService
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.fetchItemsFromCartCollection();
  }

  ngOnDestroy() {
    this.itemSub.unsubscribe();
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public openItemDetailModal(item: Item) {
    item.itemId;

    for (const loadedItem of this.cartList) {
      if (loadedItem.itemId === item.itemId) {
        console.log('SUUCCESS');
      }
    }

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

  public openOrderModal() {
    console.log(this.cartList);
    this.cartService.orderList = this.cartList;
    this.cartService.orderedList = this.orderedCartList;

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
    this.itemSub = this.cartService.getCart().subscribe((items) => {
      this.cartList = [];
      this.cartService.cartIdList = [];

      for (let item of items) {
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
          itemId: item.itemId ? item.itemId : '',
        };

        if (!fetchedItem.isOrdered) {
          this.cartList.push(fetchedItem);
          this.cartService.addIdToIdList(fetchedItem.itemId);
        } else {
          this.orderedCartList.push(fetchedItem);
        }
      }

      this.isLoading = false;
    });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
