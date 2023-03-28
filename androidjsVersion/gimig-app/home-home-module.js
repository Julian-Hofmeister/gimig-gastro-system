(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "/4KO":
/*!*************************************************************!*\
  !*** ./src/app/home/call-service/call-service.component.ts ***!
  \*************************************************************/
/*! exports provided: CallServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallServiceComponent", function() { return CallServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_call_service_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./call-service.component.html */ "xOn4");
/* harmony import */ var _call_service_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-service.component.scss */ "BSoT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../table.service */ "R02B");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "4USb");







let CallServiceComponent = class CallServiceComponent {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(tableService, modalCtrl) {
        this.tableService = tableService;
        this.modalCtrl = modalCtrl;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.message1 = localStorage.getItem('serviceMessage1');
        this.message2 = localStorage.getItem('serviceMessage2');
        this.message3 = localStorage.getItem('serviceMessage3');
        this.message4 = localStorage.getItem('serviceMessage4');
        this.message = 'Service Rufen';
        this.ipAddress = localStorage.getItem('ipAddress');
        this.tableNumber = localStorage.getItem('tableNumber');
        this.lastCall = Number(localStorage.getItem('serviceCall'));
        this.timeout = 120000;
    }
    //#endregion
    ngOnInit() {
        if (this.lastCall > Date.now() - this.timeout) {
            this.message = 'Eine Bedienung wurde bereits gerufen';
        }
    }
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onCallService(message) {
        this.tableService.sendServiceRequest(message);
        this.modalCtrl.dismiss();
    }
    // ----------------------------------------------------------------------------------------------
    onClose() {
        this.modalCtrl.dismiss();
    }
    // ----------------------------------------------------------------------------------------------
    onCallDegasoService() {
        this.modalCtrl.dismiss();
        if (this.lastCall > Date.now() - this.timeout) {
            return;
        }
        localStorage.setItem('serviceCall', String(Date.now()));
        const orderArray = [];
        const order = {
            name: 'Serviceruf',
            price: '0',
            tax: '0',
            kitchenRelevant: true,
            active: true,
            combinationProduct: false,
            infoText: '',
            course: '0',
            brangToTable: false,
            additionalInfo: 'test',
            customPrinterAddress: 'barPrinter',
            _id: 'service',
            identifyForList: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
            uniqueOrderArticleId: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
            combinableWith: [],
        };
        orderArray.push(order);
        const data = {
            table: this.tableNumber,
            articles: orderArray,
            employee: ''
        };
        fetch('http://' + this.ipAddress + ':3434/newOrder/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            // tslint:disable-next-line:no-shadowed-variable
            .then(data => {
            console.log('Success:', data);
            // this.removeCall(data._id);
        });
    }
    //#endregion
    removeCall(orderId) {
        const data = {
            _id: orderId,
            payed: true,
        };
        fetch('http://' + this.ipAddress + ':3434/deleteOrder/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => console.log(response.status))
            .catch((error) => {
            console.error('Error:', error);
        });
    }
};
CallServiceComponent.ctorParameters = () => [
    { type: _table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CallServiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-call-service',
        template: _raw_loader_call_service_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_call_service_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CallServiceComponent);



/***/ }),

/***/ "0lSI":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/show-feedback-modal/show-feedback-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n        <div class=\"container\">\n            <ion-row>\n                <ion-col>\n                    <h2>Vielen Dank für ihren Besuch!</h2>\n                    <p>\n                        Dürfen wir um eine Bewertung bitten? <br /> QR-Code Scannen und Bewerten.\n                    </p>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col class=\"text-align-start\">\n                    <img src=\"/assets/images/frame.png\" alt=\"\" />\n                    <p class=\"detail\">Gimig</p>\n                </ion-col>\n                <!-- <ion-col class=\"text-align-start\">\n                    <img src=\"/assets/images/frame.png\" alt=\"\" />\n                    <p class=\"detail\">Venezia</p>\n                </ion-col> -->\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "2+6m":
/*!*********************************************************!*\
  !*** ./src/app/home/wifi-modal/wifi-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: WifiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiModalComponent", function() { return WifiModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wifi_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wifi-modal.component.html */ "hXW9");
/* harmony import */ var _wifi_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi-modal.component.scss */ "C7pp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");





let WifiModalComponent = class WifiModalComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(storage) {
        this.storage = storage;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.restaurant = JSON.parse(localStorage.getItem('restaurant'));
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.qrCodeImage = yield this.storage
                .ref(this.restaurant.wifiQrCode)
                .getDownloadURL()
                .toPromise();
        });
    }
};
WifiModalComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
WifiModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wifi-modal',
        template: _raw_loader_wifi_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wifi_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WifiModalComponent);



/***/ }),

/***/ "23Kn":
/*!***********************************************************************!*\
  !*** ./src/app/home/send-pay-request/send-pay-request.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n}\n\nion-content {\n  height: 100%;\n}\n\nion-row {\n  height: 33.33%;\n}\n\nion-col {\n  height: 100%;\n}\n\nion-button {\n  width: 100%;\n  height: 100%;\n  --border-radius: 0;\n  --background: rgb(255, 255, 255);\n  color: black;\n  --color: black;\n  opacity: 0.8;\n  --box-shadow: 1.5px 1.5px 0px 0.1px rgba(0, 0, 0, 0.3);\n}\n\n.selected {\n  opacity: 1;\n  --background: rgb(255, 154, 117);\n  color: white;\n  --color: white;\n}\n\n.submit {\n  --background: rgb(117, 158, 255);\n  color: white;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbmQtcGF5LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDRixZQUFBO0VBQ0EsY0FBQTtFQUVFLFlBQUE7RUFDQSxzREFBQTtBQUFKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0VBQ0YsWUFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNJLGdDQUFBO0VBQ0YsWUFBQTtFQUNBLGNBQUE7QUFGRiIsImZpbGUiOiJzZW5kLXBheS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiAzMy4zMyVcbn1cblxuaW9uLWNvbCB7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbmlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1jb2xvcjogYmxhY2s7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAtLWJveC1zaGFkb3c6IDEuNXB4IDEuNXB4IDBweCAwLjFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgO1xufVxuXG5cbi5zZWxlY3RlZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDE1NCwgMTE3KTtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE3LCAxNTgsIDI1NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG4iXX0= */");

/***/ }),

/***/ "3wpj":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/reorder-beverages-modal/small-item-card/small-item-card.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SmallItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallItemCardComponent", function() { return SmallItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_small_item_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./small-item-card.component.html */ "Mwua");
/* harmony import */ var _small_item_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./small-item-card.component.scss */ "yGh3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SmallItemCardComponent = class SmallItemCardComponent {
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() {
        //#endregion
        //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
        this.onItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.item.amount = 0;
    }
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    increaseAmountByOne() {
        if (this.item.amount < 25) {
            this.item.amount = this.item.amount + 1;
            this.onItemChanged.emit(this.item);
        }
    }
    // ----------------------------------------------------------------------------------------------
    decreaseAmountByOne() {
        if (this.item.amount > 0) {
            this.item.amount = this.item.amount - 1;
            this.onItemChanged.emit(this.item);
        }
    }
};
SmallItemCardComponent.ctorParameters = () => [];
SmallItemCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onItemChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SmallItemCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-small-item-card',
        template: _raw_loader_small_item_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_small_item_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SmallItemCardComponent);



/***/ }),

/***/ "5u2/":
/*!*****************************************************************************!*\
  !*** ./src/app/home/show-greetings-modal/show-greetings-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowGreetingsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGreetingsModalComponent", function() { return ShowGreetingsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_greetings_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-greetings-modal.component.html */ "hFmm");
/* harmony import */ var _show_greetings_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-greetings-modal.component.scss */ "DkLQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _call_service_call_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../call-service/call-service.component */ "/4KO");






let ShowGreetingsModalComponent = class ShowGreetingsModalComponent {
    //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() { }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onClose() {
        this.modalCtrl.dismiss();
    }
    // ----------------------------------------------------------------------------------------------
    onCallService() {
        this.modalCtrl.dismiss();
        this.modalCtrl
            .create({
            component: _call_service_call_service_component__WEBPACK_IMPORTED_MODULE_5__["CallServiceComponent"],
            cssClass: 'confirm-css',
            componentProps: {
                message: 'Bedienung Rufen',
            },
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
};
ShowGreetingsModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ShowGreetingsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-greetings-modal',
        template: _raw_loader_show_greetings_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_greetings_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShowGreetingsModalComponent);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
    {
        path: 'reservation-page',
        loadChildren: () => __webpack_require__.e(/*! import() | reservation-page-reservation-page-module */ "reservation-page-reservation-page-module").then(__webpack_require__.bind(null, /*! ./reservation-page/reservation-page.module */ "IeLm")).then(m => m.ReservationPagePageModule)
    },
    {
        path: 'feedback-page',
        loadChildren: () => __webpack_require__.e(/*! import() | feedback-page-feedback-page-module */ "feedback-page-feedback-page-module").then(__webpack_require__.bind(null, /*! ./feedback-page/feedback-page.module */ "ABZp")).then(m => m.FeedbackPagePageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "BSoT":
/*!***************************************************************!*\
  !*** ./src/app/home/call-service/call-service.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nion-button {\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  --border-radius: 20px;\n  --background: rgb(255, 154, 117);\n  --box-shadow: rgba(60, 62, 66, 0.2) 0px 8px 24px;\n}\n\nion-button p {\n  color: white;\n}\n\n.half {\n  height: 50%;\n}\n\n.service-modal {\n  margin: 1rem;\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  height: 100%;\n}\n\nion-fab-button {\n  --border-radius: 20px;\n  --background: white;\n  --color: rgb(255, 154, 117);\n  --box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n}\n\nion-fab-button ion-icon {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbGwtc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0RBQUE7QUFDSjs7QUFBQztFQUNFLFlBQUE7QUFFSDs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBQUNKOztBQUFJO0VBQ0ksaUJBQUE7QUFFUiIsImZpbGUiOiJjYWxsLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMTU0LCAxMTcpO1xuICAgIC0tYm94LXNoYWRvdzogcmdiYSg2MCwgNjIsIDY2LCAwLjIpIDBweCA4cHggMjRweDtcbiBwIHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiB9XG59XG5cbi5oYWxmIHtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLnNlcnZpY2UtbW9kYWwge1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWNvbG9yOiByZ2IoMjU1LCAxNTQsIDExNyk7XG4gICAgLS1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC8vIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "C7pp":
/*!***********************************************************!*\
  !*** ./src/app/home/wifi-modal/wifi-modal.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".space-between {\n  justify-content: space-between;\n  margin: 0 1rem;\n}\n\n.center-horizontal {\n  text-align: center;\n}\n\n.wifi-modal {\n  margin: 1rem;\n}\n\nstrong {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dpZmktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6IndpZmktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCAxcmVtO1xufVxuXG4uY2VudGVyLWhvcml6b250YWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ud2lmaS1tb2RhbCB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG5zdHJvbmcge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "DkLQ":
/*!*******************************************************************************!*\
  !*** ./src/app/home/show-greetings-modal/show-greetings-modal.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #FF9872;\n  --color: white;\n}\n\nh2 {\n  font-weight: 700;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  margin-top: 0;\n}\n\np {\n  font-size: 1.5rem;\n  letter-spacing: 2px;\n}\n\nion-button {\n  --border-radius: 5rem;\n  --background: white;\n  --color: rgb(92, 92, 92);\n  --box-shadow: none !important;\n  font-size: 1rem;\n  width: 20rem;\n  height: 3.5rem;\n  margin-top: 3rem;\n}\n\nimg {\n  border-radius: 80px 20px 80px 80px;\n  height: 20rem;\n  object-fit: cover;\n}\n\nion-row {\n  height: 100%;\n  align-items: center;\n}\n\n.container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 2rem;\n}\n\n.content-col {\n  text-align: start;\n}\n\nion-icon {\n  font-size: 2rem;\n  margin-right: 1.5rem;\n  margin-bottom: 0.3rem;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Nob3ctZ3JlZXRpbmdzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoic2hvdy1ncmVldGluZ3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkY5ODcyO1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVyZW07XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDgwcHggMjBweCA4MHB4IDgwcHg7XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAvLyB3aWR0aDogMTNyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5pb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXJnaW46IDAgMnJlbTtcbn1cblxuLmNvbnRlbnQtY29sIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "Ijl4":
/*!***********************************************************************************!*\
  !*** ./src/app/home/reorder-beverages-modal/reorder-beverages-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReorderBeveragesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderBeveragesModalComponent", function() { return ReorderBeveragesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reorder_beverages_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reorder-beverages-modal.component.html */ "xoWC");
/* harmony import */ var _reorder_beverages_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorder-beverages-modal.component.scss */ "T5mA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cart/cart.service */ "Nagw");







let ReorderBeveragesModalComponent = class ReorderBeveragesModalComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(cartService, afStorage, modalCtrl, navCtrl) {
        this.cartService = cartService;
        this.afStorage = afStorage;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.isLoading = false;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.fetchOrderedBeveragesFromCart();
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    addBeveragesToCart() {
        for (const item of this.orderedBeverages) {
            if (item.amount > 0) {
                console.log('hiii');
                this.cartService.addItemToCart(item);
                this.navCtrl.navigateForward('/cart');
                this.modalCtrl.dismiss();
            }
        }
    }
    // ----------------------------------------------------------------------------------------------
    onOpenAllBeverages() {
        this.modalCtrl.dismiss();
        this.addBeveragesToCart();
    }
    // ----------------------------------------------------------------------------------------------
    onItemChanged(event) {
        console.log(event);
    }
    // ----------------------------------------------------------------------------------------------
    onClose() {
        this.modalCtrl.dismiss();
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    fetchOrderedBeveragesFromCart() {
        this.isLoading = true;
        this.orderedBeveragesSub = this.cartService
            .getOrderedCart()
            .subscribe((orders) => {
            this.orderedBeverages = [];
            for (const item of orders) {
                const fetchedItem = {
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    imagePath: this.afStorage.ref(item.imagePath).getDownloadURL(),
                    imageRef: item.imagePath,
                    isVisible: item.isVisible,
                    kitchenRelevant: item.isFood,
                    _id: item.id,
                    amount: item.amount ? item.amount : 1,
                    isOrdered: item.isOrdered ? item.isOrdered : false,
                    category: item.category
                };
                if (!fetchedItem.kitchenRelevant) {
                    this.orderedBeverages.push(fetchedItem);
                }
            }
            this.isLoading = false;
        });
    }
};
ReorderBeveragesModalComponent.ctorParameters = () => [
    { type: src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ReorderBeveragesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reorder-beverages-modal',
        template: _raw_loader_reorder_beverages_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reorder_beverages_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReorderBeveragesModalComponent);



/***/ }),

/***/ "LCwl":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/offer-dessert-modal/item-container/item-container.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-container\">\n    <ion-row class=\"justify-content-end content-row\">\n        <ion-col class=\"content-col\">\n            <p class=\"detail\">{{ item.name }}</p>\n            <p *ngIf=\"item.name != item.description\">\n                {{ item.description }}\n            </p>\n            <p class=\"detail price\">\n                {{ item.price | currency: \"EUR\":\"symbol\":\"\":\"fr\" }}\n            </p>\n        </ion-col>\n        <ion-col>\n            <img *ngIf=\"item.imagePath | async; let url\" [@simpleFadeAnimation]=\"'in'\" [src]=\"url\" alt=\"\" />\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"6\">\n            <ion-row class=\"ion-align-items-center\">\n                <h2>Anzahl: {{ item.amount }}x</h2>\n                <ion-fab-button class=\"menu-fab\" (click)=\"decreaseAmountByOne()\">\n                    <ion-icon name=\"remove-outline\"></ion-icon>\n                </ion-fab-button>\n                <ion-fab-button class=\"menu-fab\" (click)=\"increaseAmountByOne()\">\n                    <ion-icon name=\"add-outline\"></ion-icon>\n                </ion-fab-button>\n            </ion-row>\n        </ion-col>\n\n        <ion-col size=\"6\" class=\"menu-col button-col justify-content-end\">\n            <ion-button size=\"large\" (click)=\"addAllItemsToCart()\" [routerLink]=\"['/', 'cart']\">Zum Einkaufswagen\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</div>\n");

/***/ }),

/***/ "Mwua":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/reorder-beverages-modal/small-item-card/small-item-card.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"small-item-card\">\n    <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col>\n            <h3>{{ item.name }}</h3>\n        </ion-col>\n        <ion-col>\n            <ion-row class=\"ion-align-items-center align-right\">\n                <h3>Anzahl: {{ item.amount }}x</h3>\n\n                <ion-fab-button class=\"menu-fab\" (click)=\"decreaseAmountByOne()\">\n                    <ion-icon name=\"remove-outline\"></ion-icon>\n                </ion-fab-button>\n\n                <ion-fab-button class=\"menu-fab\" (click)=\"increaseAmountByOne()\">\n                    <ion-icon name=\"add-outline\"></ion-icon>\n                </ion-fab-button>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n</div>\n");

/***/ }),

/***/ "QMXD":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/offer-dessert-modal/offer-dessert-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" scroll-y=\"false\">\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" (click)=\"onClose()\">\n        <ion-icon name=\"close-outline\" id=\"close-icon\"></ion-icon>\n    </ion-fab>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <h1>Möchtet ihr noch einen Nachtisch?</h1>\n            </ion-col>\n        </ion-row>\n        <ion-slides #slides>\n            <ion-slide *ngFor=\"let item of loadedItems\">\n                <ion-row class=\"ion-justify-content-center\">\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <ion-icon name=\"chevron-back-outline\" (click)=\"slides.slidePrev()\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\">\n                        <app-item-container [item]=\"item\" (onItemChanged)=\"onItemChanged($event)\" (onAddToCart)=\"onAddToCart()\"></app-item-container>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <ion-icon name=\"chevron-forward-outline\" (click)=\"slides.slideNext()\"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-slide>\n        </ion-slides>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "T5mA":
/*!*************************************************************************************!*\
  !*** ./src/app/home/reorder-beverages-modal/reorder-beverages-modal.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 3rem;\n  margin-top: 0.95rem;\n  color: #555555;\n}\n\np {\n  margin: 15px;\n  margin-left: 5%;\n  margin-bottom: 0;\n  color: #555555;\n  font-size: 1.1rem;\n}\n\nion-list {\n  background-color: rgba(238, 238, 238, 0) !important;\n}\n\nhr {\n  background-color: #c5c5c5;\n  margin: 15px 5%;\n  margin-bottom: 2.5rem;\n}\n\nion-fab-button {\n  --border-radius: 20px 0 20px 0;\n  --background: white;\n  --color: rgb(255, 154, 117);\n  --box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n}\n\nion-fab-button ion-icon {\n  font-size: 1.5rem;\n}\n\nion-button {\n  --background: coral;\n  --color: rgb(255, 255, 255);\n  --border-radius: 100px;\n  border-radius: 10rem;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 1.5rem;\n}\n\nion-button.outline {\n  border: 3px solid coral;\n  --background: white;\n  --color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlb3JkZXItYmV2ZXJhZ2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFBSTtFQUNJLGlCQUFBO0FBRVI7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoicmVvcmRlci1iZXZlcmFnZXMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIG1hcmdpbi10b3A6IC45NXJlbTtcbiAgICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMCkgIWltcG9ydGFudDtcbn1cblxuaHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcbiAgICBtYXJnaW46IDE1cHggNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4IDAgMjBweCAwO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1jb2xvcjogcmdiKDI1NSwgMTU0LCAxMTcpO1xuICAgIC0tYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA4cHggMjRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBjb3JhbDtcbiAgICAtLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW1cbn1cblxuaW9uLWJ1dHRvbi5vdXRsaW5lIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjb3JhbDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6IGJsYWNrO1xufVxuIl19 */");

/***/ }),

/***/ "VPog":
/*!*************************************************************************************!*\
  !*** ./src/app/home/offer-dessert-modal/item-container/item-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemContainerComponent", function() { return ItemContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-container.component.html */ "LCwl");
/* harmony import */ var _item_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-container.component.scss */ "f6gp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");





let ItemContainerComponent = class ItemContainerComponent {
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() {
        //#endregion
        //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
        this.onItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.item.amount = 0;
    }
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    increaseAmountByOne() {
        if (this.item.amount < 25) {
            this.item.amount = this.item.amount + 1;
            this.onItemChanged.emit(this.item);
        }
    }
    // ----------------------------------------------------------------------------------------------
    decreaseAmountByOne() {
        if (this.item.amount > 1) {
            this.item.amount = this.item.amount - 1;
            this.onItemChanged.emit(this.item);
        }
    }
    // ----------------------------------------------------------------------------------------------
    addAllItemsToCart() {
        this.onAddToCart.emit();
    }
};
ItemContainerComponent.ctorParameters = () => [];
ItemContainerComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onItemChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onAddToCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ItemContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-container',
        template: _raw_loader_item_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('simpleFadeAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300)]),
            ]),
        ],
        styles: [_item_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemContainerComponent);



/***/ }),

/***/ "VfBZ":
/*!*********************************************************************!*\
  !*** ./src/app/home/send-pay-request/send-pay-request.component.ts ***!
  \*********************************************************************/
/*! exports provided: SendPayRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPayRequestComponent", function() { return SendPayRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_send_pay_request_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./send-pay-request.component.html */ "hMFV");
/* harmony import */ var _send_pay_request_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-pay-request.component.scss */ "23Kn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table.service */ "R02B");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "4USb");








let SendPayRequestComponent = class SendPayRequestComponent {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(tableService, modalCtrl, router) {
        this.tableService = tableService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.paysTogether = null;
        this.paysCache = null;
        this.lastCall = Number(localStorage.getItem('payCall'));
        this.timeout = 120000;
        this.ipAddress = localStorage.getItem('ipAddress');
        this.tableNumber = localStorage.getItem('tableNumber');
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onChangePaysTogether(selection) {
        this.paysTogether = selection;
    }
    // ----------------------------------------------------------------------------------------------
    onChangePaysCache(selection) {
        this.paysCache = selection;
    }
    // ----------------------------------------------------------------------------------------------
    onCall() {
        const paysCache = this.paysCache === 'true' ? true : false;
        const paysTogether = this.paysTogether === 'true' ? true : false;
        this.tableService.sendPayRequest(paysCache, paysTogether);
        this.onCallDegasoPay();
        this.modalCtrl.dismiss();
        this.openFeedbackPage();
    }
    onCallDegasoPay() {
        this.modalCtrl.dismiss();
        if (this.lastCall > Date.now() - this.timeout) {
            return;
        }
        localStorage.setItem('payCall', String(Date.now()));
        const additionalInfo = (this.paysTogether ? 'Zahlt zusammen &' : 'Zahlt getrennt &') + (this.paysCache ? ' Zahlt Bar' : ' Zahlt mit Karte');
        console.log(additionalInfo);
        const orderArray = [];
        const order = {
            name: 'Bezahlanfrage',
            price: '0',
            tax: '0',
            kitchenRelevant: true,
            active: true,
            combinationProduct: false,
            infoText: '',
            additionalInfo,
            customPrinterAddress: 'barPrinter',
            _id: 'pay',
            course: '0',
            brangToTable: false,
            identifyForList: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
            uniqueOrderArticleId: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
            combinableWith: [],
        };
        orderArray.push(order);
        const data = {
            table: this.tableNumber,
            articles: orderArray,
            employee: ''
        };
        fetch('http://' + this.ipAddress + ':3434/newOrder/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            // tslint:disable-next-line:no-shadowed-variable
            .then(data => {
            console.log('Success:', data);
            this.removeCall(data._id);
        });
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    openFeedbackPage() {
        setTimeout(() => {
            this.router.navigate(['/', 'feedback']);
        }, 6000);
    }
    // ----------------------------------------------------------------------------------------------
    removeCall(orderId) {
        const data = {
            _id: orderId,
            payed: true,
        };
        fetch('http://' + this.ipAddress + ':3434/deleteOrder/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => console.log(response.status))
            .catch((error) => {
            console.error('Error:', error);
        });
    }
};
SendPayRequestComponent.ctorParameters = () => [
    { type: _table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SendPayRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send-pay-request',
        template: _raw_loader_send_pay_request_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_send_pay_request_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SendPayRequestComponent);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"backgroundImage\" fullscreen class=\"ion-text-center\" no-scroll scrollY=\"false\" padding>\n    <!-- <img [src]=\"backgroundImage\" /> -->\n    <!-- <img src=\"../assets/images/32602469.jpg\" alt=\"\" /> -->\n    <img [src]=\"backgroundImage\" alt=\"\" />\n\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"openModal(adminModal)\">\n        <p>Tisch {{table.tableNumber}}</p>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button color=\"light\" (click)=\"openModal(wifiModal)\">\n            <ion-icon name=\"wifi-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <div class=\"vertical-align-content\">\n        <ion-grid class=\"myOverlay\">\n            <ion-row>\n                <ion-col>\n<!--                    <h1 (click)=\"openAdmin()\">{{table.welcomeMessage}}</h1>-->\n                    <ion-row>\n                        <ion-col *ngIf=\"restaurant\">\n                            <ion-button size=\"large\" color=\"light\" [routerLink]=\"['/','categories','categories-beverages', 'false', restaurant.mainCategory2]\">{{restaurant.mainCategory2 }}</ion-button>\n                            <ion-button size=\"large\" color=\"light\" [routerLink]=\"['/','categories','categories-food', 'true', restaurant.mainCategory1]\">{{restaurant.mainCategory1 }}</ion-button>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button size=\"large\" color=\"light\" *ngIf=\"table.ableToPay\" (click)=\"openModal(paymentModal)\">ZAHLEN</ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-fab class=\"text-fab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-button color=\"light\" (click)=\"openModal(serviceModal)\">\n            Service\n            <div class=\"space\"></div>\n\n            <ion-icon name=\"checkmark-done-outline\" *ngIf=\"table.serviceRequest\"></ion-icon>\n        </ion-button>\n    </ion-fab>\n    <ion-fab class=\"text-fab\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-button color=\"light\" [routerLink]=\"['/','cart']\">\n            Warenkorb\n        </ion-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _call_service_call_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./call-service/call-service.component */ "/4KO");
/* harmony import */ var _send_pay_request_send_pay_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-pay-request/send-pay-request.component */ "VfBZ");
/* harmony import */ var _reorder_beverages_modal_reorder_beverages_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reorder-beverages-modal/reorder-beverages-modal.component */ "Ijl4");
/* harmony import */ var _offer_dessert_modal_offer_dessert_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offer-dessert-modal/offer-dessert-modal.component */ "fO6s");
/* harmony import */ var _show_feedback_modal_show_feedback_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-feedback-modal/show-feedback-modal.component */ "kj6c");
/* harmony import */ var _reorder_beverages_modal_small_item_card_small_item_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reorder-beverages-modal/small-item-card/small-item-card.component */ "3wpj");
/* harmony import */ var _offer_dessert_modal_item_container_item_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offer-dessert-modal/item-container/item-container.component */ "VPog");
/* harmony import */ var _show_greetings_modal_show_greetings_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-greetings-modal/show-greetings-modal.component */ "5u2/");
/* harmony import */ var _wifi_modal_wifi_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wifi-modal/wifi-modal.component */ "2+6m");
















let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
            _call_service_call_service_component__WEBPACK_IMPORTED_MODULE_7__["CallServiceComponent"],
            _send_pay_request_send_pay_request_component__WEBPACK_IMPORTED_MODULE_8__["SendPayRequestComponent"],
            _reorder_beverages_modal_reorder_beverages_modal_component__WEBPACK_IMPORTED_MODULE_9__["ReorderBeveragesModalComponent"],
            _offer_dessert_modal_offer_dessert_modal_component__WEBPACK_IMPORTED_MODULE_10__["OfferDessertModalComponent"],
            _show_feedback_modal_show_feedback_modal_component__WEBPACK_IMPORTED_MODULE_11__["ShowFeedbackModalComponent"],
            _reorder_beverages_modal_small_item_card_small_item_card_component__WEBPACK_IMPORTED_MODULE_12__["SmallItemCardComponent"],
            _offer_dessert_modal_item_container_item_container_component__WEBPACK_IMPORTED_MODULE_13__["ItemContainerComponent"],
            _show_greetings_modal_show_greetings_modal_component__WEBPACK_IMPORTED_MODULE_14__["ShowGreetingsModalComponent"],
            _wifi_modal_wifi_modal_component__WEBPACK_IMPORTED_MODULE_15__["WifiModalComponent"],
        ],
    })
], HomePageModule);



/***/ }),

/***/ "em3S":
/*!*****************************************************************************!*\
  !*** ./src/app/home/offer-dessert-modal/offer-dessert-modal.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nion-grid {\n  height: 100%;\n  margin: 0;\n}\n\nion-content {\n  --background: white;\n  --color: rgb(63, 63, 63);\n}\n\nh1 {\n  text-align: center;\n  font-weight: 600;\n  letter-spacing: 2px;\n  margin-bottom: 1rem;\n}\n\n.icon-center {\n  align-self: center;\n}\n\nion-icon {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nion-list {\n  background: none !important;\n}\n\nion-slide {\n  width: 100%;\n}\n\nion-icon {\n  font-size: 2rem;\n  margin-right: 2rem;\n  margin-bottom: 0.3rem;\n  color: #383838 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29mZmVyLWRlc3NlcnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBRUEsd0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6Im9mZmVyLWRlc3NlcnQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWdyaWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRjk4NzI7XG4gICAgLS1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uaWNvbi1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gICAgY29sb3I6IHJnYig1NiwgNTYsIDU2KSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "f6gp":
/*!***************************************************************************************!*\
  !*** ./src/app/home/offer-dessert-modal/item-container/item-container.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-container {\n  background-color: #FF9872;\n  border-radius: 15px;\n  height: 100%;\n  color: white;\n  padding: 1rem;\n}\n\nion-grid {\n  width: 100%;\n}\n\nion-col {\n  width: 100%;\n}\n\nion-row {\n  width: 100%;\n}\n\np {\n  text-align: start;\n  font-size: 1.3rem;\n  letter-spacing: 1px;\n  margin-top: 1rem;\n}\n\n.detail {\n  font-weight: 700;\n}\n\n.price {\n  font-size: 1.1rem;\n}\n\nimg {\n  border-radius: 80px 20px 80px 80px;\n  height: 14rem;\n  width: 13rem;\n  object-fit: cover;\n  margin-bottom: 1.5rem;\n}\n\n.justify-content-end {\n  text-align: end;\n  padding: 0;\n}\n\nion-fab-button {\n  --background: white;\n  --box-shadow: none !important;\n  --color: rgb(59, 59, 59);\n  margin-left: 1.5rem;\n}\n\nion-icons {\n  padding: 0;\n}\n\nh2 {\n  margin: 0;\n  font-weight: 600;\n}\n\nion-button {\n  --border-radius: 5rem;\n  --background: white;\n  --color: rgb(59, 59, 59);\n  --box-shadow: none !important;\n  font-size: 1.2rem;\n}\n\n.space {\n  margin-top: 1.5rem;\n}\n\n.content-col {\n  width: 25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2l0ZW0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKIiwiZmlsZSI6Iml0ZW0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODcyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC8vIHdpZHRoOiAzcmVtO1xufVxuXG5pb24tZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb2wge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZGV0YWlsIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDgwcHggMjBweCA4MHB4IDgwcHg7XG4gICAgaGVpZ2h0OiAxNHJlbTtcbiAgICB3aWR0aDogMTNyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6IHJnYig1OSwgNTksIDU5KTtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuXG5pb24taWNvbnMge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uc3BhY2Uge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmNvbnRlbnQtY29sIHtcbiAgICB3aWR0aDogMjVyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: rgb(32, 32, 32);\n}\n\n.myOverlay {\n  width: 100%;\n  height: 3rem;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  color: #fff;\n  padding-top: 5rem;\n}\n\nh1 {\n  margin-top: 10px;\n  margin-bottom: 40px;\n  font-size: 4rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 0.3rem;\n  opacity: 0;\n}\n\nimg {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.vertical-align-content > * {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\nion-button {\n  width: 15rem;\n  margin: 20px 20px;\n  --border-radius: 100px;\n  --box-shadow: none;\n}\n\nion-fab-button {\n  margin: 1rem;\n  --box-shadow: none;\n}\n\np {\n  font-size: 1.2rem;\n  margin: 10px;\n  color: white;\n}\n\n.text-fab ion-button {\n  height: 3rem;\n  width: 8rem;\n}\n\n.text-fab ion-button .space {\n  width: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFHQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFFSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBTUE7RUFDSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUFMSjs7QUFTSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTlI7O0FBUVE7RUFDSSxVQUFBO0FBTloiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMzIsIDMyLCAzMik7XG59XG5cbi5teU92ZXJsYXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG59XG5cbmgxIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBcIlBsYXlGYWlyXCI7XG4gICAgLy8gZm9udC1mYW1pbHk6IFwiQmlydGhzdG9uZVwiO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmltZyB7XG4gICAgLy8gZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcyg4MCUpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50Pioge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1mYWIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAvLyB3aWR0aDogaW5pdGlhbDtcbiAgICAgICAgLnNwYWNlIHtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "fO6s":
/*!***************************************************************************!*\
  !*** ./src/app/home/offer-dessert-modal/offer-dessert-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: OfferDessertModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferDessertModalComponent", function() { return OfferDessertModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offer_dessert_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offer-dessert-modal.component.html */ "QMXD");
/* harmony import */ var _offer_dessert_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer-dessert-modal.component.scss */ "em3S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cart/cart.service */ "Nagw");
/* harmony import */ var src_app_items_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/items/item.service */ "C26z");








let OfferDessertModalComponent = class OfferDessertModalComponent {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(itemService, afStorage, cartService, modalCtrl) {
        this.itemService = itemService;
        this.afStorage = afStorage;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.isLoading = false;
        this.dessertId = 'GC9gmeU4dvQJUy4Wwy8A';
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.fetchDessertItems();
    }
    // ----------------------------------------------------------------------------------------------
    ngOnDestroy() {
        this.itemSub.unsubscribe();
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onClose() {
        this.modalCtrl.dismiss();
    }
    // ----------------------------------------------------------------------------------------------
    swipeNext() {
        console.log('pressed');
        this.slides.slideNext();
    }
    // ----------------------------------------------------------------------------------------------
    onItemChanged(event) {
        console.log(event.amount);
    }
    // ----------------------------------------------------------------------------------------------
    onAddToCart() {
        for (const item of this.loadedItems) {
            if (item.amount > 0) {
                console.log(item);
                this.cartService.addItemToCart(item);
                this.modalCtrl.dismiss();
            }
        }
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    fetchDessertItems() {
        this.isLoading = true;
        this.itemSub = this.itemService
            .getItems(this.dessertId, 'true')
            .subscribe((items) => {
            this.loadedItems = [];
            for (const currentItem of items) {
                const imagePath = this.afStorage
                    .ref(currentItem.imagePath)
                    .getDownloadURL();
                const fetchedItem = {
                    name: currentItem.name,
                    description: currentItem.description,
                    price: currentItem.price,
                    imagePath,
                    imageRef: currentItem.imagePath,
                    isVisible: currentItem.isVisible,
                    kitchenRelevant: currentItem.isFood,
                    _id: currentItem.id,
                    category: currentItem.category
                };
                if (fetchedItem.isVisible) {
                    this.loadedItems.push(fetchedItem);
                }
                this.isLoading = false;
            }
        });
    }
};
OfferDessertModalComponent.ctorParameters = () => [
    { type: src_app_items_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
OfferDessertModalComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mySlider', { static: true },] }]
};
OfferDessertModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-offer-dessert-modal',
        template: _raw_loader_offer_dessert_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offer_dessert_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OfferDessertModalComponent);



/***/ }),

/***/ "hFmm":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/show-greetings-modal/show-greetings-modal.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" (click)=\"onClose()\">\n        <ion-icon name=\"close-outline\" id=\"close-icon\"></ion-icon>\n    </ion-fab>\n\n    <ion-grid>\n        <div class=\"container\">\n            <ion-row>\n                <ion-col size=\"7\" class=\"content-col\">\n                    <h2>\n                        Wir wünschen euch <br /> einen Guten Appettit!\n                    </h2>\n                    <p>\n                        Bei Fragen oder Wünschen <br /> informieren Sie einfach <br /> unser Team\n                    </p>\n                    <ion-button (click)=\"onCallService()\"> Bedienung Rufen </ion-button>\n                </ion-col>\n                <ion-col>\n                    <img src=\"/assets/images/team.jpg\" alt=\"\" />\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "hMFV":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/send-pay-request/send-pay-request.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-row>\n        <ion-col>\n            <ion-button size=\"large\" [ngClass]=\"{ selected: paysTogether === 'true' }\" (click)=\"onChangePaysTogether('true')\">Zusammen</ion-button>\n        </ion-col>\n        <ion-col>\n            <ion-button size=\"large\" [ngClass]=\"{ selected: paysTogether === 'false' }\" (click)=\"onChangePaysTogether('false')\">Getrennt</ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-button size=\"large\" [ngClass]=\"{ selected: paysCache === 'true' }\" (click)=\"onChangePaysCache('true')\">Bar</ion-button>\n        </ion-col>\n        <ion-col>\n            <ion-button size=\"large\" [ngClass]=\"{ selected: paysCache === 'false' }\" (click)=\"onChangePaysCache('false')\">Karte</ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-button size=\"large\" class=\"submit\" (click)=\"onCall()\">Bedienung zum Zahlen rufen</ion-button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n<!-- [disabled]=\"paysTogether === null || paysCache === null\" -->\n");

/***/ }),

/***/ "hXW9":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/wifi-modal/wifi-modal.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"qrCodeImage\" class=\"wifi-modal\">\n    <ion-row class=\"center-horizontal\">\n        <ion-col>\n            <div class=\"wifi-qr-code\">\n                <img [src]=\"qrCodeImage\" alt=\"\" />\n            </div>\n            <ion-row class=\"space-between\">\n                <p>Name:</p>\n                <p>{{ restaurant.wifiName }}</p>\n            </ion-row>\n            <ion-row class=\"space-between\">\n                <p>Passwort:</p>\n                <p>{{ restaurant.wifiPassword }}</p>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n</div>\n");

/***/ }),

/***/ "kj6c":
/*!***************************************************************************!*\
  !*** ./src/app/home/show-feedback-modal/show-feedback-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShowFeedbackModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFeedbackModalComponent", function() { return ShowFeedbackModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_feedback_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-feedback-modal.component.html */ "0lSI");
/* harmony import */ var _show_feedback_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-feedback-modal.component.scss */ "oYwk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ShowFeedbackModalComponent = class ShowFeedbackModalComponent {
    //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() { }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() { }
};
ShowFeedbackModalComponent.ctorParameters = () => [];
ShowFeedbackModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-feedback-modal',
        template: _raw_loader_show_feedback_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_feedback_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShowFeedbackModalComponent);



/***/ }),

/***/ "oYwk":
/*!*****************************************************************************!*\
  !*** ./src/app/home/show-feedback-modal/show-feedback-modal.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-content {\n  --background: coral;\n  --color: white;\n}\n\nion-grid {\n  margin: 1rem;\n}\n\nh2 {\n  letter-spacing: 2px;\n  font-weight: 600;\n  font-size: 1.8rem;\n}\n\np {\n  font-size: 1.3rem;\n  margin-top: 0.5rem;\n  margin-bottom: 2rem;\n}\n\n.detail {\n  font-size: 1rem;\n  margin-bottom: 0;\n}\n\nion-row {\n  text-align: center;\n}\n\nimg {\n  border-radius: 15px;\n  width: 15rem;\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Nob3ctZmVlZGJhY2stbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic2hvdy1mZWVkYmFjay1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBjb3JhbDtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWdyaWQge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuaDIge1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5kZXRhaWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tcm93IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgaGVpZ2h0OiAxNXJlbTtcbn1cblxuLnRleHQtYWxpZ24tc3RhcnQge31cbiJdfQ== */");

/***/ }),

/***/ "sGXt":
/*!********************************************!*\
  !*** ./src/app/home/restaurant.service.ts ***!
  \********************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let RestaurantService = class RestaurantService {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(afs) {
        this.afs = afs;
        this.userEmail = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user')).email
            : null;
        this.path = this.afs.collection('restaurants').doc(this.userEmail);
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    getRestaurantData() {
        this.restaurant = this.path.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((a) => {
            const data = a.payload.data();
            data.id = a.payload.id;
            console.log(data);
            return data;
        }));
        return this.restaurant;
    }
};
RestaurantService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RestaurantService);



/***/ }),

/***/ "xOn4":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/call-service/call-service.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button size=\"large\" (click)=\"onCallDegasoService()\">\n  <p>{{ message }}</p>\n</ion-button>\n\n<!--<div class=\"service-modal centered-vertical\">-->\n<!--    <ion-row>-->\n<!--        <ion-col size=\"6\">-->\n<!--            <ion-button *ngIf=\"message1\" [ngClass]=\"{ half: !!message3 }\" size=\"large\" (click)=\"onCallService(message1)\">-->\n<!--                {{ message1 }}-->\n<!--            </ion-button>-->\n<!--            <ion-button *ngIf=\"message3\" class=\"half\" size=\"large\" (click)=\"onCallService(message3)\">-->\n<!--                {{ message3 }}-->\n<!--            </ion-button>-->\n<!--        </ion-col>-->\n<!--        <ion-col size=\"6\">-->\n<!--            <ion-button *ngIf=\"message2\" [ngClass]=\"{ half: !!message4 }\" size=\"large\" (click)=\"onCallService(message2)\">-->\n<!--                {{ message2 }}-->\n<!--            </ion-button>-->\n<!--            <ion-button *ngIf=\"message4\" class=\"half\" size=\"large\" (click)=\"onCallService(message4)\">-->\n<!--                {{ message4 }}-->\n<!--            </ion-button>-->\n<!--        </ion-col>-->\n<!--    </ion-row>-->\n<!--</div>-->\n\n<!--<ion-fab slot=\"fixed\">-->\n<!--    <ion-fab-button>-->\n<!--        <ion-icon name=\"close-outline\" size=\"large\" (click)=\"onClose()\"></ion-icon>-->\n<!--    </ion-fab-button>-->\n<!--</ion-fab>-->\n");

/***/ }),

/***/ "xoWC":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/reorder-beverages-modal/reorder-beverages-modal.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reorder-beverages\">\n    <ion-row>\n        <ion-col>\n            <h1>Dürfen wir Ihnen noch etwas zu trinken bringen?</h1>\n\n            <p>Ihre bisherigen Getränke nachbestellen?</p>\n\n            <ion-list *ngFor=\"let item of orderedBeverages\">\n                <app-small-item-card [item]=\"item\" (onItemChanged)=\"onItemChanged($event)\"></app-small-item-card>\n            </ion-list>\n\n            <!-- <hr /> -->\n\n            <ion-button size=\"large\" class=\"outline\" [routerLink]=\"['/', 'categories', 'categories-beverages', 'false']\" (click)=\"onOpenAllBeverages()\">\n                Alle Getränke Anzeigen\n            </ion-button>\n\n            <ion-button size=\"large\" expand=\"block\" (click)=\"addBeveragesToCart()\">\n                Ausgewählte Getränke in den Einkaufswagen\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</div>\n\n<ion-fab slot=\"fixed\">\n    <ion-fab-button>\n        <ion-icon name=\"close-outline\" size=\"large\" (click)=\"onClose()\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n");

/***/ }),

/***/ "yGh3":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/reorder-beverages-modal/small-item-card/small-item-card.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin-right: 20px;\n}\n\n.small-item-card {\n  background-color: white;\n  margin: 15px;\n  border-radius: 15px;\n  padding: 0px 15px;\n}\n\nion-fab-button {\n  --box-shadow: none;\n  margin: 5px 10px;\n}\n\n.align-right {\n  justify-content: end;\n  justify-items: flex-end;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NtYWxsLWl0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJzbWFsbC1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc21hbGwtaXRlbS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDVweCAxMHB4O1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/admin-login/admin-login.component */ "Iyt7");
/* harmony import */ var _call_service_call_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./call-service/call-service.component */ "/4KO");
/* harmony import */ var _offer_dessert_modal_offer_dessert_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offer-dessert-modal/offer-dessert-modal.component */ "fO6s");
/* harmony import */ var _reorder_beverages_modal_reorder_beverages_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reorder-beverages-modal/reorder-beverages-modal.component */ "Ijl4");
/* harmony import */ var _restaurant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant.service */ "sGXt");
/* harmony import */ var _send_pay_request_send_pay_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./send-pay-request/send-pay-request.component */ "VfBZ");
/* harmony import */ var _show_greetings_modal_show_greetings_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-greetings-modal/show-greetings-modal.component */ "5u2/");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./table.service */ "R02B");
/* harmony import */ var _wifi_modal_wifi_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wifi-modal/wifi-modal.component */ "2+6m");















let HomePage = class HomePage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(tableService, restaurantService, storage, modalCtrl, navCtrl) {
        this.tableService = tableService;
        this.restaurantService = restaurantService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.adminModal = {
            component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__["AdminLoginComponent"],
            style: 'admin-login-css',
        };
        this.wifiModal = {
            component: _wifi_modal_wifi_modal_component__WEBPACK_IMPORTED_MODULE_14__["WifiModalComponent"],
            style: 'wifi-modal-css',
        };
        this.paymentModal = {
            component: _send_pay_request_send_pay_request_component__WEBPACK_IMPORTED_MODULE_11__["SendPayRequestComponent"],
            style: 'send-pay-request-css',
        };
        this.serviceModal = {
            component: _call_service_call_service_component__WEBPACK_IMPORTED_MODULE_7__["CallServiceComponent"],
            style: 'confirm-css',
        };
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadRestaurant();
            this.loadTable();
        });
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openModal(modal) {
        var _a;
        this.modalCtrl.create({
            component: modal.component,
            cssClass: modal.style,
            mode: (_a = modal.mode) !== null && _a !== void 0 ? _a : 'md',
        }).then((modalEl) => {
            modalEl.present().then();
        });
    }
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    loadTable() {
        this.tableService.getTableData().subscribe((table) => {
            this.tableService.checkResetRequest(table);
            this.tableService.checkPayRequest(table);
            this.tableService.checkTableReservation(table);
            this.table = table;
            // this.checkMessageAction(this.table.message);
        });
    }
    // ----------------------------------------------------------------------------------------------
    loadRestaurant() {
        this.restaurantService.getRestaurantData().subscribe((restaurant) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.backgroundImage = yield this.storage
                .ref(restaurant.imagePath)
                .getDownloadURL()
                .toPromise();
            this.restaurant = restaurant;
            localStorage.setItem('restaurant', JSON.stringify(restaurant));
        }));
    }
    // ----------------------------------------------------------------------------------------------
    checkMessageAction(message) {
        if (message === 'reorderBeverages' ||
            message === 'offerDessert' ||
            // message === 'showFeedback' ||
            message === 'showGreetings') {
            this.modalCtrl
                .create({
                component: message === 'reorderBeverages'
                    ? _reorder_beverages_modal_reorder_beverages_modal_component__WEBPACK_IMPORTED_MODULE_9__["ReorderBeveragesModalComponent"]
                    : message === 'offerDessert'
                        ? _offer_dessert_modal_offer_dessert_modal_component__WEBPACK_IMPORTED_MODULE_8__["OfferDessertModalComponent"]
                        // : message === 'showFeedback'
                        // ? ShowFeedbackModalComponent
                        : message === 'showGreetings'
                            ? _show_greetings_modal_show_greetings_modal_component__WEBPACK_IMPORTED_MODULE_12__["ShowGreetingsModalComponent"]
                            : null,
                cssClass: 'reorderBeverages'
                    ? 'reorder-beverages-modal-css'
                    : undefined,
            })
                .then((modalEl) => {
                modalEl.present().then();
            });
            this.tableService.updateTableMessage();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _table_service__WEBPACK_IMPORTED_MODULE_13__["TableService"] },
    { type: _restaurant_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map