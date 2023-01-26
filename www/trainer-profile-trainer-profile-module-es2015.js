(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trainer-profile-trainer-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainer-profile/trainer-profile.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainer-profile/trainer-profile.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n      <ion-button (click)=\"goToBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;\"></ion-icon>\n      </ion-button>\n      <ion-title>Trainer Profile</ion-title>\n      <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n          <ion-icon name=\"map-outline\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        \n        <div class=\"user_div\">\n            <div class=\"user_flex\">\n                <div class=\"border_div\">\n                    <div class=\"back_user\" [style.backgroundImage]=\"'url(assets/imgs/t1.jpg)'\"></div>\n                </div>\n                <div class=\"user_detail\">\n                    <ion-label class=\"bold_lbl\">Piff Jenkins</ion-label>\n                    <ion-label class=\"small_lbl\">Aerobics, Weight loss</ion-label>\n                    <div class=\"flex_ratings\">\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star-outline\"></ion-icon>\n                    </div>\n                </div>\n            </div>\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"goToAppBooking()\">\n                Book an Appointment\n            </ion-button>\n        </div>\n\n        <div class=\"bottom_div\">\n\n            <div class=\"segment_flex\">\n                <div class=\"inner_box\">\n                    <ion-label>Likes</ion-label>\n                    <ion-label>2772</ion-label>\n                </div>\n                <div class=\"inner_box\">\n                    <ion-label>Comments</ion-label>\n                    <ion-label>1376</ion-label>\n                </div>\n                <div class=\"inner_box\" style=\"border: 0px;\">\n                    <ion-label>Suggested</ion-label>\n                    <ion-label>754</ion-label>\n                </div>\n            </div>\n\n            <div class=\"header_flex\">\n                <ion-label class=\"title_lbl\">About</ion-label>\n            </div>\n\n            <div class=\"about_div\">\n                <ion-label class=\"about_lbl\">Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                  Consectetur veniam incidunt eius fuga, architecto recusandae ipsum asperiores tempore.\n                </ion-label>\n\n                <div class=\"about_flex\">\n                    <ion-icon name=\"navigate-outline\" style=\"font-size: 23px;\"></ion-icon>\n                    <ion-label>Eva Surbhi complex, Aksharwadi road Bhavnagar - 364001</ion-label>\n                </div>\n\n                <div class=\"about_flex\" style=\"margin-bottom: 20px;\">\n                    <ion-icon name=\"call-outline\"></ion-icon>\n                    <ion-label>9876543212</ion-label>\n                </div>\n\n            </div>\n\n            <div class=\"header_flex\">\n                <ion-label class=\"title_lbl\">Articles</ion-label>\n                <ion-label class=\"more_lbl\" (click)=\"goToArticle()\">View All</ion-label>\n            </div>\n\n            <div class=\"program_segment\">\n\n                <div class=\"program_div\" *ngFor=\"let item of (story | slice : 0: 3)\" (click)=\"goToArticleDetail()\">\n                    <div class=\"main_flex\">\n                        <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                        <div class=\"detail_div\">\n                            <ion-label class=\"name_lbl\">What is lorem ipsum ?</ion-label>\n                            <ion-label class=\"small_lbl\">Lorem ipsum, dolor sit amet consectetur \n                              adipisicing elit. Placeat nulla quasi saepe facilis.</ion-label>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/trainer-profile/trainer-profile-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/trainer-profile/trainer-profile-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TrainerProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerProfilePageRoutingModule", function() { return TrainerProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _trainer_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trainer-profile.page */ "./src/app/pages/trainer-profile/trainer-profile.page.ts");




const routes = [
    {
        path: '',
        component: _trainer_profile_page__WEBPACK_IMPORTED_MODULE_3__["TrainerProfilePage"]
    }
];
let TrainerProfilePageRoutingModule = class TrainerProfilePageRoutingModule {
};
TrainerProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainerProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trainer-profile/trainer-profile.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/trainer-profile/trainer-profile.module.ts ***!
  \*****************************************************************/
/*! exports provided: TrainerProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerProfilePageModule", function() { return TrainerProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _trainer_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-profile-routing.module */ "./src/app/pages/trainer-profile/trainer-profile-routing.module.ts");
/* harmony import */ var _trainer_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainer-profile.page */ "./src/app/pages/trainer-profile/trainer-profile.page.ts");







let TrainerProfilePageModule = class TrainerProfilePageModule {
};
TrainerProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trainer_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainerProfilePageRoutingModule"]
        ],
        declarations: [_trainer_profile_page__WEBPACK_IMPORTED_MODULE_6__["TrainerProfilePage"]]
    })
], TrainerProfilePageModule);



/***/ }),

/***/ "./src/app/pages/trainer-profile/trainer-profile.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/trainer-profile/trainer-profile.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #2d2d39;\n}\n\n.main_content_div {\n  background: #1c1e2a;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .user_div {\n  border-bottom: 1px solid #2d2d39;\n}\n\n.main_content_div .user_div .user_flex {\n  display: flex;\n  align-items: center;\n}\n\n.main_content_div .user_div .user_flex .border_div {\n  height: 90px;\n  width: 90px;\n  min-width: 90px;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n\n.main_content_div .user_div .user_flex .border_div .back_user {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: 2px solid white;\n  border-radius: 3px;\n}\n\n.main_content_div .user_div .user_flex .user_detail {\n  padding-left: 16px;\n  width: 100%;\n}\n\n.main_content_div .user_div .user_flex .user_detail .bold_lbl {\n  font-family: \"medium\";\n  letter-spacing: 1px;\n  font-size: 17px;\n}\n\n.main_content_div .user_div .user_flex .user_detail .small_lbl {\n  font-size: 14px;\n  color: grey;\n  margin-bottom: 5px;\n}\n\n.main_content_div .user_div .user_flex .user_detail .flex_ratings {\n  display: flex;\n}\n\n.main_content_div .user_div .user_flex .user_detail .flex_ratings ion-icon {\n  font-size: 15px;\n  color: orange;\n  margin-right: 3px;\n}\n\n.main_content_div .user_div ion-button {\n  width: 270px;\n  display: block;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .bottom_div .segment_flex {\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #2d2d39;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.main_content_div .bottom_div .segment_flex .inner_box {\n  border-right: 1px solid #2d2d39;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .bottom_div .segment_flex .inner_box ion-label {\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n\n.main_content_div .bottom_div .header_flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.main_content_div .bottom_div .header_flex .title_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n\n.main_content_div .bottom_div .header_flex .more_lbl {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .bottom_div .about_div .about_lbl {\n  font-size: 14px;\n}\n\n.main_content_div .bottom_div .about_div .about_flex {\n  display: flex;\n  margin-top: 16px;\n}\n\n.main_content_div .bottom_div .about_div .about_flex ion-icon {\n  font-size: 17px;\n  margin-right: 10px;\n}\n\n.main_content_div .bottom_div .about_div .about_flex ion-label {\n  font-size: 14px;\n}\n\n.main_content_div .bottom_div .program_segment .program_div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #2d2d39;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex {\n  display: flex;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .back_img {\n  width: 90px;\n  height: 90px;\n  min-width: 90px;\n  border-radius: 10px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div {\n  padding-left: 16px;\n  text-align: left;\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .name_lbl {\n  font-size: 14px;\n  font-family: \"medium\";\n}\n\n.main_content_div .bottom_div .program_segment .program_div .main_flex .detail_div .small_lbl {\n  font-size: 13px;\n  color: grey;\n  font-family: \"medium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5lci1wcm9maWxlL3RyYWluZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQ0FBQTtBQUFSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQVo7O0FBRVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBQWhCOztBQUVnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFwQjs7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUZoQjs7QUFJZ0I7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZwQjs7QUFLZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSHBCOztBQU1nQjtFQUNJLGFBQUE7QUFKcEI7O0FBTW9CO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUp4Qjs7QUFVUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSWjs7QUFnQlE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFkWjs7QUFnQlk7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFkaEI7O0FBZ0JnQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQWRwQjs7QUFtQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFqQlo7O0FBa0JZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFoQmhCOztBQW1CWTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQWpCaEI7O0FBc0JZO0VBQ0ksZUFBQTtBQXBCaEI7O0FBdUJZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBckJoQjs7QUF1QmdCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBckJwQjs7QUF3QmdCO0VBQ0ksZUFBQTtBQXRCcEI7O0FBNkJZO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBM0JoQjs7QUE2QmdCO0VBQ0ksYUFBQTtBQTNCcEI7O0FBNEJvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBMUJ4Qjs7QUE0Qm9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQTFCeEI7O0FBNEJ3QjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQTFCNUI7O0FBNkJ3QjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUEzQjVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhaW5lci1wcm9maWxlL3RyYWluZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmQyZDM5O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgYmFja2dyb3VuZDogIzFjMWUyYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC51c2VyX2RpdiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQyZDM5O1xuXG4gICAgICAgIC51c2VyX2ZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5ib3JkZXJfZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAuYmFja191c2VyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXJfZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5mbGV4X3JhdGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b21fZGl2IHtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5zZWdtZW50X2ZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZDJkMzk7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAuaW5uZXJfYm94IHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmQyZDM5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXJfZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgLnRpdGxlX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLm1vcmVfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hYm91dF9kaXYge1xuICAgICAgICAgICAgLmFib3V0X2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJvdXRfZmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3JhbV9zZWdtZW50IHtcbiAgICAgICAgICAgIC5wcm9ncmFtX2RpdiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZDJkMzk7XG5cbiAgICAgICAgICAgICAgICAubWFpbl9mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgLmJhY2tfaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWxfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/trainer-profile/trainer-profile.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/trainer-profile/trainer-profile.page.ts ***!
  \***************************************************************/
/*! exports provided: TrainerProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerProfilePage", function() { return TrainerProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let TrainerProfilePage = class TrainerProfilePage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
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
    goToBack() {
        this.navCtrl.back();
    }
    goToAppBooking() {
        this.route.navigate(['/appoinment-booking']);
    }
    goToArticleDetail() {
        this.route.navigate(['/tabs/article-detail']);
    }
    goToArticle() {
        this.route.navigate(['/tabs/articles']);
    }
};
TrainerProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
TrainerProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-trainer-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trainer-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainer-profile/trainer-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trainer-profile.page.scss */ "./src/app/pages/trainer-profile/trainer-profile.page.scss")).default]
    })
], TrainerProfilePage);



/***/ })

}]);
//# sourceMappingURL=trainer-profile-trainer-profile-module-es2015.js.map