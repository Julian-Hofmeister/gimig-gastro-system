(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ "yin/");




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ "WRY0":
/*!********************************************************************************!*\
  !*** ./src/app/admin/table-number-setting/table-number-setting.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  text-align: center;\n  height: 100%;\n}\n\nh2 {\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n}\n\nion-button {\n  width: 15rem;\n  margin: 20px 20px;\n  --border-radius: 100px;\n  --box-shadow: none;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  --background: coral;\n}\n\nion-range {\n  --bar-background: rgba(255, 127, 80, 0.295);\n  --bar-background-active: coral;\n  --pin-background: coral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYmxlLW51bWJlci1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJ0YWJsZS1udW1iZXItc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgyIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAtLWJhY2tncm91bmQ6IGNvcmFsO1xufVxuXG5pb24tcmFuZ2Uge1xuICAgIC0tYmFyLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMjcsIDgwLCAwLjI5NSk7XG4gICAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6IGNvcmFsO1xuICAgIC0tcGluLWJhY2tncm91bmQ6IGNvcmFsO1xufVxuIl19 */");

/***/ }),

/***/ "ayKV":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/logout-setting/logout-setting.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <h2>Abmelden</h2>\n                <p>Sind sie sicher, dass sie sich abmelden möchten?</p>\n                <ion-button (click)=\"onLogout()\"> Abmelden </ion-button>\n                <ion-button fill=\"outline\" class=\"btn-outline\" (click)=\"onDismiss()\">\n                    Abbrechen\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "gCHU":
/*!******************************************************************************!*\
  !*** ./src/app/admin/table-number-setting/table-number-setting.component.ts ***!
  \******************************************************************************/
/*! exports provided: TableNumberSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableNumberSettingComponent", function() { return TableNumberSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_number_setting_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-number-setting.component.html */ "uMW2");
/* harmony import */ var _table_number_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-number-setting.component.scss */ "WRY0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_home_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home/table.service */ "R02B");






let TableNumberSettingComponent = class TableNumberSettingComponent {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl, tableService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.tableService = tableService;
        this.navCtrl = navCtrl;
        this.tableNumber = 1;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    setTablenumber() {
        localStorage.setItem('tableNumber', this.tableNumber.toString());
        console.log('TABLENUMBER ' + localStorage.getItem('tableNumber'));
        this.modalCtrl.dismiss();
        this.tableService.setTableData(this.tableNumber.toString());
    }
};
TableNumberSettingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_home_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
TableNumberSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-table-number-setting',
        template: _raw_loader_table_number_setting_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_table_number_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TableNumberSettingComponent);



/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "yin/");
/* harmony import */ var _table_number_setting_table_number_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-number-setting/table-number-setting.component */ "gCHU");
/* harmony import */ var _logout_setting_logout_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout-setting/logout-setting.component */ "ufyB");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "Iyt7");
/* harmony import */ var _table_number_panel_table_number_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-number-panel/table-number-panel.component */ "Ksxh");











let AdminPageModule = class AdminPageModule {
};
AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"]],
        declarations: [
            _admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"],
            _table_number_setting_table_number_setting_component__WEBPACK_IMPORTED_MODULE_7__["TableNumberSettingComponent"],
            _logout_setting_logout_setting_component__WEBPACK_IMPORTED_MODULE_8__["LogoutSettingComponent"],
            _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"],
            _table_number_panel_table_number_panel_component__WEBPACK_IMPORTED_MODULE_10__["TableNumberPanelComponent"],
        ],
    })
], AdminPageModule);



/***/ }),

/***/ "lbtN":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button color=\"light\" (click)=\"closeSettings()\">\n            <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"8\" offset=\"2\">\n                <h2>Einstellungen</h2>\n                <ion-list>\n                    <ion-item (click)=\"openTableNumberModal()\">\n                        <ion-label>Tischnummer</ion-label>\n                        <ion-icon name=\"bookmark-outline\"></ion-icon>\n                    </ion-item>\n<!--                    <ion-item>-->\n<!--                        <ion-label>Akzentfarbe</ion-label>-->\n<!--                        <ion-icon name=\"color-palette-outline\"></ion-icon>-->\n<!--                    </ion-item>-->\n<!--                    <ion-item>-->\n<!--                        <ion-label>Layout</ion-label>-->\n<!--                        <ion-icon name=\"layers-outline\"></ion-icon>-->\n<!--                    </ion-item>-->\n                    <ion-item>\n                        <ion-label (click)=\"openLogoutConfirmationModal()\">Abmelden</ion-label>\n                        <ion-icon name=\"log-out-outline\"></ion-icon>\n                    </ion-item>\n<!--                    <ion-item>-->\n<!--                        <ion-label (click)=\"exitKioskMode()\">Applikation verlassen</ion-label>-->\n<!--                        <ion-icon name=\"log-out-outline\"></ion-icon>-->\n<!--                    </ion-item>-->\n                  <ion-item >\n                    <ion-label >IP Adresse: </ion-label>\n                    <ion-input (ionBlur)=\"onSaveIpAddress()\" [(ngModel)]=\"ipAddress\"></ion-input>\n                    <ion-icon name=\"code-slash-outline\"></ion-icon>\n                  </ion-item>\n<!--                  <ion-item>-->\n<!--                    <ion-label (click)=\"onSaveIpAddress()\">IP Adresse Speichern</ion-label>-->\n<!--                    <ion-icon name=\"save\"></ion-icon>-->\n\n<!--                  </ion-item>-->\n\n                  <ion-item>\n                    <ion-label (click)=\"enableEditMode()\">Bearbeitungsmodus</ion-label>\n                    <ion-icon name=\"log-out-outline\"></ion-icon>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "m2lL":
/*!********************************************************************!*\
  !*** ./src/app/admin/logout-setting/logout-setting.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n}\n\nion-col {\n  justify-content: center;\n  text-align: center;\n}\n\np {\n  margin-bottom: 3rem;\n}\n\nion-button {\n  width: 15rem;\n  margin: 20px 20px;\n  --border-radius: 100px;\n  --box-shadow: none;\n  --background: coral;\n}\n\n.btn-outline {\n  --background: none;\n  --border-color: coral;\n  --color: rgb(34, 34, 34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ291dC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUFKIiwiZmlsZSI6ImxvZ291dC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNvbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6IGNvcmFsO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWJvcmRlci1jb2xvcjogY29yYWw7XG4gICAgLS1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xufVxuIl19 */");

/***/ }),

/***/ "seDJ":
/*!***************************************!*\
  !*** ./src/app/admin/edit.service.ts ***!
  \***************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EditService = class EditService {
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() {
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.editMode = false;
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    enableEditMode() {
        this.editMode = true;
    }
    // ----------------------------------------------------------------------------------------------
    disableEditMode() {
        this.editMode = false;
    }
    // ----------------------------------------------------------------------------------------------
    getEditModeStatus() {
        return this.editMode;
    }
};
EditService.ctorParameters = () => [];
EditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditService);



/***/ }),

/***/ "uMW2":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/table-number-setting/table-number-setting.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <h2>Tischnummer {{ tableNumber }}</h2>\n                <ion-range min=\"1\" max=\"30\" step=\"1\" pin snaps=\"true\" [(ngModel)]=\"tableNumber\">\n                    <ion-label slot=\"start\">1</ion-label>\n                    <ion-label slot=\"end\">30</ion-label>\n                </ion-range>\n                <ion-button (click)=\"setTablenumber()\">\n                    Tischnummer speichern\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "ufyB":
/*!******************************************************************!*\
  !*** ./src/app/admin/logout-setting/logout-setting.component.ts ***!
  \******************************************************************/
/*! exports provided: LogoutSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutSettingComponent", function() { return LogoutSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logout_setting_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout-setting.component.html */ "ayKV");
/* harmony import */ var _logout_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout-setting.component.scss */ "m2lL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/auth.service */ "W4xs");






let LogoutSettingComponent = class LogoutSettingComponent {
    //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl, authService) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onLogout() {
        console.log('LOGGING OUT...');
        this.authService.logout();
        this.onDismiss();
    }
    // ----------------------------------------------------------------------------------------------
    onDismiss() {
        this.modalCtrl.dismiss();
    }
};
LogoutSettingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LogoutSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout-setting',
        template: _raw_loader_logout_setting_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogoutSettingComponent);



/***/ }),

/***/ "x35V":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  text-align: center;\n  margin-top: 2rem;\n}\n\nion-item {\n  margin-top: 1.2rem;\n}\n\nion-fab-button {\n  margin: 20px;\n  --box-shadow: none;\n  --background: white;\n}\n\nion-icon {\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtXG59XG5cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xufSJdfQ== */");

/***/ }),

/***/ "yin/":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.page.html */ "lbtN");
/* harmony import */ var _admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.page.scss */ "x35V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _logout_setting_logout_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout-setting/logout-setting.component */ "ufyB");
/* harmony import */ var _table_number_panel_table_number_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-number-panel/table-number-panel.component */ "Ksxh");
/* harmony import */ var _edit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit.service */ "seDJ");









// declare let KioskPlugin: any;
let AdminPage = class AdminPage {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl, router, toastController, alertController, editService) {
        var _a;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.editService = editService;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.ipAddress = (_a = localStorage.getItem('ipAddress')) !== null && _a !== void 0 ? _a : '';
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openTableNumberModal() {
        this.modalCtrl
            .create({
            component: _table_number_panel_table_number_panel_component__WEBPACK_IMPORTED_MODULE_7__["TableNumberPanelComponent"],
            cssClass: 'table-number-panel-css',
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
    // ----------------------------------------------------------------------------------------------
    openLogoutConfirmationModal() {
        this.modalCtrl
            .create({
            component: _logout_setting_logout_setting_component__WEBPACK_IMPORTED_MODULE_6__["LogoutSettingComponent"],
            cssClass: 'logout-confirm-css',
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
    // ----------------------------------------------------------------------------------------------
    closeSettings() {
        this.router.navigate(['/', 'home']);
    }
    // ----------------------------------------------------------------------------------------------
    enableEditMode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Bearbeitungsmodus',
                message: 'Im bearbeitungsmodus können Sie durch langes klicken auf eine Kategorie oder ein Gericht/Getränk ein passendes Bild hochladen.',
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                    },
                    {
                        text: 'Aktivieren',
                        role: 'confirm',
                        handler: () => {
                            this.closeSettings();
                            this.editService.enableEditMode();
                        },
                    }
                ],
            });
            yield alert.present();
        });
    }
    // ----------------------------------------------------------------------------------------------
    onSaveIpAddress() {
        localStorage.setItem('ipAddress', this.ipAddress);
        this.presentToast('Ip Adresse gespeichert!').then();
    }
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1500,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
};
AdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _edit_service__WEBPACK_IMPORTED_MODULE_8__["EditService"] }
];
AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map