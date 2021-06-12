import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-order-succes',
  templateUrl: './order-succes.component.html',
  styleUrls: ['./order-succes.component.scss'],
})
export class OrderSuccesComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  async ngOnInit() {
    console.log('start delay');
    setTimeout(() => {
      /*Your Code*/
      console.log('end delay');
      this.dismiss();
    }, 6000);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
