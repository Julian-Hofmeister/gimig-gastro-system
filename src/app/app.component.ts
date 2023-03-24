import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { TableNumberPanelComponent } from './admin/table-number-panel/table-number-panel.component';
import { AuthService } from './authentication/auth.service';
import { ConnectionService } from './connection.service';
import {ItemService} from './items/item.service';
import {CategoryService} from './categories/category.service';
import {Item} from './items/item.model';
import {Category} from './categories/category.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  tableNumber = localStorage.getItem('tableNumber');


  ipAddress = localStorage.getItem('ipAddress');

  webSocket: WebSocket;

  items: Item[];
  categories: Category[];

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private connectionService: ConnectionService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private itemService: ItemService,
    private categoryService: CategoryService,
  ) {
    this.connectionService.checkConnection();
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    if (!this.tableNumber) {
      this.openTableNumberModal();
    }

    this.authService.autoSignIn();

    this.webSocketInit();

  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private openTableNumberModal() {
    this.modalCtrl
      .create({
        component: TableNumberPanelComponent,
        cssClass: 'table-number-panel-css',
      })
      .then((modalEl) => {
        modalEl.present().then();
      });
  }
  // ----------------------------------------------------------------------------------------------

  private webSocketInit() {
    this.webSocket = new WebSocket('ws:' + this.ipAddress + ':3434');

    this.webSocket.onmessage = (message: { data: string; }) => {
       if (message.data === 'productUpdate') {
        // window.location.reload();
         console.log(message);

         this.items = this.itemService.getAllDegasoItems();
         this.categories = this.categoryService.getAllDegasoCategories();
      }
    };
  }

  //#endregion
}
