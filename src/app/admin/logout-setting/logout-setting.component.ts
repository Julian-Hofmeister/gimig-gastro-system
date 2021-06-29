import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-logout-setting',
  templateUrl: './logout-setting.component.html',
  styleUrls: ['./logout-setting.component.scss'],
})
export class LogoutSettingComponent {
  // # CONTRUCTOR
  constructor(
    private modalCtrl: ModalController,
    // # SERVICES
    private authService: AuthService
  ) {}

  // # FUNCTIONS
  onLogout() {
    console.log('LOGGING OUT...');
    this.authService.logout();
    this.modalCtrl.dismiss();
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }
}
