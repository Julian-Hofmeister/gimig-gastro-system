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

  selectedOptions: string[];

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

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
    this.item.availableOptions = ['kleine Portion'];

    if (this.item.selectedOptions) {
      this.selectedOptions = this.item.selectedOptions;
    }
    console.log(this.item);

    this.item.amount = this.item.amount ? this.item.amount : 1;
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  increaseAmountByOne() {
    this.item.amount =
      this.item.amount < 25 ? this.item.amount + 1 : this.item.amount;
  }

  // ----------------------------------------------------------------------------------------------

  decreaseAmountByOne() {
    this.item.amount =
      this.item.amount > 1 ? this.item.amount - 1 : this.item.amount;
  }

  // ----------------------------------------------------------------------------------------------

  closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  // ----------------------------------------------------------------------------------------------

  deleteItemInCart() {
    this.cartService.deleteItemInCart(this.item);

    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  // ----------------------------------------------------------------------------------------------

  addItemToCart() {
    this.cartService.addItemToCart(this.item);

    console.log(this.item);

    this.closeModal();

    if (!this.itemInCart) {
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

  handleChange(ev) {
    this.item.selectedOptions = ev.target.value;
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion#
}
