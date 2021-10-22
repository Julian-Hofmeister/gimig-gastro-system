import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/items/item.model';
import { ItemService } from 'src/app/items/item.service';

@Component({
  selector: 'app-offer-dessert-modal',
  templateUrl: './offer-dessert-modal.component.html',
  styleUrls: ['./offer-dessert-modal.component.scss'],
})
export class OfferDessertModalComponent implements OnInit, OnDestroy {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  isLoading = false;

  loadedItems: Item[];

  dessertId = 'GC9gmeU4dvQJUy4Wwy8A';

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  private itemSub: Subscription;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private itemService: ItemService,
    private afStorage: AngularFireStorage,
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.fetchDessertItems();
  }

  // ----------------------------------------------------------------------------------------------

  ngOnDestroy() {
    this.itemSub.unsubscribe();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onClose() {
    this.modalCtrl.dismiss();
  }

  // ----------------------------------------------------------------------------------------------

  swipeNext() {
    console.log('pressed');

    this.slides.slideNext();
  }

  // ----------------------------------------------------------------------------------------------

  onItemChanged(event: Item) {
    console.log(event.amount);
  }

  // ----------------------------------------------------------------------------------------------

  onAddToCart() {
    for (let item of this.loadedItems) {
      if (item.amount > 0) {
        console.log(item);
        this.cartService.addItemToCart(item);

        this.modalCtrl.dismiss();
      }
    }
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private fetchDessertItems() {
    this.isLoading = true;

    this.itemSub = this.itemService
      .getItems(this.dessertId, 'true')
      .subscribe((items) => {
        this.loadedItems = [];

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
            this.loadedItems.push(fetchedItem);
          }

          this.isLoading = false;
        }
      });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
