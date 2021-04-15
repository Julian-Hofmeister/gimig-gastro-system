import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoutSettingComponent } from '../admin/logout-setting/logout-setting.component';
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
  loadedOrder: Item[] = [];

  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadedOrder = this.cartService.orderList;
  }

  onShowDetail(item: any) {
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

  order() {
    this.modalCtrl
      .create({
        component: LogoutSettingComponent,
        cssClass: 'confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
