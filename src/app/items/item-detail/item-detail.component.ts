import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/cart/cart.service';
import { ItemConfirmComponent } from '../item-confirm/item-confirm.component';
import { Item } from '../item.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
    ]),
  ],
})
export class ItemDetailComponent implements OnInit {
  // # INPUT
  @Input() isCart: boolean = false;
  @Input() item: Item;

  // # PROPERTIES
  inOrder: boolean = false;

  // # CONSTRUCTOR
  constructor(
    private modalCtrl: ModalController,
    // # SERVICES
    private cartService: CartService
  ) {}

  // # ON INIT
  ngOnInit() {
    if (this.cartService.orderList.indexOf(this.item) != -1) {
      this.inOrder = true;
      console.log(this.inOrder);
    }
  }

  // # FUNCTIONS
  increaseAmountByOne() {
    if (this.item.amount < 25) {
      this.item.amount = this.item.amount + 1;
    }
  }
  decreaseAmountByOne() {
    if (this.item.amount > 1) {
      this.item.amount = this.item.amount - 1;
    }
  }

  closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  deleteItemInCart() {
    this.cartService.deleteItemInCart(this.item);

    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  addItemToCart() {
    // * CHECK IF ITEM ALREADY IN CART
    if (this.cartService.orderList.indexOf(this.item) != -1) {
      this.cartService.updateItemInCart(this.item);
      console.log('UPDATEEE');
    } else {
      this.cartService.addItemToCart(this.item);
    }
    // * CLOSE DETAIL MODAL
    this.modalCtrl.dismiss({
      dismissed: true,
    });
    // * IF NOT FROM CART OPEN CONFIRM MODAL
    if (this.isCart === false) {
      this.modalCtrl
        .create({
          component: ItemConfirmComponent,
          cssClass: 'item-confirm-css',
        })
        .then((modalEl) => {
          modalEl.present();
        });
    }
  }
}
