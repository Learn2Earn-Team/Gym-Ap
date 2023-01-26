(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articles-articles-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/articles/articles.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/articles/articles.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesArticlesArticlesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n      <ion-title>Articles</ion-title>\n      <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n          <ion-icon name=\"map-outline\" style=\"font-size: 20px;\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"main_content_div\">\n\n      <ion-label class=\"title_lbl\">Recommended</ion-label>\n\n      <ion-slides pager=\"ios\">\n          <ion-slide *ngFor=\"let item of story\">\n              <div class=\"slide_back\" [style.backgroundImage]=\"'url('+ item.img +')'\">\n                  <ion-label>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ion-label>\n              </div>\n          </ion-slide>\n      </ion-slides>\n\n      <ion-label class=\"title_lbl\">New Articles</ion-label>\n\n      <div class=\"artical_div\">\n          <div class=\"artical_box\" *ngFor=\"let item of story\" (click)=\"goToArticleDetail()\">\n              <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n              <div class=\"detail_div\" style=\"padding-left: 16px;\">\n                  <ion-label class=\"bold_lbl\">Lorem ipsum dolor sit amet consectetur.</ion-label>\n                  <div class=\"flex_div\">\n                      <ion-label>5 min ago</ion-label>\n                      <ion-label>10 Comments</ion-label>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/articles/articles-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/articles/articles-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ArticlesPageRoutingModule */

    /***/
    function srcAppPagesArticlesArticlesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlesPageRoutingModule", function () {
        return ArticlesPageRoutingModule;
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


      var _articles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./articles.page */
      "./src/app/pages/articles/articles.page.ts");

      var routes = [{
        path: '',
        component: _articles_page__WEBPACK_IMPORTED_MODULE_3__["ArticlesPage"]
      }];

      var ArticlesPageRoutingModule = function ArticlesPageRoutingModule() {
        _classCallCheck(this, ArticlesPageRoutingModule);
      };

      ArticlesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ArticlesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/articles/articles.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/articles/articles.module.ts ***!
      \***************************************************/

    /*! exports provided: ArticlesPageModule */

    /***/
    function srcAppPagesArticlesArticlesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlesPageModule", function () {
        return ArticlesPageModule;
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


      var _articles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./articles-routing.module */
      "./src/app/pages/articles/articles-routing.module.ts");
      /* harmony import */


      var _articles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./articles.page */
      "./src/app/pages/articles/articles.page.ts");

      var ArticlesPageModule = function ArticlesPageModule() {
        _classCallCheck(this, ArticlesPageModule);
      };

      ArticlesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _articles_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticlesPageRoutingModule"]],
        declarations: [_articles_page__WEBPACK_IMPORTED_MODULE_6__["ArticlesPage"]]
      })], ArticlesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/articles/articles.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/articles/articles.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesArticlesArticlesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .title_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n  margin-bottom: 16px;\n  margin-top: 20px;\n  text-align: left;\n}\n\n.main_content_div .slide_back {\n  width: 100%;\n  height: 170px;\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  position: relative;\n}\n\n.main_content_div .slide_back ion-label {\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.main_content_div .artical_div .artical_box {\n  border-bottom: 1px solid #2d2d39;\n  display: flex;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.main_content_div .artical_div .artical_box .back_img {\n  height: 75px;\n  width: 75px;\n  min-width: 75px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .artical_div .artical_box .detail_div {\n  padding-left: 16px;\n  width: 100%;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .bold_lbl {\n  font-family: \"medium\";\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-align: left;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.main_content_div .artical_div .artical_box .detail_div .flex_div ion-label {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJ0aWNsZXMvYXJ0aWNsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFISjs7QUFLSTtFQUNJLGNBQUE7QUFIUjs7QUFNSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSlI7O0FBT0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTFo7O0FBWVE7RUFDSSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVlo7O0FBWVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQVZoQjs7QUFhWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVhoQjs7QUFhZ0I7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWHBCOztBQWNnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFacEI7O0FBY29CO0VBQ0ksZUFBQTtBQVp4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGVzL2FydGljbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6ICMyZDJkMzk7XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyZDJkMzk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWMxZTJhO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnRpdGxlX2xibCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC5zbGlkZV9iYWNrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFydGljYWxfZGl2IHtcbiAgICAgICAgLy8gcGFkZGluZzogMTZweDtcblxuICAgICAgICAuYXJ0aWNhbF9ib3gge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZDJkMzk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgLmJhY2tfaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5mbGV4X2RpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/articles/articles.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/articles/articles.page.ts ***!
      \*************************************************/

    /*! exports provided: ArticlesPage */

    /***/
    function srcAppPagesArticlesArticlesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlesPage", function () {
        return ArticlesPage;
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

      var ArticlesPage = /*#__PURE__*/function () {
        function ArticlesPage(navCtrl, route) {
          _classCallCheck(this, ArticlesPage);

          this.navCtrl = navCtrl;
          this.route = route;
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

        _createClass(ArticlesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToArticleDetail",
          value: function goToArticleDetail() {
            this.route.navigate(['tabs/article-detail']);
          }
        }]);

        return ArticlesPage;
      }();

      ArticlesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ArticlesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-articles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./articles.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/articles/articles.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./articles.page.scss */
        "./src/app/pages/articles/articles.page.scss"))["default"]]
      })], ArticlesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=articles-articles-module-es5.js.map