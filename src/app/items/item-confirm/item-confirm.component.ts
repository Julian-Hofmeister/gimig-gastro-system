import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-confirm',
  templateUrl: './item-confirm.component.html',
  styleUrls: ['./item-confirm.component.scss'],
})
export class ItemConfirmComponent implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    this.modalCtrl.dismiss();

    this.navCtrl.navigateForward(['/', 'cart']);
  }
}
