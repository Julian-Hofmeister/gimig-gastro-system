import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/items/item.model';

@Component({
  selector: 'app-reorder-beverages-modal',
  templateUrl: './reorder-beverages-modal.component.html',
  styleUrls: ['./reorder-beverages-modal.component.scss'],
})
export class ReorderBeveragesModalComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  orderedBeverages: Item[];

  isLoading = false;

  orderedBeveragesSub: Subscription;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private cartService: CartService,
    private afStorage: AngularFireStorage,
    private modalCtrl: ModalController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.fetchOrderedBeveragesFromCart();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  addBeveragesToCart() {
    for (let item of this.orderedBeverages) {
      if (item.amount > 0) {
        this.cartService.addItemToCart(item);
      }
    }
  }

  // ----------------------------------------------------------------------------------------------

  onOpenAllBeverages() {
    this.modalCtrl.dismiss();

    this.addBeveragesToCart();
  }

  // ----------------------------------------------------------------------------------------------

  onItemChanged(event: Item) {
    console.log(event);
  }

  // ----------------------------------------------------------------------------------------------

  onClose() {
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private fetchOrderedBeveragesFromCart() {
    this.isLoading = true;

    this.orderedBeveragesSub = this.cartService
      .getOrderedCart()
      .subscribe((orders) => {
        this.orderedBeverages = [];

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

          if (!fetchedItem.isFood) {
            this.orderedBeverages.push(fetchedItem);
          }
        }

        this.isLoading = false;
      });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
