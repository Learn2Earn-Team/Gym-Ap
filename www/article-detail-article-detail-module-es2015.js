(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-detail-article-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/article-detail/article-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/article-detail/article-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n        <ion-button (click)=\"goToBack()\" fill=\"clear\" slot=\"start\">\n            <ion-icon name=\"arrow-back\" style=\"font-size: 26px;\"></ion-icon>\n        </ion-button>\n        <ion-title>Articles</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"map-outline\" style=\"font-size: 20px;\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/t2.jpg)'\"></div>\n        <div class=\"content_div\">\n\n            <div class=\"user_div\">\n                <div [style.backgroundImage]=\"'url(assets/imgs/t2.jpg)'\" class=\"round_user\"></div>\n                <div class=\"user_detail\">\n                    <ion-label class=\"name_lbl\">Penny Tool</ion-label>\n                    <ion-label class=\"small_lbl\">Aerobics</ion-label>\n                </div>\n                <div class=\"icn_div\">\n                    <ion-icon name=\"share-social-outline\"></ion-icon>\n                    <ion-icon name=\"bookmark-outline\"></ion-icon>\n                </div>\n            </div>\n\n            <ion-label>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae exercitationem quam\n              totam sint labore maiores nam laborum?\n            </ion-label>\n\n            <ion-label>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis labore? Debitis in cum rem\n              fugit possimus, assumenda molestias totam ipsam repellat?\n            </ion-label>\n\n            <ion-label>\n              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta suscipit nisi fugit nihil,\n              fuga, sit alias.\n            </ion-label>\n\n        </div>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/article-detail/article-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/article-detail/article-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ArticleDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailPageRoutingModule", function() { return ArticleDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _article_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-detail.page */ "./src/app/pages/article-detail/article-detail.page.ts");




const routes = [
    {
        path: '',
        component: _article_detail_page__WEBPACK_IMPORTED_MODULE_3__["ArticleDetailPage"]
    }
];
let ArticleDetailPageRoutingModule = class ArticleDetailPageRoutingModule {
};
ArticleDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArticleDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/article-detail/article-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/article-detail/article-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ArticleDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailPageModule", function() { return ArticleDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _article_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-detail-routing.module */ "./src/app/pages/article-detail/article-detail-routing.module.ts");
/* harmony import */ var _article_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-detail.page */ "./src/app/pages/article-detail/article-detail.page.ts");







let ArticleDetailPageModule = class ArticleDetailPageModule {
};
ArticleDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _article_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailPageRoutingModule"]
        ],
        declarations: [_article_detail_page__WEBPACK_IMPORTED_MODULE_6__["ArticleDetailPage"]]
    })
], ArticleDetailPageModule);



/***/ }),

/***/ "./src/app/pages/article-detail/article-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/article-detail/article-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\n.main_content_div ion-label {\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .back_img {\n  width: 100%;\n  height: 270px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .content_div {\n  padding: 16px;\n}\n\n.main_content_div .content_div .user_div {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.main_content_div .content_div .user_div .round_user {\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .content_div .user_div .user_detail {\n  padding-left: 10px;\n}\n\n.main_content_div .content_div .user_div .user_detail .name_lbl {\n  font-size: 15px;\n  color: grey;\n  font-family: \"semi-bold\";\n  margin-bottom: 0px !important;\n}\n\n.main_content_div .content_div .user_div .user_detail .small_lbl {\n  font-size: 13px;\n  color: grey;\n  font-family: \"medium\";\n  margin-bottom: 0px !important;\n}\n\n.main_content_div .content_div .user_div .icn_div {\n  position: absolute;\n  right: 10px;\n}\n\n.main_content_div .content_div .user_div .icn_div ion-icon {\n  color: grey;\n  font-size: 20px;\n  margin-left: 16px;\n}\n\n.main_content_div .content_div ion-label {\n  font-size: 15px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUhKOztBQUtJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSFI7O0FBTUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFKUjs7QUFPSTtFQUNJLGFBQUE7QUFMUjs7QUFPUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxaOztBQU9ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUxoQjs7QUFRWTtFQUNJLGtCQUFBO0FBTmhCOztBQU9nQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUxwQjs7QUFRZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFOcEI7O0FBU1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFQaEI7O0FBUWdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5wQjs7QUFXUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQVRaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzJkMmQzOTtcbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzJkMmQzOTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICAgIGJhY2tncm91bmQ6ICMxYzFlMmE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjcwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAudXNlcl9kaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAucm91bmRfdXNlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXJfZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNuX2RpdiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAvLyBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/article-detail/article-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/article-detail/article-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: ArticleDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailPage", function() { return ArticleDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ArticleDetailPage = class ArticleDetailPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCtrl.back();
    }
};
ArticleDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ArticleDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./article-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/article-detail/article-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./article-detail.page.scss */ "./src/app/pages/article-detail/article-detail.page.scss")).default]
    })
], ArticleDetailPage);



/***/ })

}]);
//# sourceMappingURL=article-detail-article-detail-module-es2015.js.map