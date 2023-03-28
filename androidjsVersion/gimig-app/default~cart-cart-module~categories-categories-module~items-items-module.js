(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~categories-categories-module~items-items-module"],{

/***/ "BArq":
/*!********************************************************************!*\
  !*** ./src/app/elements/side-navigation/side-navigation.module.ts ***!
  \********************************************************************/
/*! exports provided: SideNavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationModule", function() { return SideNavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _side_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-navigation.component */ "X0mZ");





let SideNavigationModule = class SideNavigationModule {
};
SideNavigationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
        exports: [_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"]],
    })
], SideNavigationModule);



/***/ }),

/***/ "WiGH":
/*!***************************************************************************!*\
  !*** ./src/app/elements/background-layout/background-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: BackgroundLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundLayoutComponent", function() { return BackgroundLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_background_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./background-layout.component.html */ "eTCa");
/* harmony import */ var _background_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-layout.component.scss */ "zVCU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BackgroundLayoutComponent = class BackgroundLayoutComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() {
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.color = localStorage.getItem('theme');
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
};
BackgroundLayoutComponent.ctorParameters = () => [];
BackgroundLayoutComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BackgroundLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-background-layout',
        template: _raw_loader_background_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_background_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BackgroundLayoutComponent);



/***/ }),

/***/ "X0mZ":
/*!***********************************************************************!*\
  !*** ./src/app/elements/side-navigation/side-navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_side_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./side-navigation.component.html */ "vb6J");
/* harmony import */ var _side_navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-navigation.component.scss */ "qhvb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let SideNavigationComponent = class SideNavigationComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
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
        this.restaurant = JSON.parse(localStorage.getItem('restaurant'));
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
        this.navCtrl.navigateForward('categories/categories-food/true/' + this.restaurant.mainCategory1);
    }
    // ----------------------------------------------------------------------------------------------
    onNavigateBeverages() {
        this.navCtrl.navigateForward('categories/categories-beverages/false/' + this.restaurant.mainCategory2);
    }
};
SideNavigationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
SideNavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-side-navigation',
        template: _raw_loader_side_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_side_navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SideNavigationComponent);



/***/ }),

/***/ "eTCa":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/background-layout/background-layout.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-layout\" [ngClass]=\"{ cartClass: isCart }\" [ngStyle]=\"{ 'background-color': isCart ? '#759EFF' : color }\">\n    <div class=\"container\">\n        <h1 class=\"upright-text\">{{ title }}</h1>\n    </div>\n</div>\n");

/***/ }),

/***/ "qhvb":
/*!*************************************************************************!*\
  !*** ./src/app/elements/side-navigation/side-navigation.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-nav {\n  position: fixed;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n}\n\nion-fab-button {\n  margin: 20px;\n  --box-shadow: none;\n  --background: white;\n}\n\nion-icon {\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJzaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "vb6J":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/side-navigation/side-navigation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-nav\">\n    <div class=\"col\">\n        <ion-fab-button (click)=\"onNavigateBack()\">\n            <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </ion-fab-button>\n    </div>\n\n    <div class=\"col\">\n        <ion-fab-button (click)=\"onNavigateBeverages()\">\n            <ion-icon [name]=\"restaurant.mainIcon2 ? restaurant.mainIcon2 : 'wine-outline'\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"onNavigateFood()\">\n            <!-- <ion-icon name=\"restaurant-outline\"></ion-icon> -->\n            <ion-icon [name]=\"restaurant.mainIcon1 ? restaurant.mainIcon1 : 'restaurant-outline'\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"onNavigateHome()\">\n            <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"onNavigateCart()\">\n            <ion-icon name=\"cart-outline\"></ion-icon>\n        </ion-fab-button>\n    </div>\n</div>\n");

/***/ }),

/***/ "w4hX":
/*!************************************************************************!*\
  !*** ./src/app/elements/background-layout/background-layout.module.ts ***!
  \************************************************************************/
/*! exports provided: BackgroundLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundLayoutModule", function() { return BackgroundLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _background_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-layout.component */ "WiGH");




let BackgroundLayoutModule = class BackgroundLayoutModule {
};
BackgroundLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_background_layout_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundLayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_background_layout_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundLayoutComponent"]],
    })
], BackgroundLayoutModule);



/***/ }),

/***/ "zVCU":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/background-layout/background-layout.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-layout {\n  background-color: #836b58;\n  position: fixed;\n  right: 0;\n  height: 100%;\n}\n\n.cartClass {\n  background-color: #759eff;\n}\n\n.container {\n  width: 5rem;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n\n.upright-text {\n  font-family: \"Lato\";\n  font-size: 1.8rem;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: white;\n  writing-mode: tb-rl;\n  transform: rotate(-180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhY2tncm91bmQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSwwQkFBQTtBQURKIiwiZmlsZSI6ImJhY2tncm91bmQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtbGF5b3V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAxMDcsIDg4KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FydENsYXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxNTgsIDI1NSk7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cHJpZ2h0LXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIC8vIGNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vIG9wYWNpdHk6IDAuODtcbiAgICB3cml0aW5nLW1vZGU6IHRiLXJsO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~categories-categories-module~items-items-module.js.map