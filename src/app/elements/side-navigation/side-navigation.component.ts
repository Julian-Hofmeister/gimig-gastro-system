import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {Restaurant} from "../../home/restaurant.model";

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  // mainCategory1 = JSON.parse(localStorage.getItem('restaurant')).mainCategory1;
  // mainCategory2 = JSON.parse(localStorage.getItem('restaurant')).mainCategory2;
  //
  // // mainIcon1 = localStorage.getItem('mainIcon1') ?? 'restaurant-outline';
  // // mainIcon2 = localStorage.getItem('mainIcon2') ?? 'wine-outline' ;
  //
  // mainIcon1 = JSON.parse(localStorage.getItem('restaurant')).mainIcon1 ;
  // mainIcon2 = JSON.parse(localStorage.getItem('restaurant')).mainIcon2 ;
  //
  restaurant: Restaurant = JSON.parse(localStorage.getItem('restaurant'));

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
    this.navCtrl.navigateForward(
      'categories/categories-food/true/' + this.restaurant.mainCategory1
    );
  }

  // ----------------------------------------------------------------------------------------------

  onNavigateBeverages() {
    this.navCtrl.navigateForward(
      'categories/categories-beverages/false/' + this.restaurant.mainCategory2
    );
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
