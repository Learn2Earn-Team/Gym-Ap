(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      \n        <ion-tab-button tab=\"home\">\n            <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"programs\">\n            <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"search\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"trainers\">\n            <ion-icon name=\"people-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"profile\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n        </ion-tab-button>\n\n    </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppPagesTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/tabs/tabs.page.ts");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-home-module */
            "home-home-module").then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "./src/app/pages/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'programs',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | programs-programs-module */
            "programs-programs-module").then(__webpack_require__.bind(null,
            /*! ../programs/programs.module */
            "./src/app/pages/programs/programs.module.ts")).then(function (m) {
              return m.ProgramsPageModule;
            });
          }
        }, {
          path: 'search',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | search-search-module */
            "search-search-module").then(__webpack_require__.bind(null,
            /*! ../search/search.module */
            "./src/app/pages/search/search.module.ts")).then(function (m) {
              return m.SearchPageModule;
            });
          }
        }, {
          path: 'trainers',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | trainers-trainers-module */
            "trainers-trainers-module").then(__webpack_require__.bind(null,
            /*! ../trainers/trainers.module */
            "./src/app/pages/trainers/trainers.module.ts")).then(function (m) {
              return m.TrainersPageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | profile-profile-module */
            "profile-profile-module").then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "./src/app/pages/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'articles',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | articles-articles-module */
            "articles-articles-module").then(__webpack_require__.bind(null,
            /*! ../articles/articles.module */
            "./src/app/pages/articles/articles.module.ts")).then(function (m) {
              return m.ArticlesPageModule;
            });
          }
        }, {
          path: 'article-detail',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | article-detail-article-detail-module */
            "article-detail-article-detail-module").then(__webpack_require__.bind(null,
            /*! ../article-detail/article-detail.module */
            "./src/app/pages/article-detail/article-detail.module.ts")).then(function (m) {
              return m.ArticleDetailPageModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | settings-settings-module */
            "settings-settings-module").then(__webpack_require__.bind(null,
            /*! ../settings/settings.module */
            "./src/app/pages/settings/settings.module.ts")).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: 'trainer-profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | trainer-profile-trainer-profile-module */
            "trainer-profile-trainer-profile-module").then(__webpack_require__.bind(null,
            /*! ../trainer-profile/trainer-profile.module */
            "./src/app/pages/trainer-profile/trainer-profile.module.ts")).then(function (m) {
              return m.TrainerProfilePageModule;
            });
          }
        }, {
          path: 'edit-profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | edit-profile-edit-profile-module */
            "edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
            /*! ../edit-profile/edit-profile.module */
            "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
              return m.EditProfilePageModule;
            });
          }
        }, {
          path: 'reset-password',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | reset-password-reset-password-module */
            "reset-password-reset-password-module").then(__webpack_require__.bind(null,
            /*! ../reset-password/reset-password.module */
            "./src/app/pages/reset-password/reset-password.module.ts")).then(function (m) {
              return m.ResetPasswordPageModule;
            });
          }
        }, {
          path: 'notification',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | notification-notification-module */
            "notification-notification-module").then(__webpack_require__.bind(null,
            /*! ../notification/notification.module */
            "./src/app/pages/notification/notification.module.ts")).then(function (m) {
              return m.NotificationPageModule;
            });
          }
        }, {
          path: 'terms-conditions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | terms-conditions-terms-conditions-module */
            "terms-conditions-terms-conditions-module").then(__webpack_require__.bind(null,
            /*! ../terms-conditions/terms-conditions.module */
            "./src/app/pages/terms-conditions/terms-conditions.module.ts")).then(function (m) {
              return m.TermsConditionsPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.module.ts ***!
      \*******************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppPagesTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/pages/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 20px;\n}\n\nion-tabs {\n  text-align: center;\n}\n\nion-tab-bar {\n  width: 90%;\n  display: inline-flex;\n  margin: auto;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tdGFicyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLXRhYi1iYXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppPagesTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/pages/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map