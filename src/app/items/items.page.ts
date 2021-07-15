import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemService } from './item.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartService } from '../cart/cart.service';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  loadedItemList: Item[];
  cartItemList: Item[];

  id: string;
  hasFood: string;
  isLoading = false;

  private itemSub: Subscription;
  private cartSub: Subscription;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private itemService: ItemService,
    private cartService: CartService,
    private afStorage: AngularFireStorage
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.getUrlData();

    this.fetchItemsFromFirestore();
    this.fetchCartFromFirestore();
  }

  ngOnDestroy() {
    this.itemSub.unsubscribe();
    this.cartSub.unsubscribe();
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public onShowDetail(item: Item) {
    var itemInCart = false;
    for (let cartItem of this.cartItemList) {
      if (item.id == cartItem.id) {
        console.log('IN CART');
        item = cartItem;
        itemInCart = true;
      } else {
        console.log('clean');
      }
    }
    this.modalCtrl
      .create({
        component: ItemDetailComponent,
        componentProps: { item: item, itemInCart: itemInCart },
        cssClass: 'item-detail-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private getUrlData() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.id = paramMap.get('id');
      this.hasFood = paramMap.get('hasFood');
    });
  }

  private fetchItemsFromFirestore() {
    this.isLoading = true;
    this.itemSub = this.itemService
      .getItems(this.id, this.hasFood)
      .subscribe((items) => {
        this.loadedItemList = [];

        // * DEFINE NEW ITEM
        for (let currentItem of items) {
          const imagePath = this.afStorage
            .ref(currentItem.imagePath)
            .getDownloadURL();

          const fetchedItem: Item = {
            name: currentItem.name,
            description: currentItem.description,
            price: currentItem.price,

            imagePath: imagePath,
            imageRef: currentItem.imagePath,
            isVisible: currentItem.isVisible,
            isFood: currentItem.isFood,
            id: currentItem.id,
            parentId: currentItem.parentId,
          };

          if (fetchedItem.isVisible) {
            this.loadedItemList.push(fetchedItem);
          }
          this.isLoading = false;
        }
      });
  }

  private fetchCartFromFirestore() {
    this.cartSub = this.cartService.getCart().subscribe((cartItems) => {
      this.cartItemList = [];

      // * DEFINE NEW ITEM
      for (let cartItem of cartItems) {
        const imagePath = this.afStorage
          .ref(cartItem.imagePath)
          .getDownloadURL();

        const fetchedCartItem: Item = {
          name: cartItem.name,
          description: cartItem.description,
          price: cartItem.price,
          amount: cartItem.amount,

          imagePath: imagePath,
          imageRef: cartItem.imagePath,
          isVisible: cartItem.isVisible,
          isFood: cartItem.isFood,
          id: cartItem.id,
          parentId: cartItem.parentId,
        };

        this.cartItemList.push(fetchedCartItem);
      }
    });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
