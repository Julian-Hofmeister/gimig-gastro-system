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
  @Input() isCart: boolean = false;
  @Input() item: Item;

  inOrder: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    if (this.cartService.orderList.indexOf(this.item) != -1) {
      this.inOrder = true;
      console.log(this.inOrder);
    }
  }

  add() {
    if (this.item.amount < 25) {
      this.item.amount = this.item.amount + 1;
    }
  }
  remove() {
    if (this.item.amount > 1) {
      this.item.amount = this.item.amount - 1;
    }
  }

  close() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  delete() {
    // DELETE ITEM
    const index: number = this.cartService.orderList.indexOf(this.item);
    if (index !== -1) {
      this.cartService.orderList.splice(index, 1);
    }
    // CLOSE DETAIL MODAL
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  addItem() {
    // ADD ITEM TO ORDER LIST
    if (this.cartService.orderList.indexOf(this.item) == -1) {
      this.cartService.orderList.push(this.item);
    }

    // CLOSE DETAIL MODAL
    this.modalCtrl.dismiss({
      dismissed: true,
    });
    // IF NOT FROM CART OPEN CONFIRM MODAL
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
