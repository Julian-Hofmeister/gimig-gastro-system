import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {}

  onNavigateBack() {
    this.navCtrl.back();
  }

  onNavigateHome() {
    this.navCtrl.navigateBack('/home');
  }

  onNavigateCart() {
    this.navCtrl.navigateForward('/cart');
  }
}
