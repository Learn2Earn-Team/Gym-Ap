(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-appoinment-booking-appoinment-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinment-booking/appoinment-booking.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinment-booking/appoinment-booking.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n    <ion-toolbar>\n        <ion-button (click)=\"goToBack()\" fill=\"clear\" slot=\"start\">\n            <ion-icon name=\"arrow-back\" style=\"font-size: 26px;\"></ion-icon>\n        </ion-button>\n        <ion-title>Book an Appointment</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"map-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"detail_tab\" *ngIf=\"tabID == 1\">\n            <div class=\"user_flex\">\n              <div class=\"border_div\">\n                <div class=\"back_user\" [style.backgroundImage]=\"'url(assets/imgs/t1.jpg)'\"></div>\n              </div>\n              <div class=\"user_detail\">\n                <ion-label class=\"bold_lbl\">Piff Jenkins</ion-label>\n                <ion-label class=\"small_lbl\">Aerobics, Weight loss</ion-label>\n                <div class=\"flex_ratings\">\n                  <ion-icon name=\"location-outline\"></ion-icon>\n                  <ion-label>Bhavnagar, Gujrat, 364001</ion-label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"bottom_div\">\n\n              <ion-label class=\"title_lbl\">Appointment For</ion-label>\n\n              <ion-input type=\"text\" placeholder=\"Name, Surname\"></ion-input>\n              <ion-input type=\"text\" placeholder=\"Contact Number\"></ion-input>\n\n              <ion-label class=\"title_lbl\">Who's coming with you ?</ion-label>\n\n              <div class=\"user_slider\">\n                <div class=\"add_div\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <ion-label>Add</ion-label>\n                </div>\n                <div *ngFor=\"let item of [1,2,3,4,5]\">\n                  <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/t1.jpg)'\"></div>\n                  <ion-label>My Sister</ion-label>\n                </div>\n              </div>\n\n              <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 2\">\n                Next\n              </ion-button>\n\n            </div>\n        </div>\n\n        <div class=\"booking_tab\" *ngIf=\"tabID == 2\">\n            <ion-label class=\"title_lbl\">Appointment For</ion-label>\n            <div class=\"calendar_div\">\n                \n            </div>\n\n            <div class=\"bottom_div\">\n              <ion-label class=\"title_lbl\">Select Appointment Time</ion-label>\n\n              <ion-grid>\n                  <ion-row class=\"ion-no-padding\">\n                      <ion-col [class.booked]=\"item.status == '1'\" [class.new_booked]=\"item.status == '2'\" size=\"3.5\" *ngFor=\"let item of booked\" (click)=\"slotBooking(item)\">\n                          {{item.time}}\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n\n              <ion-button expand=\"block\" shape=\"round\" (click)=\"openModal()\">\n                Confirm\n              </ion-button>\n\n\n            </div>\n        </div>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/appoinment-booking/appoinment-booking-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/appoinment-booking/appoinment-booking-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AppoinmentBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentBookingPageRoutingModule", function() { return AppoinmentBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appoinment_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appoinment-booking.page */ "./src/app/pages/appoinment-booking/appoinment-booking.page.ts");




const routes = [
    {
        path: '',
        component: _appoinment_booking_page__WEBPACK_IMPORTED_MODULE_3__["AppoinmentBookingPage"]
    }
];
let AppoinmentBookingPageRoutingModule = class AppoinmentBookingPageRoutingModule {
};
AppoinmentBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppoinmentBookingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/appoinment-booking/appoinment-booking.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/appoinment-booking/appoinment-booking.module.ts ***!
  \***********************************************************************/
/*! exports provided: AppoinmentBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentBookingPageModule", function() { return AppoinmentBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appoinment_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appoinment-booking-routing.module */ "./src/app/pages/appoinment-booking/appoinment-booking-routing.module.ts");
/* harmony import */ var _appoinment_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appoinment-booking.page */ "./src/app/pages/appoinment-booking/appoinment-booking.page.ts");







let AppoinmentBookingPageModule = class AppoinmentBookingPageModule {
};
AppoinmentBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appoinment_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppoinmentBookingPageRoutingModule"]
        ],
        declarations: [_appoinment_booking_page__WEBPACK_IMPORTED_MODULE_6__["AppoinmentBookingPage"]]
    })
], AppoinmentBookingPageModule);



/***/ }),

/***/ "./src/app/pages/appoinment-booking/appoinment-booking.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/appoinment-booking/appoinment-booking.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .detail_tab .user_flex {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #2d2d39;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.main_content_div .detail_tab .user_flex .border_div {\n  height: 90px;\n  width: 90px;\n  min-width: 90px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n\n.main_content_div .detail_tab .user_flex .border_div .back_user {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: 2px solid white;\n  border-radius: 3px;\n}\n\n.main_content_div .detail_tab .user_flex .user_detail {\n  padding-left: 16px;\n  width: 100%;\n}\n\n.main_content_div .detail_tab .user_flex .user_detail .bold_lbl {\n  font-family: \"medium\";\n  letter-spacing: 1px;\n  font-size: 17px;\n}\n\n.main_content_div .detail_tab .user_flex .user_detail .small_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-bottom: 5px;\n}\n\n.main_content_div .detail_tab .user_flex .user_detail .flex_ratings {\n  display: flex;\n  align-items: center;\n}\n\n.main_content_div .detail_tab .user_flex .user_detail .flex_ratings ion-icon {\n  font-size: 15px;\n  margin-right: 3px;\n  color: grey;\n}\n\n.main_content_div .detail_tab .user_flex .user_detail .flex_ratings ion-label {\n  font-size: 13px;\n  color: grey;\n}\n\n.main_content_div .detail_tab .bottom_div {\n  padding-top: 16px;\n}\n\n.main_content_div .detail_tab .bottom_div .title_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n  margin-bottom: 16px;\n}\n\n.main_content_div .detail_tab .bottom_div ion-input {\n  border-radius: 10px;\n  background: #2d2d39;\n  --placeholder-color: white;\n  height: 48px;\n  margin-bottom: 16px;\n  --padding-start: 16px ;\n}\n\n.main_content_div .detail_tab .bottom_div .user_slider {\n  display: flex;\n  overflow-x: scroll;\n}\n\n.main_content_div .detail_tab .bottom_div .user_slider .add_div {\n  height: 120px;\n  width: 100px;\n  min-width: 100px;\n  background: #2d2d39;\n  border: 1px dashed var(--ion-color-primary);\n  border-radius: 5px;\n  margin-right: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.main_content_div .detail_tab .bottom_div .user_slider .add_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 25px;\n}\n\n.main_content_div .detail_tab .bottom_div .user_slider .add_div ion-label {\n  font-size: 14px;\n}\n\n.main_content_div .detail_tab .bottom_div .user_slider .user_back {\n  height: 120px;\n  width: 100px;\n  min-width: 100px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  margin-right: 16px;\n}\n\n.main_content_div .detail_tab .bottom_div .user_slider ion-label {\n  font-size: 14px;\n  margin-top: 5px;\n  text-align: center;\n}\n\n.main_content_div .detail_tab .bottom_div ion-button {\n  margin: 0px;\n  width: 300px;\n  display: block;\n  margin: auto;\n  margin-top: 50px;\n}\n\n.main_content_div .booking_tab .title_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n  margin-bottom: 16px;\n}\n\n.main_content_div .booking_tab .calendar_div {\n  border-bottom: 1px solid #2d2d39;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.main_content_div .booking_tab .bottom_div {\n  padding-top: 16px;\n}\n\n.main_content_div .booking_tab .bottom_div ion-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.main_content_div .booking_tab .bottom_div ion-col {\n  border: 1px solid #2d2d39;\n  margin-bottom: 20px;\n  border-radius: 25px;\n  padding: 7px 12px;\n  font-size: 14px;\n}\n\n.main_content_div .booking_tab .bottom_div .booked {\n  background: gray;\n}\n\n.main_content_div .booking_tab .bottom_div .new_booked {\n  background: var(--ion-color-primary);\n  color: white;\n}\n\n.main_content_div .booking_tab .bottom_div ion-button {\n  margin: 0px;\n  width: 300px;\n  display: block;\n  margin: auto;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwb2lubWVudC1ib29raW5nL2FwcG9pbm1lbnQtYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0ksY0FBQTtBQUNSOztBQUdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRFo7O0FBR1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBRGhCOztBQUdnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURwQjs7QUFLWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUhoQjs7QUFLZ0I7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhwQjs7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSnBCOztBQU9nQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUxwQjs7QUFPb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTHhCOztBQU9vQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBTHhCOztBQVdRO0VBQ0ksaUJBQUE7QUFUWjs7QUFXWTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7QUFWaEI7O0FBYVk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVhoQjs7QUFjWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQVpoQjs7QUFjZ0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWnBCOztBQWNvQjtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQVp4Qjs7QUFlb0I7RUFDSSxlQUFBO0FBYnhCOztBQWlCZ0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWZwQjs7QUFrQmdCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWhCcEI7O0FBb0JZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBbEJoQjs7QUF3QlE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdEJaOztBQXdCUTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXRCWjs7QUF5QlE7RUFDSSxpQkFBQTtBQXZCWjs7QUF5Qlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXZCaEI7O0FBMEJZO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBekJoQjs7QUEyQlk7RUFDSSxnQkFBQTtBQXpCaEI7O0FBMkJZO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FBekJoQjs7QUE0Qlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUExQmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwb2lubWVudC1ib29raW5nL2FwcG9pbm1lbnQtYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmQyZDM5O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgYmFja2dyb3VuZDogIzFjMWUyYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kZXRhaWxfdGFiIHtcbiAgICAgICAgLnVzZXJfZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQyZDM5O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBcbiAgICAgICAgICAgIC5ib3JkZXJfZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgXG4gICAgICAgICAgICAgICAgLmJhY2tfdXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAudXNlcl9kZXRhaWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmZsZXhfcmF0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJvdHRvbV9kaXYge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgXG4gICAgICAgICAgICAudGl0bGVfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAudXNlcl9zbGlkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIFxuICAgICAgICAgICAgICAgIC5hZGRfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAudXNlcl9iYWNrIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvb2tpbmdfdGFiIHtcbiAgICAgICAgLnRpdGxlX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FsZW5kYXJfZGl2IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQyZDM5O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3R0b21fZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuXG4gICAgICAgICAgICBpb24tcm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQyZDM5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9va2Vke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV3X2Jvb2tlZHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/appoinment-booking/appoinment-booking.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/appoinment-booking/appoinment-booking.page.ts ***!
  \*********************************************************************/
/*! exports provided: AppoinmentBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentBookingPage", function() { return AppoinmentBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _confirm_booking_confirm_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../confirm-booking/confirm-booking.page */ "./src/app/pages/confirm-booking/confirm-booking.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let AppoinmentBookingPage = class AppoinmentBookingPage {
    constructor(navCrtl, modalCtrl) {
        this.navCrtl = navCrtl;
        this.modalCtrl = modalCtrl;
        this.tabID = 1;
        this.booked = [
            {
                time: '10:00 AM',
                status: '1'
            },
            {
                time: '11:00 AM',
                status: '1'
            },
            {
                time: '12:00 PM',
                status: '0'
            },
            {
                time: '02:00 PM',
                status: '0'
            },
            {
                time: '03:00 PM',
                status: '0'
            },
            {
                time: '05:00 PM',
                status: '1'
            },
            {
                time: '08:00 PM',
                status: '0'
            }
        ];
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCrtl.back();
    }
    slotBooking(item) {
        this.booked.forEach(element => {
            if (element.status == '2')
                element.status = '0';
        });
        if (item.status == '1') {
            return false;
        }
        else {
            console.log(item);
            item.status = '2';
            console.log(this.booked);
        }
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _confirm_booking_confirm_booking_page__WEBPACK_IMPORTED_MODULE_1__["ConfirmBookingPage"],
                cssClass: 'transparent_modal'
            });
            return yield modal.present();
        });
    }
};
AppoinmentBookingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
AppoinmentBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-appoinment-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appoinment-booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinment-booking/appoinment-booking.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appoinment-booking.page.scss */ "./src/app/pages/appoinment-booking/appoinment-booking.page.scss")).default]
    })
], AppoinmentBookingPage);



/***/ })

}]);
//# sourceMappingURL=pages-appoinment-booking-appoinment-booking-module-es2015.js.map