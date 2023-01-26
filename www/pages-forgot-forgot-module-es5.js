(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;\"></ion-icon>\n      </ion-button>\n        <ion-title>Forgot Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"main_content_div\">\n\n      <div *ngIf=\"tabID == 1\">\n          <ion-input type=\"text\" placeholder=\"Email ID\"></ion-input>\n      \n          <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 2\">\n              Send Email\n          </ion-button>\n      </div>\n\n      <div *ngIf=\"tabID == 2\">\n          <ion-input type=\"text\" placeholder=\"Enter OTP\"></ion-input>\n      \n          <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 2\">\n              Verify OTP\n          </ion-button>\n\n          <ion-label class=\"resend_lbl\">Resend OTP</ion-label>\n      </div>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/forgot/forgot-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ForgotPageRoutingModule */

    /***/
    function srcAppPagesForgotForgotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
        return ForgotPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot.page */
      "./src/app/pages/forgot/forgot.page.ts");

      var routes = [{
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
      }];

      var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
        _classCallCheck(this, ForgotPageRoutingModule);
      };

      ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/forgot/forgot.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/forgot/forgot.module.ts ***!
      \***********************************************/

    /*! exports provided: ForgotPageModule */

    /***/
    function srcAppPagesForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
        return ForgotPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-routing.module */
      "./src/app/pages/forgot/forgot-routing.module.ts");
      /* harmony import */


      var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot.page */
      "./src/app/pages/forgot/forgot.page.ts");

      var ForgotPageModule = function ForgotPageModule() {
        _classCallCheck(this, ForgotPageModule);
      };

      ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
      })], ForgotPageModule);
      /***/
    },

    /***/
    "./src/app/pages/forgot/forgot.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/forgot/forgot.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #2d2d39;\n}\n\nion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n  padding-top: 100px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div ion-input {\n  background: #2d2d39;\n  border-radius: 5px;\n  height: 48px;\n  margin-bottom: 20px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.main_content_div ion-button {\n  margin: 0px;\n}\n\n.main_content_div .resend_lbl {\n  text-align: center;\n  color: var(--ion-color-primary);\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksY0FBQTtBQUNSOztBQUVJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBUjs7QUFJSTtFQUNJLFdBQUE7QUFGUjs7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmQyZDM5O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmQyZDM5O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgYmFja2dyb3VuZDogIzFjMWUyYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIH1cblxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5yZXNlbmRfbGJsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/forgot/forgot.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/forgot/forgot.page.ts ***!
      \*********************************************/

    /*! exports provided: ForgotPage */

    /***/
    function srcAppPagesForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
        return ForgotPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(navCtrl) {
          _classCallCheck(this, ForgotPage);

          this.navCtrl = navCtrl;
          this.tabID = 1;
        }

        _createClass(ForgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ForgotPage;
      }();

      ForgotPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot.page.scss */
        "./src/app/pages/forgot/forgot.page.scss"))["default"]]
      })], ForgotPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forgot-forgot-module-es5.js.map