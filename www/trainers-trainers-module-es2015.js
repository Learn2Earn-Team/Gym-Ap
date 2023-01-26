(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trainers-trainers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainers/trainers.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainers/trainers.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Trainers</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"map-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <div class=\"main_content_div\">\n\n        <ion-label class=\"title_lbl\" style=\"padding: 16px;padding-bottom: 0px;\">Online Personal Trainers</ion-label>\n\n        <div class=\"story_div\">\n            <div class=\"outer_div\" *ngFor=\"let item of story\">\n                <div class=\"user_div\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                <div class=\"status_div\"></div>\n            </div>\n        </div>\n\n        <div class=\"trainer_div\">\n\n            <ion-label class=\"title_lbl\" style=\"margin-bottom: 20px;\">Nearby Personal Trainers</ion-label>\n\n            <div class=\"trainer_box\" *ngFor=\"let item of story\" (click)=\"goToTrainerProfile()\">\n                <div class=\"upper_flex\">\n                    <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                    <div class=\"trainer_detail\">\n                        <ion-label class=\"bold_lbl\">Brandon Guidelines</ion-label>\n                        <ion-label class=\"small_grey\">Core Conditioning</ion-label>\n                        <div class=\"addr_div\">\n                            <ion-icon name=\"location-outline\"></ion-icon>\n                            <ion-label>Bhavnagar, Gujarat, 364001</ion-label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"lower_flex\">\n                    <ion-label>$ 300</ion-label>\n                    <ion-button shape=\"round\" size=\"small\">\n                        Follow\n                    </ion-button>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/trainers/trainers-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/trainers/trainers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TrainersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersPageRoutingModule", function() { return TrainersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _trainers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trainers.page */ "./src/app/pages/trainers/trainers.page.ts");




const routes = [
    {
        path: '',
        component: _trainers_page__WEBPACK_IMPORTED_MODULE_3__["TrainersPage"]
    }
];
let TrainersPageRoutingModule = class TrainersPageRoutingModule {
};
TrainersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trainers/trainers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/trainers/trainers.module.ts ***!
  \***************************************************/
/*! exports provided: TrainersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersPageModule", function() { return TrainersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _trainers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainers-routing.module */ "./src/app/pages/trainers/trainers-routing.module.ts");
/* harmony import */ var _trainers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainers.page */ "./src/app/pages/trainers/trainers.page.ts");







let TrainersPageModule = class TrainersPageModule {
};
TrainersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trainers_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainersPageRoutingModule"]
        ],
        declarations: [_trainers_page__WEBPACK_IMPORTED_MODULE_6__["TrainersPage"]]
    })
], TrainersPageModule);



/***/ }),

/***/ "./src/app/pages/trainers/trainers.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/trainers/trainers.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .title_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n  text-align: left;\n}\n\n.main_content_div .story_div {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  overflow: scroll;\n  border-bottom: 1px solid #2d2d39;\n}\n\n.main_content_div .story_div .outer_div {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border: 2px solid var(--ion-color-primary);\n  background: white;\n  border-radius: 100%;\n  position: relative;\n  margin-right: 16px;\n}\n\n.main_content_div .story_div .outer_div .user_div {\n  height: 42px;\n  width: 42px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main_content_div .story_div .outer_div .status_div {\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background: green;\n  position: absolute;\n  bottom: 0;\n  right: 3px;\n}\n\n.main_content_div .story_div .trainer_story_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.main_content_div .story_div .trainer_story_div ion-label {\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.main_content_div .trainer_div {\n  padding: 16px;\n}\n\n.main_content_div .trainer_div .trainer_box {\n  background: #2d2d39;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 16px;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex {\n  display: flex;\n  position: relative;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .back_img {\n  height: 70px;\n  width: 70px;\n  min-width: 70px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .trainer_detail {\n  padding-left: 16px;\n  text-align: left;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .trainer_detail .bold_lbl {\n  font-family: \"medium\";\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .trainer_detail .small_grey {\n  font-size: 12px;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .trainer_detail .addr_div {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .trainer_detail .addr_div ion-icon {\n  color: grey;\n  font-size: 18px;\n  margin-right: 10px;\n}\n\n.main_content_div .trainer_div .trainer_box .upper_flex .trainer_detail .addr_div ion-label {\n  font-size: 12px;\n  color: grey;\n}\n\n.main_content_div .trainer_div .trainer_box .lower_flex {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 7px;\n  align-items: center;\n}\n\n.main_content_div .trainer_div .trainer_box .lower_flex ion-button {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5lcnMvdHJhaW5lcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUhKOztBQUtJO0VBQ0ksY0FBQTtBQUhSOztBQU1JO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpSOztBQU9JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFMUjs7QUFPUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMWjs7QUFPWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFMaEI7O0FBUVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTmhCOztBQVVRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUlo7O0FBWVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQVZoQjs7QUFlSTtFQUNJLGFBQUE7QUFiUjs7QUFlUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7QUFkWjs7QUFnQlk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFkaEI7O0FBZ0JnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBZHBCOztBQWtCZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBaEJwQjs7QUFpQm9CO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFmeEI7O0FBaUJvQjtFQUNJLGVBQUE7QUFmeEI7O0FBa0JvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFoQnhCOztBQWlCd0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBZjVCOztBQWlCd0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQWY1Qjs7QUFzQlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFwQmhCOztBQXNCZ0I7RUFDSSxXQUFBO0FBcEJwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluZXJzL3RyYWluZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6ICMyZDJkMzk7XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyZDJkMzk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWMxZTJhO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50aXRsZV9sYmwge1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAuc3RvcnlfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZDJkMzk7XG5cbiAgICAgICAgLm91dGVyX2RpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgICAgICAgLnVzZXJfZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1c19kaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFpbmVyX3N0b3J5X2RpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICAgICAgICAgICBcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyYWluZXJfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAudHJhaW5lcl9ib3gge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJkMmQzOTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAudXBwZXJfZmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuYmFja19pbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRyYWluZXJfZGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hbGxfZ3JleSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYWRkcl9kaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb3dlcl9mbGV4IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/trainers/trainers.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/trainers/trainers.page.ts ***!
  \*************************************************/
/*! exports provided: TrainersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersPage", function() { return TrainersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let TrainersPage = class TrainersPage {
    constructor(route) {
        this.route = route;
        this.story = [
            {
                img: 'assets/imgs/t1.jpg',
                name: 'pennytool'
            },
            {
                img: 'assets/imgs/t2.jpg',
                name: 'pelicansteve'
            },
            {
                img: 'assets/imgs/t3.jpg',
                name: 'Jackweary'
            },
            {
                img: 'assets/imgs/t4.jpg',
                name: 'pennytool'
            },
            {
                img: 'assets/imgs/t5.jpg',
                name: 'pelicansteve'
            },
            {
                img: 'assets/imgs/t6.jpg',
                name: 'Jackweary'
            },
            {
                img: 'assets/imgs/t7.jpg',
                name: 'pennytool'
            },
        ];
    }
    ngOnInit() {
    }
    goToTrainerProfile() {
        this.route.navigate(['tabs/trainer-profile']);
    }
};
TrainersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
TrainersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-trainers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trainers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainers/trainers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trainers.page.scss */ "./src/app/pages/trainers/trainers.page.scss")).default]
    })
], TrainersPage);



/***/ })

}]);
//# sourceMappingURL=trainers-trainers-module-es2015.js.map