(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["programs-programs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/programs/programs.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/programs/programs.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProgramsProgramsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Programs</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"map-outline\" style=\"font-size: 20px;\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n    <div class=\"main_content_div\">\n\n        <div class=\"header_flex\" style=\"margin-bottom: 16px;\">\n            <ion-label class=\"title_lbl\">New Realeases</ion-label>\n            <ion-label class=\"more_lbl\">More</ion-label>\n        </div>\n  \n        <ion-slides pager=\"ios\">\n            <ion-slide *ngFor=\"let item of (story | slice: 0: 3)\">\n                <div class=\"slide_back\" [style.backgroundImage]=\"'url('+ item.img +')'\">\n                    <ion-label>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ion-label>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <div class=\"header_flex\" style=\"margin-top: 20px;\">\n            <ion-label class=\"title_lbl\">Categories</ion-label>\n        </div>\n  \n        <div class=\"artical_div\">\n            <div class=\"artical_box\" *ngFor=\"let item of story\" (click)=\"goToVideoList()\">\n                <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                <div class=\"detail_div\" style=\"padding-left: 16px;\">\n                    <ion-label class=\"bold_lbl\">{{item.name}}</ion-label>\n                    <div class=\"flex_div\">\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star-outline\"></ion-icon>\n                        <ion-label>(10 Comments)</ion-label>\n                    </div>\n                    <ion-label class=\"simp_lbl\">30 Lessons</ion-label>\n                </div>\n            </div>\n        </div>\n  \n    </div>\n  </ion-content>\n  ";
      /***/
    },

    /***/
    "./src/app/pages/programs/programs-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/programs/programs-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ProgramsPageRoutingModule */

    /***/
    function srcAppPagesProgramsProgramsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramsPageRoutingModule", function () {
        return ProgramsPageRoutingModule;
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


      var _programs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./programs.page */
      "./src/app/pages/programs/programs.page.ts");

      var routes = [{
        path: '',
        component: _programs_page__WEBPACK_IMPORTED_MODULE_3__["ProgramsPage"]
      }];

      var ProgramsPageRoutingModule = function ProgramsPageRoutingModule() {
        _classCallCheck(this, ProgramsPageRoutingModule);
      };

      ProgramsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProgramsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/programs/programs.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/programs/programs.module.ts ***!
      \***************************************************/

    /*! exports provided: ProgramsPageModule */

    /***/
    function srcAppPagesProgramsProgramsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramsPageModule", function () {
        return ProgramsPageModule;
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


      var _programs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./programs-routing.module */
      "./src/app/pages/programs/programs-routing.module.ts");
      /* harmony import */


      var _programs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./programs.page */
      "./src/app/pages/programs/programs.page.ts");

      var ProgramsPageModule = function ProgramsPageModule() {
        _classCallCheck(this, ProgramsPageModule);
      };

      ProgramsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _programs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramsPageRoutingModule"]],
        declarations: [_programs_page__WEBPACK_IMPORTED_MODULE_6__["ProgramsPage"]]
      })], ProgramsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/programs/programs.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/programs/programs.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProgramsProgramsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .header_flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main_content_div .header_flex .title_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n\n.main_content_div .header_flex .more_lbl {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .slide_back {\n  width: 100%;\n  height: 170px;\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  position: relative;\n}\n\n.main_content_div .slide_back ion-label {\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.main_content_div .artical_div .artical_box {\n  border-bottom: 1px solid #2d2d39;\n  display: flex;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.main_content_div .artical_div .artical_box .back_img {\n  height: 90px;\n  width: 90px;\n  min-width: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .artical_div .artical_box .detail_div {\n  padding-left: 16px;\n  width: 100%;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .bold_lbl {\n  font-family: \"medium\";\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-bottom: 5px;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .simp_lbl {\n  font-size: 13px;\n  text-align: left;\n  margin-bottom: 5px;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .flex_div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .flex_div ion-icon {\n  color: orange;\n  margin-right: 3px;\n  font-size: 13px;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .flex_div ion-label {\n  font-size: 13px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbXMvcHJvZ3JhbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFISjs7QUFLSTtFQUNJLGNBQUE7QUFIUjs7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSlI7O0FBTVE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpaOztBQVVRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBUlo7O0FBY0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBWlI7O0FBY1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWlo7O0FBbUJRO0VBQ0ksZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWpCWjs7QUFtQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQWpCaEI7O0FBb0JZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBbEJoQjs7QUFvQmdCO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbEJwQjs7QUFxQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQnBCOztBQXNCZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXBCcEI7O0FBdUJvQjtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFyQnhCOztBQXdCb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUF0QnhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZ3JhbXMvcHJvZ3JhbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzJkMmQzOTtcbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzJkMmQzOTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICAgIGJhY2tncm91bmQ6ICMxYzFlMmE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaGVhZGVyX2ZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIC50aXRsZV9sYmwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb3JlX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICAuc2xpZGVfYmFjayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hcnRpY2FsX2RpdiB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgLmFydGljYWxfYm94IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQyZDM5O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgICAgIC5iYWNrX2ltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRldGFpbF9kaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5ib2xkX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNpbXBfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5mbGV4X2RpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/programs/programs.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/programs/programs.page.ts ***!
      \*************************************************/

    /*! exports provided: ProgramsPage */

    /***/
    function srcAppPagesProgramsProgramsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgramsPage", function () {
        return ProgramsPage;
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProgramsPage = /*#__PURE__*/function () {
        function ProgramsPage(navCtrl, route) {
          _classCallCheck(this, ProgramsPage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.story = [{
            img: 'assets/imgs/t1.jpg',
            name: 'Weight Loss'
          }, {
            img: 'assets/imgs/t2.jpg',
            name: 'Aerobics'
          }, {
            img: 'assets/imgs/t3.jpg',
            name: 'Body Building'
          }, {
            img: 'assets/imgs/t4.jpg',
            name: 'Body Fit'
          }, {
            img: 'assets/imgs/t5.jpg',
            name: 'Weight Loss'
          }, {
            img: 'assets/imgs/t6.jpg',
            name: 'Aerobics'
          }, {
            img: 'assets/imgs/t7.jpg',
            name: 'Body Building'
          }];
        }

        _createClass(ProgramsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToVideoList",
          value: function goToVideoList() {
            this.route.navigate(['/video-list']);
          }
        }]);

        return ProgramsPage;
      }();

      ProgramsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ProgramsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-programs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./programs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/programs/programs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./programs.page.scss */
        "./src/app/pages/programs/programs.page.scss"))["default"]]
      })], ProgramsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=programs-programs-module-es5.js.map