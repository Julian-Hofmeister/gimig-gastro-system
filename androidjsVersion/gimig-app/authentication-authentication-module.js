(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "6/n6":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  margin-top: 1rem;\n  width: 12rem;\n  height: 12rem;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n}\n\nion-col {\n  justify-content: center;\n  text-align: start;\n}\n\n.input-col {\n  text-align: end;\n}\n\nion-button {\n  width: 8rem;\n  height: 3rem;\n  --border-radius: 50px;\n  --background: coral;\n  --box-shadow: none;\n}\n\nion-label {\n  color: coral;\n}\n\n:host ion-item {\n  --border-color: rgb(221, 221, 221);\n  --highlight-color-invalid: red;\n  --highlight-color-valid: coral;\n}\n\nion-item.item-has-focus > ion-label {\n  color: coral !important;\n}\n\n.error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdJO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FBQVI7O0FBSUE7RUFDSSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKIiwiZmlsZSI6ImF1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB3aWR0aDogMTJyZW07XG4gICAgaGVpZ2h0OiAxMnJlbTtcbn1cblxuaW9uLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNvbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5pbnB1dC1jb2wge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJhY2tncm91bmQ6IGNvcmFsO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogY29yYWw7XG59XG5cbjpob3N0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7IC8vIGRlZmF1bHQgdW5kZXJsaW5lIGNvbG9yXG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJlZDsgLy8gaW52YWxpZCB1bmRlcmxpbmUgY29sb3JcbiAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IGNvcmFsOyAvLyB2YWxpZCB1bmRlcmxpbmUgY29sb3JcbiAgICB9XG59XG5cbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzPmlvbi1sYWJlbCB7XG4gICAgY29sb3I6IGNvcmFsICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG4iXX0= */");

/***/ }),

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.page */ "kQFi");







let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationPageRoutingModule"],
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]],
    })
], AuthenticationPageModule);



/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageRoutingModule", function() { return AuthenticationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.page */ "kQFi");




const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticationPage"]
    }
];
let AuthenticationPageRoutingModule = class AuthenticationPageRoutingModule {
};
AuthenticationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthenticationPageRoutingModule);



/***/ }),

/***/ "jOpq":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"3\" offset=\"2\">\n                <img src=\"/assets/images/Gimig-Logo-Black.png\" />\n            </ion-col>\n            <ion-col size=\"5\" class=\"input-col\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n                    <div class=\"error-message alert alert-danger\" *ngIf=\"error\" (click)=\"resetError()\">\n                        {{ error }}\n                    </div>\n                    <ion-item>\n                        <ion-label position=\"floating\">E-mail: </ion-label>\n                        <ion-input formControlName=\"email\" class=\"form-control\" type=\"email\" name=\"email\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Passwort: </ion-label>\n                        <ion-input formControlName=\"password\" class=\"form-control\" type=\"password\" name=\"password\"></ion-input>\n                    </ion-item>\n                    <br />\n\n                    <ion-button type=\"submit\" [disabled]=\"loginForm.invalid\">Login</ion-button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "kQFi":
/*!*******************************************************!*\
  !*** ./src/app/authentication/authentication.page.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./authentication.page.html */ "jOpq");
/* harmony import */ var _authentication_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.page.scss */ "6/n6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "W4xs");






let AuthenticationPage = class AuthenticationPage {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(authService) {
        this.authService = authService;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
            ]),
        });
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    submit() {
        this.email = this.loginForm.value.email;
        this.password = this.loginForm.value.password;
        this.authService.signInUser(this.email, this.password).catch((e) => {
            this.error = this.authService.handleError(e.code);
        });
    }
    // ----------------------------------------------------------------------------------------------
    resetError() {
        this.error = null;
    }
};
AuthenticationPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AuthenticationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-authentication',
        template: _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_authentication_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthenticationPage);



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map