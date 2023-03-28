(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation-page-reservation-page-module"],{

/***/ "E4JF":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/reservation-page/reservation-page.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scroll-y=\"false\" (click)=\"onActivate()\">\n    <div class=\"container\">\n        <img class=\"background-img\" src=\"/assets/images/chris-liverani-oCsaxvGCehM-unsplash.jpg\" />\n        <div class=\"centered\">\n            <h2>Tisch {{tableNumber}}</h2>\n            <h1>Reserviert</h1>\n            <h2 *ngIf=\"reservationTimestamp\" class=\"align-right\">\n                Ab {{reservationTimestamp | date:'HH:mm'}}\n            </h2>\n        </div>\n        <div class=\"bottom blink_me\">\n            <p>Bildschirm berühren um zu Starten</p>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "IeLm":
/*!******************************************************************!*\
  !*** ./src/app/home/reservation-page/reservation-page.module.ts ***!
  \******************************************************************/
/*! exports provided: ReservationPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPagePageModule", function() { return ReservationPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reservation_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation-page-routing.module */ "JrQT");
/* harmony import */ var _reservation_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservation-page.page */ "tkvt");







let ReservationPagePageModule = class ReservationPagePageModule {
};
ReservationPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reservation_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservationPagePageRoutingModule"]
        ],
        declarations: [_reservation_page_page__WEBPACK_IMPORTED_MODULE_6__["ReservationPagePage"]]
    })
], ReservationPagePageModule);



/***/ }),

/***/ "JrQT":
/*!**************************************************************************!*\
  !*** ./src/app/home/reservation-page/reservation-page-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ReservationPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPagePageRoutingModule", function() { return ReservationPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reservation_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-page.page */ "tkvt");




const routes = [
    {
        path: '',
        component: _reservation_page_page__WEBPACK_IMPORTED_MODULE_3__["ReservationPagePage"]
    }
];
let ReservationPagePageRoutingModule = class ReservationPagePageRoutingModule {
};
ReservationPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservationPagePageRoutingModule);



/***/ }),

/***/ "hN7A":
/*!******************************************************************!*\
  !*** ./src/app/home/reservation-page/reservation-page.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nion-content {\n  --background: rgb(48, 48, 48);\n}\n\n.background-img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  filter: brightness(60%) blur(6px);\n}\n\n.container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  color: white;\n  background-color: #3d3d3d;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.centered h1 {\n  font-size: 7rem;\n  font-weight: 700;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n\n.centered h2 {\n  font-size: 3rem;\n  font-weight: 400;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  margin-bottom: 0.4rem;\n  text-align: start;\n}\n\n.centered .align-right {\n  text-align: end;\n}\n\n.bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 1rem;\n  text-align: center;\n}\n\n.bottom p {\n  font-size: 1.6rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 0.4rem;\n  text-align: center;\n  animation: pulse 2s infinite;\n}\n\n.blink_me {\n  animation: blinker 3s ease-in infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc2VydmF0aW9uLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRVI7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUNJO0VBQ0ksZUFBQTtBQUNSOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUNSOztBQUdBO0VBQ0ksc0NBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksVUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoicmVzZXJ2YXRpb24tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDQ4LCA0OCwgNDgpO1xufVxuXG4uYmFja2dyb3VuZC1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKSBibHVyKDZweCk7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XG59XG5cbi5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gICAgLmFsaWduLXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbn1cblxuLmJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICB9XG59XG5cbi5ibGlua19tZSB7XG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "tkvt":
/*!****************************************************************!*\
  !*** ./src/app/home/reservation-page/reservation-page.page.ts ***!
  \****************************************************************/
/*! exports provided: ReservationPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPagePage", function() { return ReservationPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reservation_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reservation-page.page.html */ "E4JF");
/* harmony import */ var _reservation_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-page.page.scss */ "hN7A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table.service */ "R02B");







let ReservationPagePage = class ReservationPagePage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(router, navCtrl, tableService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.tableService = tableService;
        this.tableNumber = localStorage.getItem('tableNumber');
        this.reservationTimestamp = null;
        if (router.getCurrentNavigation().extras.state) {
            const table = this.router.getCurrentNavigation().extras.state;
            console.log(table);
            this.reservationTimestamp = table.reservationTimestamp;
        }
    }
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
    onActivate() {
        this.navCtrl.navigateForward('home');
        this.tableService.dismissReservation();
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    fetchTableDataFromFireStore() {
        this.tableSub = this.tableService.getTableData();
        this.tableSub.subscribe((doc) => {
            this.table = doc;
            this.reservationTimestamp = doc.reservationTimestamp;
        });
    }
};
ReservationPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"] }
];
ReservationPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reservation-page',
        template: _raw_loader_reservation_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reservation_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReservationPagePage);



/***/ })

}]);
//# sourceMappingURL=reservation-page-reservation-page-module.js.map