(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"map-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        \n        <div class=\"user_div\">\n            <div class=\"user_flex\">\n                <div class=\"border_div\">\n                    <div class=\"back_user\" [style.backgroundImage]=\"'url(assets/imgs/t1.jpg)'\"></div>\n                </div>\n                <div class=\"user_detail\">\n                    <ion-label class=\"bold_lbl\">Piff Jenkins</ion-label>\n                    <ion-label class=\"small_lbl\">@piffjenkins</ion-label>\n                </div>\n            </div>\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"goToEditProfile()\">\n                Edit Profile\n            </ion-button>\n        </div>\n\n        <div class=\"bottom_div\">\n\n            <div class=\"segment_flex\">\n                <div (click)=\"changeSegment('program')\">\n                    <ion-label [class.active]=\"tabID == 'program'\">My Programs</ion-label>\n                    <ion-label [class.active]=\"tabID == 'program'\">27</ion-label>\n                </div>\n                <div (click)=\"changeSegment('trainer')\">\n                    <ion-label [class.active]=\"tabID == 'trainer'\">My Trainers</ion-label>\n                    <ion-label [class.active]=\"tabID == 'trainer'\">10</ion-label>\n                </div>\n            </div>\n\n            <div class=\"program_segment\" *ngIf=\"tabID == 'program'\">\n\n                <div class=\"program_div\" *ngFor=\"let item of story\">\n                    <div class=\"main_flex\">\n                        <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                        <div class=\"detail_div\">\n                            <ion-label class=\"name_lbl\">Penny Tool</ion-label>\n                            <ion-label class=\"small_lbl\">Aerobics</ion-label>\n                            <div class=\"addr_div\">\n                                <ion-icon name=\"navigate-outline\"></ion-icon>\n                                <ion-label>Eva surbhi complex, aksharwadi road, Bhavnagar - 364001</ion-label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"detail_flex\">\n                        <ion-label>March 31, 2020 / 09:00 AM</ion-label>\n                        <ion-label style=\"color: var(--ion-color-primary);\">More...</ion-label>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"trainer_segment\" *ngIf=\"tabID == 'trainer'\">\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let item of story\" (click)=\"goToTrainerProfile()\">\n                      <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                      <ion-label class=\"bold_lbl\">Brandon Guidelines</ion-label>\n                      <ion-label class=\"small_lbl\">Bodyfit</ion-label>\n                  </ion-col>\n                </ion-row>\n            </div>\n\n        </div>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/profile/profile-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .user_div {\n  border-bottom: 1px solid #2d2d39;\n}\n\n.main_content_div .user_div .user_flex {\n  display: flex;\n  align-items: center;\n}\n\n.main_content_div .user_div .user_flex .border_div {\n  height: 90px;\n  width: 90px;\n  min-width: 90px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n\n.main_content_div .user_div .user_flex .border_div .back_user {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: 2px solid white;\n  border-radius: 3px;\n}\n\n.main_content_div .user_div .user_flex .user_detail {\n  padding-left: 16px;\n  width: 100%;\n}\n\n.main_content_div .user_div .user_flex .user_detail .bold_lbl {\n  text-align: center;\n  font-family: \"medium\";\n  letter-spacing: 1px;\n}\n\n.main_content_div .user_div .user_flex .user_detail .small_lbl {\n  text-align: center;\n  font-size: 14px;\n  color: grey;\n}\n\n.main_content_div .user_div ion-button {\n  width: 270px;\n  display: block;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .bottom_div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.main_content_div .bottom_div .segment_flex {\n  display: flex;\n  justify-content: space-around;\n}\n\n.main_content_div .bottom_div .segment_flex ion-label {\n  text-align: center;\n  font-size: 15px;\n  font-family: \"medium\";\n  letter-spacing: 1px;\n  color: grey;\n}\n\n.main_content_div .bottom_div .segment_flex .active {\n  color: white;\n}\n\n.main_content_div .bottom_div .program_segment .program_div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #2d2d39;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex {\n  display: flex;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .back_img {\n  width: 90px;\n  height: 90px;\n  min-width: 90px;\n  border-radius: 10px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div {\n  padding-left: 16px;\n  text-align: left;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .name_lbl {\n  font-size: 15px;\n  color: grey;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .small_lbl {\n  font-size: 13px;\n  color: grey;\n  font-family: \"medium\";\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .addr_div {\n  display: flex;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .addr_div ion-icon {\n  color: grey;\n  font-size: 23px;\n  margin-right: 10px;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .addr_div ion-label {\n  font-size: 12px;\n  color: grey;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .detail_flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .detail_flex ion-label {\n  font-size: 14px;\n  color: grey;\n}\n\n.main_content_div .bottom_div .trainer_segment {\n  margin-top: 16px;\n}\n\n.main_content_div .bottom_div .trainer_segment ion-row {\n  padding: 0px;\n}\n\n.main_content_div .bottom_div .trainer_segment ion-row .back_img {\n  width: 100%;\n  height: 120px;\n  border-radius: 10px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .bottom_div .trainer_segment ion-row .bold_lbl {\n  font-size: 15px;\n  font-family: \"semi-bold\";\n  color: grey;\n  margin-top: 5px;\n}\n\n.main_content_div .bottom_div .trainer_segment ion-row .small_lbl {\n  font-size: 13px;\n  color: grey;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSxjQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQ0FBQTtBQUFSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQVo7O0FBRVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBQWhCOztBQUVnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFwQjs7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUZoQjs7QUFJZ0I7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFGcEI7O0FBS2dCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhwQjs7QUFRUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOWjs7QUFVSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFSUjs7QUFVUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQVJaOztBQVVZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFSaEI7O0FBV1k7RUFDSSxZQUFBO0FBVGhCOztBQWNZO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBWmhCOztBQWNnQjtFQUNJLGFBQUE7QUFacEI7O0FBYW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFYeEI7O0FBYW9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVh4Qjs7QUFhd0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBWDVCOztBQWN3QjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFaNUI7O0FBZXdCO0VBQ0ksYUFBQTtBQWI1Qjs7QUFjNEI7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWmhDOztBQWM0QjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBWmhDOztBQW1CZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBakJwQjs7QUFtQm9CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFqQnhCOztBQXVCUTtFQUNJLGdCQUFBO0FBckJaOztBQXNCWTtFQUNJLFlBQUE7QUFwQmhCOztBQXNCZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBcEJwQjs7QUFzQmdCO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFwQnBCOztBQXNCZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBcEJwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmQyZDM5O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgYmFja2dyb3VuZDogIzFjMWUyYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC51c2VyX2RpdiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQyZDM5O1xuXG4gICAgICAgIC51c2VyX2ZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5ib3JkZXJfZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAuYmFja191c2VyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXJfZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b21fZGl2IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5zZWdtZW50X2ZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmFtX3NlZ21lbnQge1xuICAgICAgICAgICAgLnByb2dyYW1fZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJkMmQzOTtcblxuICAgICAgICAgICAgICAgIC5tYWluX2ZsZXgge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAuYmFja19pbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRldGFpbF9kaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkcl9kaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmRldGFpbF9mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFpbmVyX3NlZ21lbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICAgICAgICAgIC5iYWNrX2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2xkX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(route) {
          _classCallCheck(this, ProfilePage);

          this.route = route;
          this.tabID = 'program';
          this.story = [{
            img: 'assets/imgs/t1.jpg',
            name: 'pennytool'
          }, {
            img: 'assets/imgs/t2.jpg',
            name: 'pelicansteve'
          }, {
            img: 'assets/imgs/t3.jpg',
            name: 'Jackweary'
          }, {
            img: 'assets/imgs/t4.jpg',
            name: 'pennytool'
          }, {
            img: 'assets/imgs/t5.jpg',
            name: 'pelicansteve'
          }, {
            img: 'assets/imgs/t6.jpg',
            name: 'Jackweary'
          }, {
            img: 'assets/imgs/t7.jpg',
            name: 'pennytool'
          }];
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeSegment",
          value: function changeSegment(val) {
            this.tabID = val;
          }
        }, {
          key: "goToEditProfile",
          value: function goToEditProfile() {
            this.route.navigate(['tabs/edit-profile']);
          }
        }, {
          key: "goToTrainerProfile",
          value: function goToTrainerProfile() {
            this.route.navigate(['tabs/trainer-profile']);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map