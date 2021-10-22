import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TableNumberPanelComponent } from './admin/table-number-panel/table-number-panel.component';
import { AuthService } from './authentication/auth.service';
import { ConnectionService } from './connection.service';
import { Table } from './home/table.model';

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

  table: Table;

  tableSub: Observable<Table>;

  tableNumber = localStorage.getItem('tableNumber');

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private connectionService: ConnectionService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.connectionService.checkConnection();

    this.initializeApp();
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    if (this.tableNumber == null) {
      this.openTableNumberModal();
    }

    this.authService.autoSignIn();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  initializeApp() {
    this.platform.ready().then(() => {
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);

      // set status bar to white
      this.statusBar.backgroundColorByHexString('#ffffff');

      this.splashScreen.show();

      this.statusBar.hide();
    });
  }

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
        modalEl.present();
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
