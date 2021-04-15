import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
})
export class OrderConfirmComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onOrder() {
    this.cartService.order();
    this.modalCtrl.dismiss();
  }
}
