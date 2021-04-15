import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logout-setting',
  templateUrl: './logout-setting.component.html',
  styleUrls: ['./logout-setting.component.scss'],
})
export class LogoutSettingComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onLogout() {
    console.log('LOGGING OUT...');
    this.modalCtrl.dismiss();
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }
}
