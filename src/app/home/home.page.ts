import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
import { User } from './user.model';
import { WifiModalComponent } from './wifi-modal/wifi-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  user: User;

  table: Table;

  restaurant$: Observable<Restaurant>;

  // ----------------------------------------------------------------------------------------------

  tableNumber = localStorage.getItem('tableNumber');

  userEmail = localStorage.getItem('user');

  // ----------------------------------------------------------------------------------------------

  ableToPay = false;

  serviceRequest = false;

  isReserved = false;

  resetRequest = false;

  backgroundImage: string;

  // ----------------------------------------------------------------------------------------------

  message: string;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private tableService: TableService,
    private restaurantService: RestaurantService,
    private storage: AngularFireStorage,

    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit() {
    this.loadTable();

    this.restaurant$ = this.restaurantService.getRestaurantData();

    this.restaurant$.subscribe(async (data) => {
      console.log(data);

      this.backgroundImage = await this.storage
        .ref(data.imagePath)
        .getDownloadURL()
        .toPromise();

      console.log(data);

      localStorage.setItem('theme', data.theme);
      localStorage.setItem('mainCategory1', data.mainCategory1);
      localStorage.setItem('mainCategory2', data.mainCategory2);
      localStorage.setItem('mainIcon1', data.mainIcon1);
      localStorage.setItem('mainIcon2', data.mainIcon2);
      localStorage.setItem('wifiName', data.wifiName);
      localStorage.setItem('wifiPassword', data.wifiPassword);
      localStorage.setItem('wifiQrCode', data.wifiQrCode);
      localStorage.setItem('feedbackImage', data.feedbackImage);
      localStorage.setItem('feedbackQrCode', data.feedbackQrCode);
      localStorage.setItem('name', data.name);

      localStorage.setItem('serviceMessage1', data.serviceMessage1 ?? '');
      localStorage.setItem('serviceMessage2', data.serviceMessage2 ?? '');
      localStorage.setItem('serviceMessage3', data.serviceMessage3 ?? '');
      localStorage.setItem('serviceMessage4', data.serviceMessage4 ?? '');
    });
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  openAdmin() {
    this.modalCtrl
      .create({
        component: AdminLoginComponent,
        cssClass: 'admin-login-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openFeedbackPage() {
    this.navCtrl.navigateForward('home/feedback-page');
  }

  // ----------------------------------------------------------------------------------------------

  openShowGreetingskModal() {
    this.modalCtrl
      .create({
        component: ShowGreetingsModalComponent,
        cssClass: 'show-greetings-modal-css',
        mode: 'md',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openServiceRequestModal() {
    this.modalCtrl
      .create({
        component: CallServiceComponent,
        cssClass: 'service-modal-css',
        mode: 'md',
        componentProps: {
          message: !this.serviceRequest
            ? 'Bedienung Rufen'
            : 'Bedienung wurde bereits gerufen',
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openPayRequestModal() {
    this.modalCtrl
      .create({
        component: SendPayRequestComponent,
        cssClass: 'send-pay-request-css',
        mode: 'md',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openOfferDessertModal() {
    this.modalCtrl
      .create({
        component: OfferDessertModalComponent,
        cssClass: 'offer-dessert-modal-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  openWifiModal() {
    this.modalCtrl
      .create({
        component: WifiModalComponent,
        cssClass: 'wifi-modal-css',
        mode: 'md',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
  private loadTable() {
    this.tableService.getTableData().subscribe((doc) => {
      this.table = doc;

      this.ableToPay = this.table.ableToPay;

      this.serviceRequest = this.table.serviceRequest;

      this.resetRequest = this.table.resetRequest;

      this.message = this.table.message;

      this.isReserved = this.table.isReserved;

      console.log(this.table.isReserved);

      if (this.table.resetRequest) {
        this.tableService.onResetTable();

        console.log('RESETTING..');
      }

      if (this.table.payRequest) {
        setTimeout(() => {
          this.openFeedbackPage();
        }, 5000);
      }

      this.checkMessageAction(this.table.message);

      this.checkTableReservation(this.table);
    });
  }

  // ----------------------------------------------------------------------------------------------

  private checkMessageAction(message: string) {
    if (
      message === 'reorderBeverages' ||
      message === 'offerDessert' ||
      message === 'showFeedback' ||
      message === 'showGreetings'
    ) {
      this.modalCtrl
        .create({
          component:
            message === 'reorderBeverages'
              ? ReorderBeveragesModalComponent
              : message === 'offerDessert'
              ? OfferDessertModalComponent
              : message === 'showFeedback'
              ? ShowFeedbackModalComponent
              : message === 'showGreetings'
              ? ShowGreetingsModalComponent
              : null,
          cssClass: 'reorderBeverages'
            ? 'reorder-beverages-modal-css'
            : message === 'offerDessert'
            ? 'offer-dessert-modal-css'
            : message === 'showFeedback'
            ? 'show-feedback-modal-css'
            : message === 'showGreetings'
            ? 'show-greetings-modal-css'
            : null,
          // backdropDismiss: message == 'showFeedback' ? false : true,
        })
        .then((modalEl) => {
          modalEl.present();
        });

      this.updateTableMessage();
    }
  }

  // ----------------------------------------------------------------------------------------------

  private checkTableReservation(table: Table) {
    if (table.isReserved) {
      this.navCtrl.navigateForward('home/reservation-page', { state: table });
    }
  }

  // ----------------------------------------------------------------------------------------------

  private updateTableMessage() {
    this.tableService.updateTableMessage();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregions
}
