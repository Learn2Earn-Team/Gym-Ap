(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Search</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"map-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <div id=\"map\"></div>\n\n        <div class=\"search_div\">\n            <ion-input type=\"text\" placeholder=\"Search\">\n                <ion-icon name=\"search\"></ion-icon>\n            </ion-input>\n        </div>\n\n        <div class=\"slider_div\">\n            <div class=\"slide_box\" *ngFor=\"let item of story\" (click)=\"goToTrainer()\">\n                <div class=\"image_div\">\n                    <div class=\"rate_lbl\">\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-label>4.5</ion-label>\n                    </div>\n                    <div class=\"round_user\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\n                    <ion-label class=\"name_lbl\">Pennytool</ion-label>\n                </div>\n                <div class=\"detail_div\">\n                    <ion-icon name=\"call-outline\"></ion-icon>\n                    <ion-label>9876543212</ion-label>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/search/search-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/search/search-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SearchPageRoutingModule */

    /***/
    function srcAppPagesSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
        return SearchPageRoutingModule;
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


      var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/pages/search/search.page.ts");

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
      }];

      var SearchPageRoutingModule = function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      };

      SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/search/search.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.module.ts ***!
      \***********************************************/

    /*! exports provided: SearchPageModule */

    /***/
    function srcAppPagesSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
        return SearchPageModule;
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


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-routing.module */
      "./src/app/pages/search/search-routing.module.ts");
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/pages/search/search.page.ts");

      var SearchPageModule = function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      };

      SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
      })], SearchPageModule);
      /***/
    },

    /***/
    "./src/app/pages/search/search.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main_content_div #map {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\n\n.main_content_div #map.show-map {\n  opacity: 1;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .search_div {\n  padding: 16px;\n}\n\n.main_content_div .search_div ion-input {\n  border-radius: 10px;\n  background: #2d2d39;\n  color: grey;\n  text-align: left;\n  --padding-start: 8px;\n  font-family: \"regular\";\n  color: white;\n}\n\n.main_content_div .search_div ion-input ion-icon {\n  color: grey;\n  margin-left: 16px;\n}\n\n.main_content_div .slider_div {\n  padding: 16px;\n  display: flex;\n  overflow: scroll;\n}\n\n.main_content_div .slider_div .slide_box {\n  background: #2d2d39;\n  border-radius: 10px;\n  padding: 10px;\n  width: 160px;\n  min-width: 160px;\n  margin-right: 16px;\n}\n\n.main_content_div .slider_div .slide_box .image_div {\n  position: relative;\n  padding-bottom: 10px;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_content_div .slider_div .slide_box .image_div .rate_lbl {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  right: 0px;\n}\n\n.main_content_div .slider_div .slide_box .image_div .rate_lbl ion-icon {\n  font-size: 10px;\n  color: orange;\n}\n\n.main_content_div .slider_div .slide_box .image_div .rate_lbl ion-label {\n  font-size: 13px;\n  margin-left: 7px;\n}\n\n.main_content_div .slider_div .slide_box .image_div .round_user {\n  width: 50px;\n  height: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\n.main_content_div .slider_div .slide_box .image_div .name_lbl {\n  font-size: 14px;\n  text-align: center;\n}\n\n.main_content_div .slider_div .slide_box .detail_div {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n\n.main_content_div .slider_div .slide_box .detail_div ion-icon {\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .slider_div .slide_box .detail_div ion-label {\n  font-size: 14px;\n  margin-left: 7px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFFUjs7QUFEUTtFQUNJLFVBQUE7QUFHWjs7QUFBSTtFQUNJLGNBQUE7QUFFUjs7QUFDSTtFQUNJLGFBQUE7QUFDUjs7QUFDUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNaOztBQUFZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRWhCOztBQUdJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURSOztBQUdRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURaOztBQUdZO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRGhCOztBQUdnQjtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQURwQjs7QUFHb0I7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUR4Qjs7QUFHb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEeEI7O0FBS2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIcEI7O0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBSHBCOztBQU1ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKaEI7O0FBTWdCO0VBQ0ksK0JBQUE7QUFKcEI7O0FBT2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFMcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyZDJkMzk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWMxZTJhO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAjbWFwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgJi5zaG93LW1hcCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zZWFyY2hfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgICAgICAuc2xpZGVfYm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICAgICAgICAgIC5pbWFnZV9kaXYge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLnJhdGVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucm91bmRfdXNlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmFtZV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/search/search.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/search/search.page.ts ***!
      \*********************************************/

    /*! exports provided: SearchPage */

    /***/
    function srcAppPagesSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
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

      var SearchPage = /*#__PURE__*/function () {
        function SearchPage(router) {
          _classCallCheck(this, SearchPage);

          this.router = router;
          this.map = null;
          this.markers = [{
            position: {
              lat: 4.658383846282959,
              lng: -74.09394073486328
            },
            title: 'Parque Simón Bolivar'
          }, {
            position: {
              lat: 4.667945861816406,
              lng: -74.09964752197266
            },
            title: 'Jardín Botánico'
          }, {
            position: {
              lat: 4.676802158355713,
              lng: -74.04825592041016
            },
            title: 'Parque la 93'
          }, {
            position: {
              lat: 4.6554284,
              lng: -74.1094989
            },
            title: 'Maloka'
          }];
          this.story = ['assets/imgs/t1.jpg', 'assets/imgs/t2.jpg', 'assets/imgs/t3.jpg', 'assets/imgs/t4.jpg', 'assets/imgs/t5.jpg', 'assets/imgs/t6.jpg', 'assets/imgs/t7.jpg'];
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initMap();
          }
        }, {
          key: "goToTrainer",
          value: function goToTrainer() {
            this.router.navigate(['/tabs/trainer-profile']);
          }
        }, {
          key: "initMap",
          value: function initMap() {
            var _this = this;

            var mapEle = document.getElementById('map'); // create LatLng object

            var myLatLng = {
              lat: 4.658383846282959,
              lng: -74.09394073486328
            }; // create map

            this.map = new google.maps.Map(mapEle, {
              center: myLatLng,
              zoom: 12
            });
            google.maps.event.addListenerOnce(this.map, 'idle', function () {
              _this.renderMarkers();

              mapEle.classList.add('show-map');
            });
          }
        }, {
          key: "renderMarkers",
          value: function renderMarkers() {
            var _this2 = this;

            this.markers.forEach(function (marker) {
              _this2.addMarker(marker);
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(marker) {
            return new google.maps.Marker({
              position: marker.position,
              map: this.map,
              title: marker.title
            });
          }
        }]);

        return SearchPage;
      }();

      SearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.page.scss */
        "./src/app/pages/search/search.page.scss"))["default"]]
      })], SearchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-search-module-es5.js.map