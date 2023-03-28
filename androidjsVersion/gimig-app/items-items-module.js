(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"],{

/***/ "0btD":
/*!*************************************!*\
  !*** ./src/app/items/items.page.ts ***!
  \*************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./items.page.html */ "31A6");
/* harmony import */ var _items_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.page.scss */ "aLss");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-detail/item-detail.component */ "cT3o");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item.service */ "C26z");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cart/cart.service */ "Nagw");
/* harmony import */ var _admin_edit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../admin/edit.service */ "seDJ");
/* harmony import */ var _admin_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin/image-modal/image-modal.component */ "oV3A");












let ItemsPage = class ItemsPage {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(navCtrl, route, modalCtrl, itemService, cartService, afStorage, editService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.itemService = itemService;
        this.cartService = cartService;
        this.afStorage = afStorage;
        this.editService = editService;
        this.ipAddress = localStorage.getItem('ipAddress');
        this.isLoading = false;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.getUrlData();
        // this.fetchItemsFromFirestore();
        this.items = this.itemService.getAllDegasoItems(this.categoryName);
        console.log(this.items);
        this.webSocketInit();
        this.fetchCartFromFirestore();
        this.editMode = this.editService.getEditModeStatus();
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onShowDetail(item) {
        console.log(item.stockAmount);
        if (this.editMode) {
            return;
        }
        let itemInCart = false;
        for (const cartItem of this.cartItemList) {
            if (item._id === cartItem._id) {
                item = cartItem;
                itemInCart = true;
            }
        }
        this.modalCtrl
            .create({
            component: _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_6__["ItemDetailComponent"],
            componentProps: { item, itemInCart },
            cssClass: 'item-detail-css',
            mode: 'md'
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
    // ----------------------------------------------------------------------------------------------
    openEditModal(item) {
        if (!this.editMode) {
            return;
        }
        const id = item._id;
        console.log(id);
        this.modalCtrl
            .create({
            component: _admin_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_11__["ImageModalComponent"],
            componentProps: { id, isItem: true },
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    getUrlData() {
        this.route.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('id')) {
                this.navCtrl.navigateBack('/home');
                return;
            }
            this.categoryName = paramMap.get('id');
            this.hasFood = paramMap.get('hasFood');
            this.backgroundTitle = paramMap.get('backgroundTitle');
        });
    }
    // ----------------------------------------------------------------------------------------------
    // private fetchItemsFromFirestore() {
    //   this.isLoading = true;
    //
    //   this.itemSub = this.itemService
    //     .getItems(this.id, this.hasFood)
    //     .subscribe((items) => {
    //       this.loadedItemList = [];
    //
    //       for (const currentItem of items) {
    //         const imagePath = this.afStorage
    //           .ref(currentItem.imagePath)
    //           .getDownloadURL();
    //
    //         const fetchedItem: Item = {
    //           ...currentItem,
    //           imageRef: currentItem.imagePath,
    //           imagePath,
    //           selectedOptions: currentItem.selectedOptions,
    //         };
    //
    //         if (fetchedItem.isVisible) {
    //           this.loadedItemList.push(fetchedItem);
    //         }
    //
    //         this.isLoading = false;
    //       }
    //     });
    // }
    // ----------------------------------------------------------------------------------------------
    fetchCartFromFirestore() {
        this.cartSub = this.cartService.getCart().subscribe((cartItems) => {
            this.cartItemList = [];
            for (const cartItem of cartItems) {
                const imagePath = this.afStorage
                    .ref(cartItem.imagePath)
                    .getDownloadURL();
                const fetchedCartItem = Object.assign(Object.assign({}, cartItem), { imageRef: cartItem.imagePath, imagePath });
                this.cartItemList.push(fetchedCartItem);
            }
        });
    }
    // ----------------------------------------------------------------------------------------------
    webSocketInit() {
        this.webSocket = new WebSocket('ws:' + this.ipAddress + ':3434');
        this.webSocket.onmessage = (message) => {
            if (message.data === 'productUpdate') {
                // window.location.reload();
            }
        };
    }
};
ItemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"] },
    { type: _cart_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: _admin_edit_service__WEBPACK_IMPORTED_MODULE_10__["EditService"] }
];
ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-items',
        template: _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_items_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemsPage);



/***/ }),

/***/ "31A6":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <app-background-layout slot=\"fixed\" [title]=\"backgroundTitle\"></app-background-layout>\n    <app-side-navigation slot=\"fixed\"></app-side-navigation>\n    <div class=\"spin\" *ngIf=\"isLoading\">\n        <ion-spinner class=\"spinner-large\" name=\"bubbles\" color=\"primary\"></ion-spinner>\n    </div>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"9\" offset=\"1.5\">\n                <ion-list *ngFor=\"let item of items\">\n                    <app-item-card *ngIf=\"item.active || (item.stockChecking && (item.stockAmount > 0))\" [item]=\"item\" (click)=\"editMode ? openEditModal(item) : onShowDetail(item)\"></app-item-card>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "C0qs":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/common/locales/global/en-GB.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

(function(global) {
global.ng = global.ng || {};
global.ng.common = global.ng.common || {};
global.ng.common.locales = global.ng.common.locales || {};
const u = undefined;
function plural(n) {
  let i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}
global.ng.common.locales['en-gb'] = [
  'en-GB',
  [['a', 'p'], ['am', 'pm'], u],
  [['am', 'pm'], u, u],
  [
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  ],
  u,
  [
    ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ]
  ],
  u,
  [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
  1,
  [6, 0],
  ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1}, {0}', u, '{1} \'at\' {0}', u],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
  'GBP',
  '£',
  'British Pound',
  {'JPY': ['JP¥', '¥'], 'USD': ['US$', '$']},
  'ltr',
  plural,
  [
    [
      ['mi', 'n', 'in the morning', 'in the afternoon', 'in the evening', 'at night'],
      ['midnight', 'noon', 'in the morning', 'in the afternoon', 'in the evening', 'at night'], u
    ],
    [['midnight', 'noon', 'morning', 'afternoon', 'evening', 'night'], u, u],
    [
      '00:00', '12:00', ['06:00', '12:00'], ['12:00', '18:00'], ['18:00', '21:00'],
      ['21:00', '06:00']
    ]
  ]
];
})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
   typeof window !== 'undefined' && window);


/***/ }),

/***/ "FSxx":
/*!***********************************************!*\
  !*** ./src/app/items/items-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ItemsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageRoutingModule", function() { return ItemsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.page */ "0btD");




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_3__["ItemsPage"]
    }
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ "Hfs6":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/fr.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === 0 || i === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'fr',
        [['AM', 'PM'], u, u],
        u,
        [
            ['D', 'L', 'M', 'M', 'J', 'V', 'S'], ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            ['di', 'lu', 'ma', 'me', 'je', 've', 'sa']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.',
                'déc.'
            ],
            [
                'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre',
                'octobre', 'novembre', 'décembre'
            ]
        ],
        u,
        [['av. J.-C.', 'ap. J.-C.'], u, ['avant Jésus-Christ', 'après Jésus-Christ']],
        1,
        [6, 0],
        ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', '{1} \'à\' {0}', u, u],
        [',', '\u202f', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'ARS': ['$AR', '$'],
            'AUD': ['$AU', '$'],
            'BEF': ['FB'],
            'BMD': ['$BM', '$'],
            'BND': ['$BN', '$'],
            'BZD': ['$BZ', '$'],
            'CAD': ['$CA', '$'],
            'CLP': ['$CL', '$'],
            'CNY': [u, '¥'],
            'COP': ['$CO', '$'],
            'CYP': ['£CY'],
            'EGP': [u, '£E'],
            'FJD': ['$FJ', '$'],
            'FKP': ['£FK', '£'],
            'FRF': ['F'],
            'GBP': ['£GB', '£'],
            'GIP': ['£GI', '£'],
            'HKD': [u, '$'],
            'IEP': ['£IE'],
            'ILP': ['£IL'],
            'ITL': ['₤IT'],
            'JPY': [u, '¥'],
            'KMF': [u, 'FC'],
            'LBP': ['£LB', '£L'],
            'MTP': ['£MT'],
            'MXN': ['$MX', '$'],
            'NAD': ['$NA', '$'],
            'NIO': [u, '$C'],
            'NZD': ['$NZ', '$'],
            'RHD': ['$RH'],
            'RON': [u, 'L'],
            'RWF': [u, 'FR'],
            'SBD': ['$SB', '$'],
            'SGD': ['$SG', '$'],
            'SRD': ['$SR', '$'],
            'TOP': [u, '$T'],
            'TTD': ['$TT', '$'],
            'TWD': [u, 'NT$'],
            'USD': ['$US', '$'],
            'UYU': ['$UY', '$'],
            'WST': ['$WS'],
            'XCD': [u, '$'],
            'XPF': ['FCFP'],
            'ZMW': [u, 'Kw']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9mci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixJQUFJO1FBQ0osQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDN0YsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7WUFDekUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcs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QUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1NBQ2pCO1FBQ0QsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgaWYgKGkgPT09IDAgfHwgaSA9PT0gMSkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdmcicsXG4gIFtbJ0FNJywgJ1BNJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydEJywgJ0wnLCAnTScsICdNJywgJ0onLCAnVicsICdTJ10sIFsnZGltLicsICdsdW4uJywgJ21hci4nLCAnbWVyLicsICdqZXUuJywgJ3Zlbi4nLCAnc2FtLiddLFxuICAgIFsnZGltYW5jaGUnLCAnbHVuZGknLCAnbWFyZGknLCAnbWVyY3JlZGknLCAnamV1ZGknLCAndmVuZHJlZGknLCAnc2FtZWRpJ10sXG4gICAgWydkaScsICdsdScsICdtYScsICdtZScsICdqZScsICd2ZScsICdzYSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgW1xuICAgICAgJ2phbnYuJywgJ2bDqXZyLicsICdtYXJzJywgJ2F2ci4nLCAnbWFpJywgJ2p1aW4nLCAnanVpbC4nLCAnYW/Du3QnLCAnc2VwdC4nLCAnb2N0LicsICdub3YuJyxcbiAgICAgICdkw6ljLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdqYW52aWVyJywgJ2bDqXZyaWVyJywgJ21hcnMnLCAnYXZyaWwnLCAnbWFpJywgJ2p1aW4nLCAnanVpbGxldCcsICdhb8O7dCcsICdzZXB0ZW1icmUnLFxuICAgICAgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZMOpY2VtYnJlJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snYXYuIEouLUMuJywgJ2FwLiBKLi1DLiddLCB1LCBbJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC9NTS95JywgJ2QgTU1NIHknLCAnZCBNTU1NIHknLCAnRUVFRSBkIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCAnezF9IFxcJ8OgXFwnIHswfScsIHUsIHVdLFxuICBbJywnLCAnXFx1MjAyZicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sXG4gICdFVVInLFxuICAn4oKsJyxcbiAgJ2V1cm8nLFxuICB7XG4gICAgJ0FSUyc6IFsnJEFSJywgJyQnXSxcbiAgICAnQVVEJzogWyckQVUnLCAnJCddLFxuICAgICdCRUYnOiBbJ0ZCJ10sXG4gICAgJ0JNRCc6IFsnJEJNJywgJyQnXSxcbiAgICAnQk5EJzogWyckQk4nLCAnJCddLFxuICAgICdCWkQnOiBbJyRCWicsICckJ10sXG4gICAgJ0NBRCc6IFsnJENBJywgJyQnXSxcbiAgICAnQ0xQJzogWyckQ0wnLCAnJCddLFxuICAgICdDTlknOiBbdSwgJ8KlJ10sXG4gICAgJ0NPUCc6IFsnJENPJywgJyQnXSxcbiAgICAnQ1lQJzogWyfCo0NZJ10sXG4gICAgJ0VHUCc6IFt1LCAnwqNFJ10sXG4gICAgJ0ZKRCc6IFsnJEZKJywgJyQnXSxcbiAgICAnRktQJzogWyfCo0ZLJywgJ8KjJ10sXG4gICAgJ0ZSRic6IFsnRiddLFxuICAgICdHQlAnOiBbJ8KjR0InLCAnwqMnXSxcbiAgICAnR0lQJzogWyfCo0dJJywgJ8KjJ10sXG4gICAgJ0hLRCc6IFt1LCAnJCddLFxuICAgICdJRVAnOiBbJ8KjSUUnXSxcbiAgICAnSUxQJzogWyfCo0lMJ10sXG4gICAgJ0lUTCc6IFsn4oKkSVQnXSxcbiAgICAnSlBZJzogW3UsICfCpSddLFxuICAgICdLTUYnOiBbdSwgJ0ZDJ10sXG4gICAgJ0xCUCc6IFsnwqNMQicsICfCo0wnXSxcbiAgICAnTVRQJzogWyfCo01UJ10sXG4gICAgJ01YTic6IFsnJE1YJywgJyQnXSxcbiAgICAnTkFEJzogWyckTkEnLCAnJCddLFxuICAgICdOSU8nOiBbdSwgJyRDJ10sXG4gICAgJ05aRCc6IFsnJE5aJywgJyQnXSxcbiAgICAnUkhEJzogWyckUkgnXSxcbiAgICAnUk9OJzogW3UsICdMJ10sXG4gICAgJ1JXRic6IFt1LCAnRlInXSxcbiAgICAnU0JEJzogWyckU0InLCAnJCddLFxuICAgICdTR0QnOiBbJyRTRycsICckJ10sXG4gICAgJ1NSRCc6IFsnJFNSJywgJyQnXSxcbiAgICAnVE9QJzogW3UsICckVCddLFxuICAgICdUVEQnOiBbJyRUVCcsICckJ10sXG4gICAgJ1RXRCc6IFt1LCAnTlQkJ10sXG4gICAgJ1VTRCc6IFsnJFVTJywgJyQnXSxcbiAgICAnVVlVJzogWyckVVknLCAnJCddLFxuICAgICdXU1QnOiBbJyRXUyddLFxuICAgICdYQ0QnOiBbdSwgJyQnXSxcbiAgICAnWFBGJzogWydGQ0ZQJ10sXG4gICAgJ1pNVyc6IFt1LCAnS3cnXVxuICB9LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19

/***/ }),

/***/ "IsE6":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-routing.module */ "FSxx");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items.page */ "0btD");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-card/item-card.component */ "mOws");
/* harmony import */ var _elements_side_navigation_side_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/side-navigation/side-navigation.module */ "BArq");
/* harmony import */ var _elements_background_layout_background_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/background-layout/background-layout.module */ "w4hX");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-detail/item-detail.component */ "cT3o");
/* harmony import */ var _item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-confirm/item-confirm.component */ "TyM/");
/* harmony import */ var _angular_common_locales_global_en_GB__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/global/en-GB */ "C0qs");
/* harmony import */ var _angular_common_locales_global_en_GB__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_global_en_GB__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _elements_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/loading-spinner/loading-spinner.module */ "mW1u");














let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _items_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemsPageRoutingModule"],
            _elements_side_navigation_side_navigation_module__WEBPACK_IMPORTED_MODULE_8__["SideNavigationModule"],
            _elements_background_layout_background_layout_module__WEBPACK_IMPORTED_MODULE_9__["BackgroundLayoutModule"],
            _elements_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_13__["LoadingSpinnerModule"],
        ],
        declarations: [
            _items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"],
            // SideNavigationComponent,
            // BackgroundLayoutComponent,
            _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__["ItemCardComponent"],
            _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ItemDetailComponent"],
            _item_confirm_item_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ItemConfirmComponent"],
        ],
    })
], ItemsPageModule);



/***/ }),

/***/ "QevC":
/*!**********************************************************!*\
  !*** ./src/app/items/item-card/item-card.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nion-card {\n  margin: 10px 0;\n  width: 60rem;\n  height: 11rem;\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: none;\n}\n\nimg {\n  width: 10rem;\n  height: 11rem;\n  border-radius: 15px;\n  object-fit: cover;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\n.content {\n  padding: 15px;\n}\n\n.bottom {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 20px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: #525252;\n}\n\np {\n  font-size: 1.2rem;\n  letter-spacing: 0.8px;\n  color: #525252;\n}\n\n.edit-mode {\n  position: absolute;\n  top: 1.5rem;\n  left: 1rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  line-height: 4.5rem;\n  border-radius: 10px 10px 30px 10px;\n  text-align: center;\n  background-color: white;\n}\n\n.edit-mode ion-icon {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHdpZHRoOiA2MHJlbTtcbiAgICBoZWlnaHQ6IDExcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAxMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYm90dG9tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XG59XG5cbi5lZGl0LW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS41cmVtO1xuICBsZWZ0OiAxcmVtO1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDMwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "V30J":
/*!***********************************************************************!*\
  !*** ./src/app/elements/loading-spinner/loading-spinner.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _loading_spinner_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-spinner.component.css */ "cgmp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LoadingSpinnerComponent = class LoadingSpinnerComponent {
};
LoadingSpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-loading-spinner',
        template: '<div class="lds-facebook"><div></div><div></div><div></div></div>',
        styles: [_loading_spinner_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], LoadingSpinnerComponent);



/***/ }),

/***/ "aLss":
/*!***************************************!*\
  !*** ./src/app/items/items.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: whitesmoke ;\n}\n\n.spin {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-spinner {\n  transform: scale(2);\n  stroke: #ff9a75;\n  fill: #ff9a75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6Iml0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXG59XG5cbi5zcGluIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24tc3Bpbm5lciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBzdHJva2U6IHJnYigyNTUsIDE1NCwgMTE3KTtcbiAgICBmaWxsOiByZ2IoMjU1LCAxNTQsIDExNyk7XG59Il19 */");

/***/ }),

/***/ "cgmp":
/*!************************************************************************!*\
  !*** ./src/app/elements/loading-spinner/loading-spinner.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lds-facebook {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n}\n\n.lds-facebook div {\n    display: inline-block;\n    position: absolute;\n    left: 8px;\n    width: 16px;\n    background: rgb(255, 119, 8);\n    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n}\n\n@keyframes lds-facebook {\n    0% {\n        top: 8px;\n        height: 64px;\n    }\n    50%,\n    100% {\n        top: 24px;\n        height: 32px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxRQUFRO1FBQ1IsWUFBWTtJQUNoQjtJQUNBOztRQUVJLFNBQVM7UUFDVCxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoibG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLWZhY2Vib29rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLmxkcy1mYWNlYm9vayBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDExOSwgOCk7XG4gICAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2sgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDhweDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcbn1cblxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiAzMnB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGxlZnQ6IDU2cHg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1mYWNlYm9vayB7XG4gICAgMCUge1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIHRvcDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "ir9y":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/item-card/item-card.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" [ngStyle]=\"{ opacity: item.isVisible ? 1 : 0.4 }\" [@simpleFadeAnimation]=\"'in'\">\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"2.9\">\n                    <img *ngIf=\"item.imagePath | async; let url\" [src]=\"url\"  alt=\"\"/>\n                    <img *ngIf=\"!(item.imagePath | async)\" [src]=\"blankImg\"  alt=\"\"/>\n                </ion-col>\n                <ion-col size=\"7.1\" class=\"content\">\n                    <ion-label>\n                        <h2>{{ item.name }}</h2>\n                    </ion-label>\n                    <p>{{ item.description }}</p>\n                </ion-col>\n                <ion-col size=\"1.5\" class=\"bottom\">\n                    <p>{{ item.price | currency: \"EUR\":\"symbol\":\"\":\"fr\" }}</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n  <div class=\"edit-mode\" *ngIf=\"editMode\">\n    <ion-icon name=\"images-outline\"></ion-icon>\n  </div>\n</ion-item>\n");

/***/ }),

/***/ "mOws":
/*!********************************************************!*\
  !*** ./src/app/items/item-card/item-card.component.ts ***!
  \********************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-card.component.html */ "ir9y");
/* harmony import */ var _item_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-card.component.scss */ "QevC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_edit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/edit.service */ "seDJ");









Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default.a, 'fr');
let ItemCardComponent = class ItemCardComponent {
    //#endregion
    constructor(modalCtrl, editService) {
        this.modalCtrl = modalCtrl;
        this.editService = editService;
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.price = '';
        this.blankImg = '/assets/images/grey.jpg';
    }
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.price = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR',
        }).format(Number(this.item.price));
        this.editMode = this.editService.getEditModeStatus();
    }
};
ItemCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _admin_edit_service__WEBPACK_IMPORTED_MODULE_8__["EditService"] }
];
ItemCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-card',
        template: _raw_loader_item_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('simpleFadeAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300)]),
            ]),
        ],
        styles: [_item_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemCardComponent);



/***/ }),

/***/ "mW1u":
/*!********************************************************************!*\
  !*** ./src/app/elements/loading-spinner/loading-spinner.module.ts ***!
  \********************************************************************/
/*! exports provided: LoadingSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerModule", function() { return LoadingSpinnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner.component */ "V30J");




let LoadingSpinnerModule = class LoadingSpinnerModule {
};
LoadingSpinnerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"]],
    })
], LoadingSpinnerModule);



/***/ })

}]);
//# sourceMappingURL=items-items-module.js.map