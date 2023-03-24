import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemService } from './item.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartService } from '../cart/cart.service';
import { Item } from './item.model';
import {EditService} from '../admin/edit.service';
import {ImageModalComponent} from '../admin/image-modal/image-modal.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  loadedItemList: Item[];
  items: Item[];
  cartItemList: Item[];

  ipAddress = localStorage.getItem('ipAddress');

  webSocket: WebSocket;

  // ----------------------------------------------------------------------------------------------

  id: string;
  categoryName: string;

  hasFood: string;

  backgroundTitle: string;

  isLoading = false;

  editMode: boolean;
  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

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
    private afStorage: AngularFireStorage,
    private editService: EditService,
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.getUrlData();

    // this.fetchItemsFromFirestore();

    this.items = this.itemService.getAllDegasoItems(this.categoryName);

    console.log(this.items);

    this.webSocketInit();

    this.fetchCartFromFirestore();


    this.editMode = this.editService.getEditModeStatus();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onShowDetail(item: Item) {
    console.log(item.stockAmount);
    if (this.editMode) { return; }

    let itemInCart = false;

    for (const cartItem of this.cartItemList) {
      if (item._id === cartItem._id) {
        item = cartItem;

        itemInCart = true;
      }
    }

    this.modalCtrl
      .create({
        component: ItemDetailComponent,
        componentProps: { item, itemInCart },
        cssClass: 'item-detail-css',
        mode: 'md'
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openEditModal(item: Item) {
    if (!this.editMode) {return; }

    const id = item._id;
    console.log(id);


    this.modalCtrl
      .create({
        component: ImageModalComponent,
        componentProps: { id, isItem: true },
      })
      .then((modalEl) => {
        modalEl.present();
      });


  }
  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private getUrlData() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.categoryName = paramMap.get('id');
      this.hasFood = paramMap.get('hasFood');
      this.backgroundTitle = paramMap.get('backgroundTitle');
    });
  }

  // ----------------------------------------------------------------------------------------------

  // private fetchItemsFromFirestore() {
  //   this.isLoading = true;
  //
  //   this.itemSub = this.itemService
  //     .getItems(this.id, this.hasFood)
  //     .subscribe((items) => {
  //       this.loadedItemList = [];
  //
  //       for (const currentItem of items) {
  //         const imagePath = this.afStorage
  //           .ref(currentItem.imagePath)
  //           .getDownloadURL();
  //
  //         const fetchedItem: Item = {
  //           ...currentItem,
  //           imageRef: currentItem.imagePath,
  //           imagePath,
  //           selectedOptions: currentItem.selectedOptions,
  //         };
  //
  //         if (fetchedItem.isVisible) {
  //           this.loadedItemList.push(fetchedItem);
  //         }
  //
  //         this.isLoading = false;
  //       }
  //     });
  // }

  // ----------------------------------------------------------------------------------------------

  private fetchCartFromFirestore() {
    this.cartSub = this.cartService.getCart().subscribe((cartItems) => {
      this.cartItemList = [];

      for (const cartItem of cartItems) {
        const imagePath = this.afStorage
          .ref(cartItem.imagePath)
          .getDownloadURL();

        const fetchedCartItem: Item = {
          ...cartItem,
          imageRef: cartItem.imagePath,
          imagePath,
        };

        this.cartItemList.push(fetchedCartItem);
      }
    });
  }

  // ----------------------------------------------------------------------------------------------



  private webSocketInit() {
    this.webSocket = new WebSocket('ws:' + this.ipAddress + ':3434');

    this.webSocket.onmessage = (message: { data: string; }) => {
      if (message.data === 'productUpdate') {
        // window.location.reload();
      }
    };
  }



  //#endregion
}
