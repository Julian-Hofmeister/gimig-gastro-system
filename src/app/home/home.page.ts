import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { CallServiceComponent } from './call-service/call-service.component';
import { OfferDessertModalComponent } from './offer-dessert-modal/offer-dessert-modal.component';
import { ReorderBeveragesModalComponent } from './reorder-beverages-modal/reorder-beverages-modal.component';
import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service';
import { SendPayRequestComponent } from './send-pay-request/send-pay-request.component';
import { ShowFeedbackModalComponent } from './show-feedback-modal/show-feedback-modal.component';
import { ShowGreetingsModalComponent } from './show-greetings-modal/show-greetings-modal.component';
import { Table } from './table.model';
import { TableService } from './table.service';
import { WifiModalComponent } from './wifi-modal/wifi-modal.component';
import {Modal} from '../shared/modal.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  table: Table;
  restaurant: Restaurant;
  // restaurant$: Observable<Restaurant>;
  backgroundImage: string;
  message: string;

  adminModal = {
    component: AdminLoginComponent,
    style: 'admin-login-css',
  };

  wifiModal = {
    component: WifiModalComponent,
    style: 'wifi-modal-css',
  };

  paymentModal = {
    component: SendPayRequestComponent,
    style: 'send-pay-request-css',
  };

  serviceModal = {
    component: CallServiceComponent,
    style: 'confirm-css',
  };

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private tableService: TableService,
    private restaurantService: RestaurantService,
    private storage: AngularFireStorage,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit() {
    this.loadRestaurant();
    this.loadTable();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  openModal(modal: Modal) {
    this.modalCtrl.create({
      component: modal.component,
      cssClass: modal.style,
      mode: modal.mode ?? 'md',
    }).then((modalEl) => {
      modalEl.present().then();
    });
  }



  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private loadTable() {
    this.tableService.getTableData().subscribe((table) => {
      this.tableService.checkResetRequest(table);
      this.tableService.checkPayRequest(table);
      this.tableService.checkTableReservation(table);

      this.table = table;

      // this.checkMessageAction(this.table.message);
    });
  }

  // ----------------------------------------------------------------------------------------------

  private loadRestaurant() {
    this.restaurantService.getRestaurantData().subscribe( async (restaurant: Restaurant) => {

      this.backgroundImage = await this.storage
        .ref(restaurant.imagePath)
        .getDownloadURL()
        .toPromise();

      this.restaurant = restaurant as Restaurant;

      localStorage.setItem('restaurant', JSON.stringify(restaurant));
    });
  }

  // ----------------------------------------------------------------------------------------------

  private checkMessageAction(message: string) {
    if (
      message === 'reorderBeverages' ||
      message === 'offerDessert' ||
      // message === 'showFeedback' ||
      message === 'showGreetings'
    ) {
      this.modalCtrl
        .create({
          component:
            message === 'reorderBeverages'
              ? ReorderBeveragesModalComponent
              : message === 'offerDessert'
              ? OfferDessertModalComponent
              // : message === 'showFeedback'
              // ? ShowFeedbackModalComponent
              : message === 'showGreetings'
              ? ShowGreetingsModalComponent
              : null,
          cssClass: 'reorderBeverages'
            ? 'reorder-beverages-modal-css'
            : message === 'offerDessert'
            ? 'offer-dessert-modal-css'
            // : message === 'showFeedback'
            // ? 'show-feedback-modal-css'
            : message === 'showGreetings'
            ? 'show-greetings-modal-css'
            : null,
          // backdropDismiss: message == 'showFeedback' ? false : true,
        })
        .then((modalEl) => {
          modalEl.present().then();
        });

      this.tableService.updateTableMessage();
    }
  }

  // ----------------------------------------------------------------------------------------------

  //#endregions
}
