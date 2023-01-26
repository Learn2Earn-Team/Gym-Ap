(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-conditions-terms-conditions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTermsConditionsTermsConditionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n      <ion-button (click)=\"goToBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;\"></ion-icon>\n      </ion-button>\n      <ion-title>Terms &Conditions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-label class=\"header_lbl\">Last Update : 27/09/2020</ion-label>\n\n    <ion-label>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae exercitationem quam \n      totam sint labore maiores nam laborum?\n    </ion-label>\n\n    <ul>\n        <li>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis labore?\n        </li>\n\n        <li>\n            Debitis in cum rem fugit possimus, assumenda molestias totam ipsam.\n        </li>\n\n        <li>\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta suscipit.\n        </li>\n    </ul>\n\n    <ion-label>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis labore? Debitis in cum rem \n      fugit possimus, assumenda molestias totam ipsam repellat?\n    </ion-label>\n\n    <ion-label>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta suscipit nisi fugit nihil,\n       fuga, sit alias.\n    </ion-label>\n\n    <ion-label>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt dolorum, aut iusto vitae omnis suscipit\n      molestiae est.\n    </ion-label>\n\n    <ion-label>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati assumenda quod \n      officia nesciunt excepturi nihil.\n    </ion-label>\n\n    <ion-label>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur enim aliquid.\n    </ion-label>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/terms-conditions/terms-conditions-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: TermsConditionsPageRoutingModule */

    /***/
    function srcAppPagesTermsConditionsTermsConditionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPageRoutingModule", function () {
        return TermsConditionsPageRoutingModule;
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


      var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./terms-conditions.page */
      "./src/app/pages/terms-conditions/terms-conditions.page.ts");

      var routes = [{
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__["TermsConditionsPage"]
      }];

      var TermsConditionsPageRoutingModule = function TermsConditionsPageRoutingModule() {
        _classCallCheck(this, TermsConditionsPageRoutingModule);
      };

      TermsConditionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsConditionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/terms-conditions/terms-conditions.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions.module.ts ***!
      \*******************************************************************/

    /*! exports provided: TermsConditionsPageModule */

    /***/
    function srcAppPagesTermsConditionsTermsConditionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function () {
        return TermsConditionsPageModule;
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


      var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./terms-conditions-routing.module */
      "./src/app/pages/terms-conditions/terms-conditions-routing.module.ts");
      /* harmony import */


      var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./terms-conditions.page */
      "./src/app/pages/terms-conditions/terms-conditions.page.ts");

      var TermsConditionsPageModule = function TermsConditionsPageModule() {
        _classCallCheck(this, TermsConditionsPageModule);
      };

      TermsConditionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsConditionsPageRoutingModule"]],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
      })], TermsConditionsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/terms-conditions/terms-conditions.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTermsConditionsTermsConditionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n  padding-top: 20px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .header_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n  padding: 7px 40px;\n  text-align: center;\n  background: #2d2d39;\n  border-radius: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.main_content_div ion-label {\n  font-size: 15px;\n  margin-bottom: 16px;\n  font-family: \"medium\";\n  text-align: left;\n}\n\n.main_content_div ul {\n  padding-left: 20px;\n}\n\n.main_content_div ul ::marker {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\n.main_content_div ul li {\n  font-size: 15px;\n  margin-bottom: 16px;\n  font-family: \"medium\";\n  color: white;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBUjs7QUFHSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFJSTtFQUNJLGtCQUFBO0FBRlI7O0FBSVE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFGWjs7QUFNUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzJkMmQzOTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICAgIGJhY2tncm91bmQ6ICMxYzFlMmE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaGVhZGVyX2xibCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBwYWRkaW5nOiA3cHggNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICAgICA6Om1hcmtlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/terms-conditions/terms-conditions.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/terms-conditions/terms-conditions.page.ts ***!
      \*****************************************************************/

    /*! exports provided: TermsConditionsPage */

    /***/
    function srcAppPagesTermsConditionsTermsConditionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function () {
        return TermsConditionsPage;
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

      var TermsConditionsPage = /*#__PURE__*/function () {
        function TermsConditionsPage(navCtrl) {
          _classCallCheck(this, TermsConditionsPage);

          this.navCtrl = navCtrl;
        }

        _createClass(TermsConditionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }]);

        return TermsConditionsPage;
      }();

      TermsConditionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      TermsConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-terms-conditions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./terms-conditions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./terms-conditions.page.scss */
        "./src/app/pages/terms-conditions/terms-conditions.page.scss"))["default"]]
      })], TermsConditionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=terms-conditions-terms-conditions-module-es5.js.map