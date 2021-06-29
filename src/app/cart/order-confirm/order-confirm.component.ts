import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { OrderSuccesComponent } from '../order-succes/order-succes.component';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
})
export class OrderConfirmComponent {
  // # CONTRUCTOR
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  // # FUNCTIONS
  onOrder() {
    this.cartService.order();
    this.modalCtrl.dismiss();
    this.navCtrl.navigateBack('/home');

    this.modalCtrl
      .create({
        component: OrderSuccesComponent,
        cssClass: 'item-confirm-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
