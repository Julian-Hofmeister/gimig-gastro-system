(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "CTui":
/*!*********************************************************!*\
  !*** ./src/app/cart/order-card/order-card.component.ts ***!
  \*********************************************************/
/*! exports provided: OrderCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCardComponent", function() { return OrderCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-card.component.html */ "ypSn");
/* harmony import */ var _order_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-card.component.scss */ "ykRI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OrderCardComponent = class OrderCardComponent {
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() {
        this.disabled = false;
        this.price = 0;
        this.blankImg = '/assets/images/grey.jpg';
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.price = Number(this.item.price);
        console.log('Item Options');
        console.log(this.item.combinedWith);
        if (this.item.combinedWith) {
            for (const option of this.item.combinedWith) {
                // @ts-ignore
                this.price += Number(option.price);
            }
        }
    }
};
OrderCardComponent.ctorParameters = () => [];
OrderCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OrderCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-card',
        template: _raw_loader_order_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderCardComponent);



/***/ }),

/***/ "DTtZ":
/*!*****************************************************************!*\
  !*** ./src/app/cart/order-confirm/order-confirm.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  --border-radius: 0;\n  --background: rgb(117, 158, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNKIiwiZmlsZSI6Im9yZGVyLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDExNywgMTU4LCAyNTUpO1xufVxuIl19 */");

/***/ }),

/***/ "E8gF":
/*!*************************************************************!*\
  !*** ./src/app/cart/order-succes/order-succes.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderSuccesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccesComponent", function() { return OrderSuccesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_succes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-succes.component.html */ "aXDd");
/* harmony import */ var _order_succes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-succes.component.scss */ "VfU7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let OrderSuccesComponent = class OrderSuccesComponent {
    //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(() => {
                if (this.modalCtrl) {
                    this.modalCtrl.dismiss().catch((err) => {
                        console.log('MODAL ALREADY DISMISSED ' + err);
                    });
                }
            }, 6000);
        });
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
OrderSuccesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
OrderSuccesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-succes',
        template: _raw_loader_order_succes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_succes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderSuccesComponent);



/***/ }),

/***/ "SNM6":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: whitesmoke ;\n}\n\nh2 {\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  letter-spacing: 2px;\n  color: white;\n}\n\n.order-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-button {\n  margin-top: 2rem;\n  width: 35rem;\n  height: 3.5rem;\n  --border-radius: 50px;\n  --background: rgb(117, 158, 255);\n  --box-shadow: none;\n}\n\nh3 {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  line-height: 2.5rem;\n  font-size: 1.5rem;\n  letter-spacing: 0px;\n  color: #797979;\n}\n\n.text-row {\n  margin-top: 5rem;\n}\n\n.space {\n  margin-top: 2rem;\n}\n\n.navbtn {\n  width: 100%;\n  --border-radius: 100px;\n  --background: rgb(117, 158, 255);\n}\n\np {\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #8b8b8b;\n  margin-left: 1rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXG59XG5cbmgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vIG9wYWNpdHk6IDAuODtcbn1cblxuLm9yZGVyLWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMTcsIDE1OCwgMjU1KTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiByZ2IoMTIxLCAxMjEsIDEyMSk7XG59XG5cbi50ZXh0LXJvdyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLnNwYWNlIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubmF2YnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTE3LCAxNTgsIDI1NSk7XG59XG5cbnAge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogcmdiKDEzOSwgMTM5LCAxMzkpO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "V8zW":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/order-confirm/order-confirm.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button size=\"large\" (click)=\"onOrder()\"> Bestellung aufgeben </ion-button>");

/***/ }),

/***/ "VfU7":
/*!***************************************************************!*\
  !*** ./src/app/cart/order-succes/order-succes.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  margin-top: 3.5rem;\n  margin-bottom: 2.5rem;\n}\n\nh2 {\n  letter-spacing: 1px;\n  color: #474747;\n  font-size: 1.5rem;\n  margin-top: 7rem;\n  line-height: 2rem;\n  text-align: center;\n}\n\nion-button {\n  padding: 0;\n  width: 15rem;\n  --box-shadow: none;\n  --border-radius: 100px;\n  --background: coral;\n}\n\n.confirm {\n  --background: none;\n  --border-color: coral;\n  --border-width: 3px;\n  --color: rgb(63, 63, 63);\n}\n\n.content-col {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLXN1Y2Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0YsZ0JBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoib3JkZXItc3VjY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG5oMiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBjb3JhbDtcbn1cblxuLmNvbmZpcm0ge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWJvcmRlci1jb2xvcjogY29yYWw7XG4gICAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgICAtLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XG59XG5cbi5jb250ZW50LWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "Xo8k":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "ehlK");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "SNM6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _items_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../items/item-detail/item-detail.component */ "cT3o");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart.service */ "Nagw");
/* harmony import */ var _order_succes_order_succes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-succes/order-succes.component */ "E8gF");










let CartPage = class CartPage {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl, afStorage, afs, cartService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.afStorage = afStorage;
        this.afs = afs;
        this.cartService = cartService;
        this.navCtrl = navCtrl;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.loadedCartList = [];
        this.loadedOrderedCartList = [];
        // ----------------------------------------------------------------------------------------------
        this.isLoading = false;
        this.tableNumber = localStorage.getItem('tableNumber');
        this.userEmail = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user')).email
            : null;
        // ----------------------------------------------------------------------------------------------
        this.path = this.afs.collection('restaurants').doc(this.userEmail);
        // foodCollection = this.path.collection('items-food');
        //
        // beverageCollection = this.path.collection('items-beverages');
        this.mainCategory1 = localStorage.getItem('mainCategory1');
        this.mainCategory2 = localStorage.getItem('mainCategory2');
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        console.log('1.');
        console.log(this.loadedCartList);
        this.fetchItemsFromCartCollection();
        this.fetchItemsFromorderedCartCollection();
        console.log('2.');
        console.log(this.loadedCartList);
    }
    // ----------------------------------------------------------------------------------------------
    ngOnDestroy() {
        this.itemCartSub.unsubscribe();
        this.itemOrderedCartSub.unsubscribe();
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openItemDetailModal(item) {
        console.log(item);
        this.modalCtrl
            .create({
            component: _items_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"],
            componentProps: {
                item,
                modalOpenedFromCart: true,
                itemInCart: true,
            },
            cssClass: 'item-detail-css',
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
    // ----------------------------------------------------------------------------------------------
    onOrder() {
        this.cartService.order(this.loadedCartList);
        this.loadedCartList = [];
        this.openSuccessModal();
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    fetchItemsFromCartCollection() {
        this.isLoading = true;
        this.itemCartSub = this.cartService.getCart().subscribe((cart) => {
            var _a, _b, _c, _d;
            this.loadedCartList = [];
            for (const item of cart) {
                const fetchedItem = {
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    tax: item.tax,
                    imagePath: this.afStorage.ref(item.imagePath).getDownloadURL(),
                    imageRef: item.imagePath,
                    isVisible: item.isVisible,
                    kitchenRelevant: item.kitchenRelevant,
                    _id: item.id,
                    availableOptions: (_a = item.combinableWith) !== null && _a !== void 0 ? _a : [],
                    selectedOptions: (_b = item.combinedWith) !== null && _b !== void 0 ? _b : [],
                    availableOptions2: (_c = item.availableOptions2) !== null && _c !== void 0 ? _c : [],
                    selectedOptions2: (_d = item.selectedOptions2) !== null && _d !== void 0 ? _d : [],
                    amount: item.amount ? item.amount : 1,
                    isOrdered: item.isOrdered ? item.isOrdered : false,
                    category: item.category,
                    stockAmount: item.stockAmount,
                    stockChecking: item.stockChecking,
                    combinedWith: item.combinedWith,
                    combinableWith: item.combinableWith,
                    customPrinterAddress: item.customPrinterAddress
                };
                this.loadedCartList.push(fetchedItem);
            }
            this.isLoading = false;
        });
    }
    // ----------------------------------------------------------------------------------------------
    fetchItemsFromorderedCartCollection() {
        this.isLoading = true;
        this.itemOrderedCartSub = this.cartService
            .getOrderedCart()
            .subscribe((orders) => {
            var _a, _b;
            this.loadedOrderedCartList = [];
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
                    availableOptions: (_a = item.combinableWith) !== null && _a !== void 0 ? _a : [],
                    selectedOptions: (_b = item.combinedWith) !== null && _b !== void 0 ? _b : [],
                    amount: item.amount ? item.amount : 1,
                    isOrdered: item.isOrdered ? item.isOrdered : false,
                    category: item.category
                };
                this.loadedOrderedCartList.push(fetchedItem);
                if (this.cartService.orderedList.indexOf(fetchedItem._id) === -1) {
                    this.cartService.orderedList.push(fetchedItem._id);
                }
            }
            this.isLoading = false;
        });
    }
    // ----------------------------------------------------------------------------------------------
    openSuccessModal() {
        this.navCtrl.navigateBack('/home').then();
        this.modalCtrl
            .create({
            component: _order_succes_order_succes_component__WEBPACK_IMPORTED_MODULE_9__["OrderSuccesComponent"],
            cssClass: 'order-succes-modal-css',
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "aXDd":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/order-succes/order-succes.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<!--    <ion-grid>-->\n<!--        <ion-row>-->\n<!--            <ion-col size=\"10\" offset=\"1\" class=\"content-col\">-->\n<!--                <ion-label>-->\n                    <h2>Ihre Bestellung wurde erfolgreich aufgegeben!</h2>\n<!--                </ion-label>-->\n<!--            </ion-col>-->\n            <!-- <ion-col size=\"10\" offset=\"1\" class=\"content-col\">\n                <ion-button size=\"large\" (click)=\"dismiss()\">Schließen</ion-button>\n            </ion-col> -->\n<!--        </ion-row>-->\n<!--    </ion-grid>-->\n</ion-content>\n");

/***/ }),

/***/ "cP+M":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "Xo8k");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "ehlK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <app-background-layout slot=\"fixed\" title=\"Bestellung\" [isCart]=\"true\"></app-background-layout>\n    <app-side-navigation slot=\"fixed\"></app-side-navigation>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"9\" offset=\"1.5\">\n                <ion-list *ngFor=\"let item of loadedCartList\">\n                    <app-order-card [item]=\"item\" (click)=\"openItemDetailModal(item)\"></app-order-card>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"loadedCartList.length > 0\">\n            <ion-col size=\"6\" offset=\"3\" class=\"order-col\">\n                <ion-button size=\"large\" (click)=\"onOrder()\">\n                    <h2>Bestellung abschließen</h2>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"loadedCartList.length === 0\" class=\"text-row\">\n            <ion-col size=\"6\" offset=\"3\" class=\"order-col\">\n                <ion-label>\n                    <h3>Die Bestellung ist leer.</h3>\n                    <h3>Hier könnt ihr Getränke oder Speisen hinzufügen.</h3>\n                </ion-label>\n                <br />\n                <ion-button size=\"large\" class=\"navbtn\" [routerLink]=\"['/','categories','categories-beverages', 'false']\">{{mainCategory2}}</ion-button>\n                <ion-button size=\"large\" class=\"navbtn\" [routerLink]=\"['/','categories','categories-food', 'true']\">{{mainCategory1}}</ion-button>\n                <br />\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"9\" offset=\"1.5\" *ngIf=\"loadedOrderedCartList.length > 0\">\n                <p>Bereits bestellt</p>\n                <ion-list *ngFor=\"let item of loadedOrderedCartList\">\n                    <app-order-card [item]=\"item\" [disabled]=\"true\"></app-order-card>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "t/dc":
/*!***************************************************************!*\
  !*** ./src/app/cart/order-confirm/order-confirm.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmComponent", function() { return OrderConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_confirm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-confirm.component.html */ "V8zW");
/* harmony import */ var _order_confirm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-confirm.component.scss */ "DTtZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart.service */ "Nagw");
/* harmony import */ var _order_succes_order_succes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-succes/order-succes.component */ "E8gF");







let OrderConfirmComponent = class OrderConfirmComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(cartService, modalCtrl, navCtrl) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        console.log(this.loadedCartList);
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onOrder() {
        console.log(this.loadedCartList);
        this.cartService.order(this.loadedCartList);
        this.loadedCartList = [];
        this.modalCtrl.dismiss();
        this.navCtrl.navigateBack('/home');
        this.modalCtrl
            .create({
            component: _order_succes_order_succes_component__WEBPACK_IMPORTED_MODULE_6__["OrderSuccesComponent"],
            cssClass: 'order-succes-modal-css',
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
};
OrderConfirmComponent.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
OrderConfirmComponent.propDecorators = {
    loadedCartList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OrderConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-confirm',
        template: _raw_loader_order_confirm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_confirm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderConfirmComponent);



/***/ }),

/***/ "v35Q":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "cP+M");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "Xo8k");
/* harmony import */ var _elements_background_layout_background_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/background-layout/background-layout.module */ "w4hX");
/* harmony import */ var _elements_side_navigation_side_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/side-navigation/side-navigation.module */ "BArq");
/* harmony import */ var _order_card_order_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-card/order-card.component */ "CTui");
/* harmony import */ var _order_confirm_order_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-confirm/order-confirm.component */ "t/dc");
/* harmony import */ var _order_succes_order_succes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-succes/order-succes.component */ "E8gF");












let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"],
            _elements_background_layout_background_layout_module__WEBPACK_IMPORTED_MODULE_7__["BackgroundLayoutModule"],
            _elements_side_navigation_side_navigation_module__WEBPACK_IMPORTED_MODULE_8__["SideNavigationModule"],
        ],
        declarations: [
            _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"],
            _order_card_order_card_component__WEBPACK_IMPORTED_MODULE_9__["OrderCardComponent"],
            _order_confirm_order_confirm_component__WEBPACK_IMPORTED_MODULE_10__["OrderConfirmComponent"],
            _order_succes_order_succes_component__WEBPACK_IMPORTED_MODULE_11__["OrderSuccesComponent"],
        ],
    })
], CartPageModule);



/***/ }),

/***/ "ykRI":
/*!***********************************************************!*\
  !*** ./src/app/cart/order-card/order-card.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nion-card {\n  margin: 10px 0;\n  width: 60rem;\n  height: 11rem;\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: none;\n}\n\nimg {\n  width: 10rem;\n  height: 11rem;\n  border-radius: 15px;\n  object-fit: cover;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\n.content {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.bottom {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 15px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: #525252;\n}\n\nion-label {\n  overflow-wrap: break-word;\n}\n\np {\n  font-size: 1.2rem;\n  letter-spacing: 0.8px;\n  color: #525252;\n  overflow-wrap: break-word;\n}\n\nion-fab-button {\n  margin-top: 5px;\n  margin-right: 10px;\n  --box-shadow: none;\n  --background: white;\n}\n\nion-icon {\n  font-size: 1.5rem;\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6Im9yZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgd2lkdGg6IDYwcmVtO1xuICAgIGhlaWdodDogMTFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDExcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xufSJdfQ== */");

/***/ }),

/***/ "ypSn":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/order-card/order-card.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" [ngStyle]=\"{ opacity: disabled ? 0.5 : 1 }\" >\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"2.9\">\n                  <img *ngIf=\"item.imagePath | async; let url\" [src]=\"url\"  alt=\"\"/>\n                  <img *ngIf=\"!(item.imagePath | async)\" [src]=\"blankImg\"  alt=\"\"/>\n                </ion-col>\n                <ion-col size=\"7.1\" class=\"content\">\n                    <ion-col>\n                        <ion-label>\n                            <h2>{{ item.name }}</h2>\n                        </ion-label>\n                        <p>{{ item.description }}</p>\n                    </ion-col>\n\n                    <ion-label>\n                        <p>Anzahl: {{ item.amount }}x</p>\n                    </ion-label>\n                </ion-col>\n                <ion-col size=\"1.5\" class=\"bottom\">\n                    <p>\n                        {{price * item.amount | currency: \"EUR\":\"symbol\":\"\":\"fr\" }}\n                    </p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n        <ion-fab-button>\n            <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-item>\n");

/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map