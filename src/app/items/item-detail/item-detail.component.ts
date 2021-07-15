import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/cart/cart.service';
import { ItemConfirmComponent } from '../item-confirm/item-confirm.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { Item } from '../item.model';

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
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
  @Input() item: Item;
  @Input() modalOpenedFromCart = false;
  @Input() itemInCart = false;
  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  private itemSub: Subscription;
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.item.amount = this.item.amount ? this.item.amount : 1;
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public increaseAmountByOne() {
    if (this.item.amount < 25) {
      this.item.amount = this.item.amount + 1;
    }
  }
  public decreaseAmountByOne() {
    if (this.item.amount > 1) {
      this.item.amount = this.item.amount - 1;
    }
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  public deleteItemInCart() {
    this.cartService.deleteItemInCart(this.item);

    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  public addItemToCart() {
    this.cartService.addItemToCart(this.item);
    this.closeModal();
    if (!this.itemInCart) {
      console.log('Open Confirm');

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
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion#
}
