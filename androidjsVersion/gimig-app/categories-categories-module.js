(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "1n1Y":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories.page.html */ "zDdw");
/* harmony import */ var _categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.page.scss */ "ArCr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.service */ "dEil");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _items_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../items/item.service */ "C26z");









let CategoriesPage = class CategoriesPage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(navCtrl, route, afStorage, categoryService, itemService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.afStorage = afStorage;
        this.categoryService = categoryService;
        this.itemService = itemService;
        this.foodCategories = [];
        this.beverageCategories = [];
        this.isFood = 'true';
        this.allItems = [];
        this.isFinished = false;
        this.ipAddress = localStorage.getItem('ipAddress');
        this.restaurant = JSON.parse(localStorage.getItem('restaurant'));
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.gertUrlData();
            this.getAllDegasoData();
            this.items = yield this.itemService.getAllDegasoItems();
            // this.allCategories = await this.categoryService.getAllDegasoCategories() ;
            // this.filterCategories();
        });
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    getAllDegasoData() {
        fetch('http://' + this.ipAddress + ':3434/getAllProducts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(itemData => {
            if (itemData != null) {
                this.allItems = itemData;
                this.allCategories = [];
                this.foodCategories = [];
                fetch('http://' + this.ipAddress + ':3434/getAllCategorys/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                    if (data != null) {
                        data.sort((n1, n2) => n1.order - n2.order);
                        for (const category of data) {
                            try {
                                category.imagePath = this.afStorage
                                    .ref('/' + this.restaurant.id + '/' + category._id).getDownloadURL();
                            }
                            catch (e) {
                                console.log(e);
                            }
                            if (!this.allCategories.includes(category)) {
                                this.allCategories.push(category);
                                this.allItems.forEach(item => {
                                    if (item.kitchenRelevant && item.category == category.name) {
                                        if (!this.foodCategories.includes(category) && !this.beverageCategories.includes(category)) {
                                            this.foodCategories.push(category);
                                        }
                                    }
                                    if (!item.kitchenRelevant && item.category == category.name) {
                                        if (!this.foodCategories.includes(category) && !this.beverageCategories.includes(category)) {
                                            this.beverageCategories.push(category);
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }
        });
    }
    filterCategories() {
        const timeout = setInterval(() => {
            if (this.allCategories && !this.isFinished) {
                for (const category of this.allCategories) {
                    for (const item of this.items) {
                        if (category.name === item.category) {
                            if (!this.foodCategories.includes(category) && !this.beverageCategories.includes(category)) {
                                if (item.kitchenRelevant) {
                                    this.foodCategories.push(category);
                                }
                                else {
                                    this.beverageCategories.push(category);
                                }
                            }
                        }
                    }
                }
                clearInterval(timeout);
                this.isFinished = true;
            }
        }, 100);
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    gertUrlData() {
        this.route.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('id')) {
                this.navCtrl.navigateBack('/home');
                return;
            }
            this.id = paramMap.get('id');
            this.isFood = paramMap.get('hasFood');
            this.backgroundTitle = paramMap.get('backgroundTitle');
            this.pathAttachment =
                this.isFood === 'true' ? 'categories-food' : 'categories-beverages';
        });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _items_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriesPage);



/***/ }),

/***/ "1qrh":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "1n1Y");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"],
    },
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "ArCr":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: whitesmoke ;\n}\n\n.spin {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-spinner {\n  transform: scale(2);\n  stroke: #ff9a75;\n  fill: #ff9a75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZVxufVxuXG4uc3BpbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLXNwaW5uZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgc3Ryb2tlOiByZ2IoMjU1LCAxNTQsIDExNyk7XG4gICAgZmlsbDogcmdiKDI1NSwgMTU0LCAxMTcpO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "TkN+":
/*!***********************************************************************!*\
  !*** ./src/app/categories/category-card/category-card.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  width: 40rem;\n  height: 20rem;\n  border-radius: 20px;\n  position: relative;\n  text-align: center;\n  margin: 20px 0;\n}\n\nion-item {\n  border-radius: 20px;\n}\n\nimg {\n  width: 40rem;\n  height: 20rem;\n  object-fit: cover;\n}\n\n.category-label {\n  border-radius: 30px 0 0 30px;\n  background-color: white;\n  padding: 10px 30px;\n  position: absolute;\n  bottom: 25px;\n  right: 0;\n}\n\nh2 {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  color: #494949;\n  letter-spacing: 1px;\n}\n\n.edit-mode {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  line-height: 4.5rem;\n  border-radius: 10px 10px 30px 10px;\n  background-color: white;\n}\n\n.edit-mode ion-icon {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdGVnb3J5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBRUEsdUJBQUE7QUFBRjs7QUFFRTtFQUNFLGVBQUE7QUFBSiIsImZpbGUiOiJjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIHdpZHRoOiA0MHJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDQwcmVtO1xuICAgIGhlaWdodDogMjByZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jYXRlZ29yeS1sYWJlbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICByaWdodDogMDtcbn1cblxuaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYig3MywgNzMsIDczKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uZWRpdC1tb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDFyZW07XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBsaW5lLWhlaWdodDogNC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMzBweCAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "kMJQ":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "1qrh");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "1n1Y");
/* harmony import */ var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-card/category-card.component */ "uVMK");
/* harmony import */ var _elements_side_navigation_side_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/side-navigation/side-navigation.module */ "BArq");
/* harmony import */ var _elements_background_layout_background_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/background-layout/background-layout.module */ "w4hX");
/* harmony import */ var _admin_image_modal_image_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../admin/image-modal/image-modal.module */ "olEq");











let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"],
            _elements_side_navigation_side_navigation_module__WEBPACK_IMPORTED_MODULE_8__["SideNavigationModule"],
            _elements_background_layout_background_layout_module__WEBPACK_IMPORTED_MODULE_9__["BackgroundLayoutModule"],
            _admin_image_modal_image_modal_module__WEBPACK_IMPORTED_MODULE_10__["ImageModalModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_7__["CategoryCardComponent"]],
    })
], CategoriesPageModule);



/***/ }),

/***/ "olEq":
/*!*********************************************************!*\
  !*** ./src/app/admin/image-modal/image-modal.module.ts ***!
  \*********************************************************/
/*! exports provided: ImageModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalModule", function() { return ImageModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _image_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-modal.component */ "oV3A");





let ImageModalModule = class ImageModalModule {
};
ImageModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_image_modal_component__WEBPACK_IMPORTED_MODULE_4__["ImageModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
        exports: [_image_modal_component__WEBPACK_IMPORTED_MODULE_4__["ImageModalComponent"]],
    })
], ImageModalModule);



/***/ }),

/***/ "uVMK":
/*!*********************************************************************!*\
  !*** ./src/app/categories/category-card/category-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCardComponent", function() { return CategoryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-card.component.html */ "zxGy");
/* harmony import */ var _category_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-card.component.scss */ "TkN+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _admin_edit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../admin/edit.service */ "seDJ");
/* harmony import */ var _admin_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/image-modal/image-modal.component */ "oV3A");









let CategoryCardComponent = class CategoryCardComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(navCtrl, route, editService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.editService = editService;
        this.modalCtrl = modalCtrl;
        this.blankImg = '/assets/images/grey.jpg';
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.editMode = this.editService.getEditModeStatus();
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openContent(category) {
        console.log(category);
        this.navCtrl.navigateForward([
            '/',
            'items',
            category.name,
            this.backgroundTitle,
        ]);
        // if (category.hasCategories) {
        //   this.navCtrl.navigateForward([
        //     '/',
        //     'categories',
        //     category.id,
        //     category.hasFood,
        //     this.backgroundTitle,
        //   ]);
        // } else {
        //   this.navCtrl.navigateForward([
        //     '/',
        //     'items',
        //     category.id,
        //     category.hasFood,
        //     this.backgroundTitle,
        //   ]);
        // }
    }
    // ----------------------------------------------------------------------------------------------
    editCategory() {
        if (!this.editMode) {
            return;
        }
        const id = this.category._id;
        this.modalCtrl
            .create({
            component: _admin_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_8__["ImageModalComponent"],
            componentProps: { id, isItem: false },
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
};
CategoryCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _admin_edit_service__WEBPACK_IMPORTED_MODULE_7__["EditService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
CategoryCardComponent.propDecorators = {
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    backgroundTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CategoryCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-card',
        template: _raw_loader_category_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('simpleFadeAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300)]),
            ]),
        ],
        styles: [_category_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryCardComponent);



/***/ }),

/***/ "zDdw":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-layout float-right\"></div>\n\n<ion-content>\n    <app-background-layout slot=\"fixed\" [title]=\"backgroundTitle\"></app-background-layout>\n    <app-side-navigation slot=\"fixed\"></app-side-navigation>\n    <!-- <div class=\"spin\" *ngIf=\"!categories$\">\n        <ion-spinner class=\"spinner-large\" name=\"bubbles\" color=\"primary\"></ion-spinner>\n    </div> -->\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"8\" offset=\"2\">\n                <ng-container *ngIf=\"isFood === 'true'\">\n                    <ion-list *ngFor=\"let category of foodCategories\">\n                        <app-category-card [category]=\"category\" [backgroundTitle]=\"backgroundTitle\"></app-category-card>\n                    </ion-list>\n                </ng-container>\n\n                <ng-container *ngIf=\"isFood === 'false'\">\n                    <ion-list *ngFor=\"let category of beverageCategories\">\n                        <app-category-card [category]=\"category\" [backgroundTitle]=\"backgroundTitle\"></app-category-card>\n                    </ion-list>\n                </ng-container>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "zxGy":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category-card/category-card.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" [ngStyle]=\"{ opacity: category.isVisible ? 1 : 0.4 }\"  [@simpleFadeAnimation]=\"'in'\">\n    <ion-card (click)=\"openContent(category)\">\n        <img *ngIf=\"(category.imagePath | async); let url\" [src]=\"url\"  alt=\"\"/>\n        <img *ngIf=\"!(category.imagePath | async)\" [src]=\"blankImg\"  alt=\"\"/>\n        <div class=\"category-label\">\n          <h2>{{ category.name }}</h2>\n        </div>\n        <div class=\"edit-mode\" (click)=\"editCategory()\" *ngIf=\"editMode\">\n          <ion-icon name=\"images-outline\"></ion-icon>\n        </div>\n    </ion-card>\n</ion-item>\n");

/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map