import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  // # PROPERTIES
  passwordInput: string = '';
  passwordArray: string[] = [];
  adminPassword = '301';

  // # CONSTRUCTOR
  constructor(private router: Router, private modalCtrl: ModalController) {}

  // # FUNCTIONS
  inputNumber(number: string) {
    this.passwordArray.push(number);
    this.passwordInput = this.passwordInput + number;

    if (this.passwordArray.length > 2) {
      this.onSubmit(true);
    }
  }

  onSubmit(autoSubmit: boolean) {
    if (this.passwordInput != this.adminPassword) {
      console.log('PASSWORD IS INCORRECT');
      if ((autoSubmit && this.passwordArray.length > 3) || !autoSubmit) {
        this.modalCtrl.dismiss();
      }
    } else {
      console.log('PASSWORD IS CORRECT');
      this.modalCtrl.dismiss();
      this.router.navigate(['/', 'admin']);
    }
  }
}
