(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~categories-categories-module~items-items-module"],{

/***/ "0gWF":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/image-modal/image-modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scroll-y=\"false\">\n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button class=\"close-fab\" color=\"light\" (click)=\"closeModal()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <h2>{{isItem ? \"Item\" : \"Kategorie\"}} Bild bearbeiten</h2>\n<!--        <div class=\"upload-button\" >-->\n<!--          <p>Bild auswählen</p>-->\n<!--          <ion-icon name=\"cloud-upload-outline\"></ion-icon>-->\n<!--        </div>-->\n\n        <input #imageInput\n               id=\"imageInput\"\n               type=\"file\"\n               accept=\"image/*\"\n               class=\"upload-button\"\n               (change)=\"processFile(imageInput)\">\n\n        <ion-row>\n            <ion-col size=\"7.8\" >\n              <div class=\"img-placeholder\" for=\"imageInput\" *ngIf=\"!selectedFile\" >\n                <ion-icon name=\"image-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"selectedFile\">\n                <img [src]=\"selectedFile.src\" />\n              </div>\n            </ion-col>\n            <ion-col size=\"3.8\" offset=\".4\">\n              <div class=\"save-button\" [ngClass]=\"!selectedFile ? 'deactivated' : ''\" (click)=\"uploadImage()\">\n                <ion-icon name=\"save\"></ion-icon>\n              </div>\n            </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "KD9/":
/*!****************************************!*\
  !*** ./src/app/admin/image.service.ts ***!
  \****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let ImageService = class ImageService {
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(afStorage, toastController) {
        this.afStorage = afStorage;
        this.toastController = toastController;
        this.restaurant = JSON.parse(localStorage.getItem('restaurant'));
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    upload(file, id) {
        this.ref = this.afStorage.ref('/' + this.restaurant.id + '/' + id);
        this.task = this.ref.put(file);
        console.log(this.ref);
    }
    // ----------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------
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
ImageService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



/***/ }),

/***/ "fVzU":
/*!**************************************************************!*\
  !*** ./src/app/admin/image-modal/image-modal.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  font-weight: 600;\n  margin-top: 1.3rem;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.upload-button {\n  background-color: #cecece;\n  padding: 1.5rem;\n  height: 5rem;\n  border-radius: 10px;\n  text-align: center;\n  margin-top: 3rem;\n  cursor: pointer;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\ninput {\n  margin-top: 0.5rem;\n  font-size: 1.5rem;\n  width: 100%;\n}\n\n.img-placeholder {\n  margin-top: 1.5rem;\n  height: 15rem;\n  background-color: #acacac;\n  border-radius: 10px;\n  line-height: 20rem;\n  text-align: center;\n}\n\n.img-placeholder ion-icon {\n  font-size: 6rem;\n  color: #646464;\n}\n\nimg {\n  margin-top: 1.5rem;\n  height: 15rem;\n  width: 26rem;\n  border-radius: 10px;\n}\n\n.save-button {\n  margin-top: 1.5rem;\n  height: 15rem;\n  background-color: var(--ion-color-primary);\n  border-radius: 10px;\n  line-height: 20rem;\n  text-align: center;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\n.save-button ion-icon {\n  font-size: 6rem;\n  color: #ffffff;\n}\n\n.deactivated {\n  background-color: var(--ion-color-primary);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUFIRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQVhGOztBQWNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFaSjs7QUFrQkE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUFmRiIsImZpbGUiOiJpbWFnZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5oMiB7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxLjNyZW07XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi51cGxvYWQtYnV0dG9uIHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cblxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vL2lvbi1jb2wgaW9uLXJvdyB7XG4vLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vL31cblxuLmltZy1wbGFjZWhvbGRlciB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYWNhYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBjb2xvcjogIzY0NjQ2NDtcbiAgfVxufVxuXG5pbWcge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGhlaWdodDogMTVyZW07XG4gIHdpZHRoOiAyNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNhdmUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG5cbn1cblxuLmRlYWN0aXZhdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBvcGFjaXR5OiAuNTtcbiAgLy9pb24taWNvbiB7XG4gIC8vICBmb250LXNpemU6IDZyZW07XG4gIC8vICBjb2xvcjogIzVmNWY1ZjtcbiAgLy99XG59XG4iXX0= */");

/***/ }),

/***/ "oV3A":
/*!************************************************************!*\
  !*** ./src/app/admin/image-modal/image-modal.component.ts ***!
  \************************************************************/
/*! exports provided: ImageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalComponent", function() { return ImageModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_image_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./image-modal.component.html */ "0gWF");
/* harmony import */ var _image_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-modal.component.scss */ "fVzU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image.service */ "KD9/");







class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
    }
}
let ImageModalComponent = class ImageModalComponent {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(router, modalCtrl, imageService, toastController) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.imageService = imageService;
        this.toastController = toastController;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        console.log(this.id);
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    closeModal() {
        this.modalCtrl.dismiss().then();
    }
    // ----------------------------------------------------------------------------------------------
    processFile(imageInput) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            console.log(file.size);
            if (file.size < 1333906) {
                this.selectedFile = new ImageSnippet(event.target.result, file);
            }
            else {
                this.presentToast('Die Datei ist zu groß. (' +
                    file.name +
                    'kb)\nDie maximale Dateigröße liegt bei 900kb.');
            }
        });
        reader.readAsDataURL(file);
    }
    // ----------------------------------------------------------------------------------------------
    uploadImage() {
        this.imageService.upload(this.selectedFile.file, this.id);
    }
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1500,
                position: 'bottom',
                color: 'dark',
            });
            yield toast.present();
        });
    }
};
ImageModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ImageModalComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ImageModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-modal',
        template: _raw_loader_image_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ImageModalComponent);



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



/***/ })

}]);
//# sourceMappingURL=default~categories-categories-module~items-items-module.js.map