import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-logout-setting',
  templateUrl: './logout-setting.component.html',
  styleUrls: ['./logout-setting.component.scss'],
})
export class LogoutSettingComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogout() {
    console.log('LOGGING OUT...');
    this.authService.logout();
    this.modalCtrl.dismiss();
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }
}
