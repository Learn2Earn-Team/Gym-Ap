(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-list-video-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-list/video-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-list/video-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main_content_div\">\n        <ion-icon class=\"back_image\" name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>\n\n        <video width=\"100%\" controls poster=\"assets/imgs/t4.jpg\">\n            <source src=\"assets/imgs/video.mp4\" type=\"video/mp4\">\n        </video>\n\n        <ion-label class=\"title_header\">Weight Loss</ion-label>\n\n        <div class=\"bottom_content_div\">\n            <div class=\"card_div\" *ngFor=\"let item of chapters\">\n                <div class=\"round_image\" [style.backgroundImage]=\"'url( '+ item.img +' )'\">\n                    <ion-icon name=\"play-circle-outline\"></ion-icon>\n                </div>\n                <div class=\"content_div\">\n                    <ion-label class=\"title_lbl\">{{item.name}}</ion-label>\n                    <ion-label class=\"small_lbl\">{{item.per}} min</ion-label>\n                </div>\n                <div class=\"action_div\">\n                    <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n                    <ion-icon name=\"heart-outline\"></ion-icon>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/video-list/video-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/video-list/video-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VideoListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPageRoutingModule", function() { return VideoListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _video_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-list.page */ "./src/app/pages/video-list/video-list.page.ts");




const routes = [
    {
        path: '',
        component: _video_list_page__WEBPACK_IMPORTED_MODULE_3__["VideoListPage"]
    }
];
let VideoListPageRoutingModule = class VideoListPageRoutingModule {
};
VideoListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/video-list/video-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/video-list/video-list.module.ts ***!
  \*******************************************************/
/*! exports provided: VideoListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPageModule", function() { return VideoListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _video_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-list-routing.module */ "./src/app/pages/video-list/video-list-routing.module.ts");
/* harmony import */ var _video_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-list.page */ "./src/app/pages/video-list/video-list.page.ts");







let VideoListPageModule = class VideoListPageModule {
};
VideoListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoListPageRoutingModule"]
        ],
        declarations: [_video_list_page__WEBPACK_IMPORTED_MODULE_6__["VideoListPage"]]
    })
], VideoListPageModule);



/***/ }),

/***/ "./src/app/pages/video-list/video-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/video-list/video-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_image {\n  color: white;\n  position: absolute;\n  left: 16px;\n  top: 16px;\n  font-size: 25px;\n  z-index: 9999;\n}\n.main_content_div video {\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main_content_div .title_header {\n  font-family: \"semi-bold\";\n  font-size: 18px;\n  padding: 16px;\n}\n.main_content_div .bottom_content_div {\n  padding: 16px;\n}\n.main_content_div .bottom_content_div ion-label {\n  display: block;\n}\n.main_content_div .bottom_content_div .card_div {\n  padding: 10px 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  position: relative;\n}\n.main_content_div .bottom_content_div .card_div .round_image {\n  height: 60px;\n  width: 80px;\n  min-width: 80px;\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .bottom_content_div .card_div .round_image ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 30px;\n}\n.main_content_div .bottom_content_div .card_div .content_div {\n  padding-left: 10px;\n  position: relative;\n}\n.main_content_div .bottom_content_div .card_div .content_div .title_lbl {\n  font-size: 16px;\n  font-family: \"medium\";\n}\n.main_content_div .bottom_content_div .card_div .content_div .small_lbl {\n  font-size: 12px;\n  color: gray;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.main_content_div .bottom_content_div .card_div .action_div {\n  position: absolute;\n  right: 0;\n}\n.main_content_div .bottom_content_div .card_div .action_div ion-icon {\n  color: white;\n  margin-left: 16px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8tbGlzdC92aWRlby1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUFSO0FBR0k7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7QUFGUjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBSVE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQUZaO0FBSVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUZoQjtBQUlnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFGcEI7QUFLWTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7QUFKaEI7QUFLZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFIcEI7QUFLZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQU1ZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBSmhCO0FBS2dCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgfVxuXG4gICAgdmlkZW97XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cblxuICAgIC50aXRsZV9oZWFkZXIge1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICAuYm90dG9tX2NvbnRlbnRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5yb3VuZF9pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIFxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgLnRpdGxlX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3Rpb25fZGl2IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/video-list/video-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/video-list/video-list.page.ts ***!
  \*****************************************************/
/*! exports provided: VideoListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListPage", function() { return VideoListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let VideoListPage = class VideoListPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.chapters = [
            {
                img: 'assets/imgs/t1.jpg',
                name: 'Body Building',
                per: 10
            },
            {
                img: 'assets/imgs/t2.jpg',
                name: 'Aerobics',
                per: 7
            },
            {
                img: 'assets/imgs/t3.jpg',
                name: 'Weight Loss',
                per: 15
            },
            {
                img: 'assets/imgs/t4.jpg',
                name: 'Body Fit',
                per: 20
            },
            {
                img: 'assets/imgs/t5.jpg',
                name: 'Body Building',
                per: 14
            },
            {
                img: 'assets/imgs/t6.jpg',
                name: 'Aerobics',
                per: 12
            },
            {
                img: 'assets/imgs/t7.jpg',
                name: 'Weight Loss',
                per: 17
            },
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
VideoListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
VideoListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-video-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./video-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-list/video-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./video-list.page.scss */ "./src/app/pages/video-list/video-list.page.scss")).default]
    })
], VideoListPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-list-video-list-module-es2015.js.map