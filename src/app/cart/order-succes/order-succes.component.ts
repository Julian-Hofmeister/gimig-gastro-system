import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-succes',
  templateUrl: './order-succes.component.html',
  styleUrls: ['./order-succes.component.scss'],
})
export class OrderSuccesComponent implements OnInit {
  // # CONTRUCTOR
  constructor(private modalCtrl: ModalController) {}

  // # ON INIT
  async ngOnInit() {
    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 6000);
  }

  // # FUNCTIONS
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
