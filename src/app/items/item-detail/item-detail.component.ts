import {AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
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
import {Option} from '../option.model';
import {transformAll} from '@angular/compiler/src/render3/r3_ast';

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
  selectedOptions2: string[];

  options: string[] = [];

  blankImg = '/assets/images/grey.jpg';

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  private itemSub: Subscription;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService,

  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    setTimeout(() => {
      if (this.item.combinedWith) {
        for (const option of this.item.combinedWith) {
          // @ts-ignore
          this.options.push(option._id);
        }
      }

      if (this.item.selectedOptions2) {
        this.selectedOptions2 = this.item.selectedOptions2;
      }

      this.item.description = this.item.description ? this.item.description.replace('\n', '\n') : '';

      this.item.amount = this.item.amount ?? 1;

      console.log(this.item.combinableWith);

    }, 0);
  }


  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  increaseAmountByOne() {

    if (this.item.stockChecking) {
      this.item.amount =
        this.item.amount < this.item.stockAmount ? this.item.amount + 1 : this.item.amount;
    } else {
      this.item.amount =
        this.item.amount < 25 ? this.item.amount + 1 : this.item.amount;
    }





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

    this.item.combinedWith = [];

    for (const option of this.item.combinableWith) {
      for (const id of this.options) {
        // @ts-ignore
        if (option._id === id) {
          this.item.combinedWith.push(option);
        }
      }
    }

    this.cartService.addItemToCart(this.item);

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

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion#
}
