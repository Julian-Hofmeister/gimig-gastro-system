import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {}

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  onNavigateBack() {
    this.navCtrl.back();
  }

  // ----------------------------------------------------------------------------------------------

  onNavigateHome() {
    this.navCtrl.navigateBack('/home');
  }

  // ----------------------------------------------------------------------------------------------

  onNavigateCart() {
    this.navCtrl.navigateForward('/cart');
  }

  // ----------------------------------------------------------------------------------------------

  onNavigateFood() {
    this.navCtrl.navigateForward('categories/categories-food/true');
  }

  // ----------------------------------------------------------------------------------------------

  onNavigateBeverages() {
    this.navCtrl.navigateForward('categories/categories-beverages/false');
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
