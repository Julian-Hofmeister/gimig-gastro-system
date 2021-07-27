import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { CartService } from '../cart/cart.service';
import { OrderSuccesComponent } from '../cart/order-succes/order-succes.component';
import { CallServiceComponent } from './call-service/call-service.component';
import { OfferDessertModalComponent } from './offer-dessert-modal/offer-dessert-modal.component';
import { ReorderBeveragesModalComponent } from './reorder-beverages-modal/reorder-beverages-modal.component';
import { SendPayRequestComponent } from './send-pay-request/send-pay-request.component';
import { ShowFeedbackModalComponent } from './show-feedback-modal/show-feedback-modal.component';
import { Table } from './table.model';
import { TableService } from './table.service';
import { User } from './user.model';

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

  table: Table;
  user: User;

  tableSub: Observable<Table>;

  tableNumber = localStorage.getItem('tableNumber');

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  ableToPay = false;

  serviceRequest = false;

  resetRequest = false;

  message: string;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private router: Router,
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.fetchTableDataFromFireStore();
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

  openFeedback() {
    this.router.navigate(['/', 'feedback']);
  }

  // ----------------------------------------------------------------------------------------------

  openServiceRequestModal() {
    this.modalCtrl
      .create({
        component: CallServiceComponent,
        cssClass: 'confirm-css',
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
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private fetchTableDataFromFireStore() {
    if (this.userEmail) {
      this.tableSub = this.tableService.getTableData();

      this.tableSub.subscribe((doc) => {
        this.table = doc;
        this.ableToPay = this.table.ableToPay;
        this.serviceRequest = this.table.serviceRequest;
        this.resetRequest = this.table.resetRequest;
        this.message = this.table.message;

        if (this.resetRequest) {
          console.log('RESETTING..');
          this.tableService.onResetTable();
        }

        this.checkMessageAction(this.table.message);
      });
    }
  }

  // ----------------------------------------------------------------------------------------------

  private checkMessageAction(message: string) {
    if (
      message === 'reorderBeverages' ||
      message === 'offerDessert' ||
      message === 'showFeedback' ||
      message === 'showGreetings'
    ) {
      console.log('OPEN MESSAGE');

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
              ? ShowFeedbackModalComponent
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
        })
        .then((modalEl) => {
          modalEl.present();
        });

      // this.updateTableMessage();
    }
  }

  private updateTableMessage() {
    this.tableService.updateTableMessage();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregions
}
