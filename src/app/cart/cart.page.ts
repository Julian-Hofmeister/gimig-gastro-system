import { Component, OnInit } from '@angular/core';
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
export class CartPage implements OnInit {
  // # SUBSCRIPTIONS
  private streamSub: Subscription;

  // # LISTS
  cartList: Item[] = [];
  orderedCartList: Item[] = [];

  // # PROPERTIES
  isLoading = false;

  // # CONSTRUCTOR
  constructor(
    private modalCtrl: ModalController,
    private afStorage: AngularFireStorage,
    // # SERVICES
    private cartService: CartService
  ) {}

  // # ON INIT
  ngOnInit() {
    // * ACTIVATE LOADING INDICAtOR
    this.isLoading = true;

    // * GET CART
    this.streamSub = this.cartService.getCart().subscribe((items) => {
      this.cartList = [];

      // * DEFINE ITEM
      for (let item of items) {
        const imagePath = this.afStorage.ref(item.imagePath).getDownloadURL();

        const fetchedItem = new Item(
          item.name,
          item.description,
          item.price,
          imagePath,
          item.imagePath,
          item.isVisible,
          item.isFood,
          item.id,
          item.parentId,
          item.amount,
          item.isOrdered
        );

        // * PUSH ITEM
        if (!fetchedItem.isOrdered) {
          this.cartList.push(fetchedItem);
          this.cartService.orderList.push(fetchedItem);
        } else {
          this.orderedCartList.push(fetchedItem);
          this.cartService.orderedList.push(fetchedItem);
        }
      }
      // * DEACTIVATE LOADING INDICAtOR
      this.isLoading = false;
    });
  }

  // # FUNCTIONS
  openDetailModal(item: any) {
    this.modalCtrl
      .create({
        component: ItemDetailComponent,
        componentProps: { item: item, isCart: true },
        cssClass: 'item-detail-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  openOrderModal() {
    this.modalCtrl
      .create({
        component: OrderConfirmComponent,
        cssClass: 'confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
