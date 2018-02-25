webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_host_register_host_register_component__ = __webpack_require__("../../../../../src/app/components/host-register/host-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_evaluator_register_evaluator_register_component__ = __webpack_require__("../../../../../src/app/components/evaluator-register/evaluator-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_host_login_host_login_component__ = __webpack_require__("../../../../../src/app/components/host-login/host-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_host_dashboard_host_dashboard_component__ = __webpack_require__("../../../../../src/app/components/host-dashboard/host-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_evaluator_login_evaluator_login_component__ = __webpack_require__("../../../../../src/app/components/evaluator-login/evaluator-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_evaluator_dashboard_evaluator_dashboard_component__ = __webpack_require__("../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__ = __webpack_require__("../../../../../src/app/guards/admin_auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_admin_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/admin_notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_host_auth_guard__ = __webpack_require__("../../../../../src/app/guards/host_auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_host_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/host_notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_evaluator_auth_guard__ = __webpack_require__("../../../../../src/app/guards/evaluator_auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_evaluator_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/evaluator_notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_add_event_add_event_component__ = __webpack_require__("../../../../../src/app/components/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_view_events_view_events_component__ = __webpack_require__("../../../../../src/app/components/view-events/view-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_view_hosts_view_hosts_component__ = __webpack_require__("../../../../../src/app/components/view-hosts/view-hosts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_view_host_events_view_host_events_component__ = __webpack_require__("../../../../../src/app/components/view-host-events/view-host-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_event_page_event_page_component__ = __webpack_require__("../../../../../src/app/components/event-page/event-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_configure_event_configure_event_component__ = __webpack_require__("../../../../../src/app/components/configure-event/configure-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_team_registration_team_registration_component__ = __webpack_require__("../../../../../src/app/components/team-registration/team-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_submit_artifact_submit_artifact_component__ = __webpack_require__("../../../../../src/app/components/submit-artifact/submit-artifact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_eval_eventwise_registered_teams_eval_eventwise_registered_teams_component__ = __webpack_require__("../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_eval_teamwise_submissions_eval_teamwise_submissions_component__ = __webpack_require__("../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_user_eventwise_submissions_user_eventwise_submissions_component__ = __webpack_require__("../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_eval_submit_evaluation_form_eval_submit_evaluation_form_component__ = __webpack_require__("../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_demo_demo_component__ = __webpack_require__("../../../../../src/app/components/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] // Default Route
    },
    {
        path: 'team-registration/:_id',
        component: __WEBPACK_IMPORTED_MODULE_29__components_team_registration_team_registration_component__["a" /* TeamRegistrationComponent */] // Default Route
    },
    {
        path: 'demo',
        component: __WEBPACK_IMPORTED_MODULE_35__components_demo_demo_component__["a" /* DemoComponent */] // Default Route
    },
    {
        path: 'eval-submit-evaluation-form/:evaluator_username/:_id',
        component: __WEBPACK_IMPORTED_MODULE_34__components_eval_submit_evaluation_form_eval_submit_evaluation_form_component__["a" /* EvalSubmitEvaluationFormComponent */] // Default Route
    },
    {
        path: 'eval-teamwise-submissions/:event_title/:_id',
        component: __WEBPACK_IMPORTED_MODULE_32__components_eval_teamwise_submissions_eval_teamwise_submissions_component__["a" /* EvalTeamwiseSubmissionsComponent */] // Default Route
    },
    {
        path: 'user-teamwise-submissions/:event_title/:_id',
        component: __WEBPACK_IMPORTED_MODULE_33__components_user_eventwise_submissions_user_eventwise_submissions_component__["a" /* UserEventwiseSubmissionsComponent */] // Default Route
    },
    {
        path: 'eval-eventwise-registered-teams/:_id',
        component: __WEBPACK_IMPORTED_MODULE_31__components_eval_eventwise_registered_teams_eval_eventwise_registered_teams_component__["a" /* EvalEventwiseRegisteredTeamsComponent */] // Default Route
    },
    {
        path: 'submit-artifact/:_id',
        component: __WEBPACK_IMPORTED_MODULE_30__components_submit_artifact_submit_artifact_component__["a" /* SubmitArtifactComponent */] // Default Route
    },
    {
        path: 'event-page/:_id',
        component: __WEBPACK_IMPORTED_MODULE_27__components_event_page_event_page_component__["a" /* EventPageComponent */],
    },
    {
        path: 'configure-event/:_id',
        component: __WEBPACK_IMPORTED_MODULE_28__components_configure_event_configure_event_component__["a" /* ConfigureEventComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_host_auth_guard__["a" /* HostAuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'view-events',
        component: __WEBPACK_IMPORTED_MODULE_24__components_view_events_view_events_component__["a" /* ViewEventsComponent */],
    },
    {
        path: 'view-host-events',
        component: __WEBPACK_IMPORTED_MODULE_26__components_view_host_events_view_host_events_component__["a" /* ViewHostEventsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_host_auth_guard__["a" /* HostAuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'view-hosts',
        component: __WEBPACK_IMPORTED_MODULE_25__components_view_hosts_view_hosts_component__["a" /* ViewHostsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'admin-login',
        component: __WEBPACK_IMPORTED_MODULE_9__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_admin_notAuth_guard__["a" /* AdminNotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'admin-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'host-register',
        component: __WEBPACK_IMPORTED_MODULE_5__components_host_register_host_register_component__["a" /* HostRegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'host-login',
        component: __WEBPACK_IMPORTED_MODULE_11__components_host_login_host_login_component__["a" /* HostLoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_host_notAuth_guard__["a" /* HostNotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'host-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_12__components_host_dashboard_host_dashboard_component__["a" /* HostDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_host_auth_guard__["a" /* HostAuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'evaluator-register',
        component: __WEBPACK_IMPORTED_MODULE_6__components_evaluator_register_evaluator_register_component__["a" /* EvaluatorRegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'evaluator-login',
        component: __WEBPACK_IMPORTED_MODULE_13__components_evaluator_login_evaluator_login_component__["a" /* EvaluatorLoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_evaluator_notAuth_guard__["a" /* EvaluatorNotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'evaluator-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_14__components_evaluator_dashboard_evaluator_dashboard_component__["a" /* EvaluatorDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_evaluator_auth_guard__["a" /* EvaluatorAuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'add-event',
        component: __WEBPACK_IMPORTED_MODULE_23__components_add_event_add_event_component__["a" /* AddEventComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__["a" /* AdminAuthGuard */]] // User must be logged in to view this route
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] } // "Catch-All" Route
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__ = __webpack_require__("../../../../../src/app/guards/admin_auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_admin_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/admin_notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_host_auth_guard__ = __webpack_require__("../../../../../src/app/guards/host_auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_host_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/host_notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_evaluator_auth_guard__ = __webpack_require__("../../../../../src/app/guards/evaluator_auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_evaluator_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/evaluator_notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_host_login_host_login_component__ = __webpack_require__("../../../../../src/app/components/host-login/host-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_host_dashboard_host_dashboard_component__ = __webpack_require__("../../../../../src/app/components/host-dashboard/host-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_evaluator_login_evaluator_login_component__ = __webpack_require__("../../../../../src/app/components/evaluator-login/evaluator-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_evaluator_dashboard_evaluator_dashboard_component__ = __webpack_require__("../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_host_register_host_register_component__ = __webpack_require__("../../../../../src/app/components/host-register/host-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_evaluator_register_evaluator_register_component__ = __webpack_require__("../../../../../src/app/components/evaluator-register/evaluator-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_add_event_add_event_component__ = __webpack_require__("../../../../../src/app/components/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_view_events_view_events_component__ = __webpack_require__("../../../../../src/app/components/view-events/view-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_view_hosts_view_hosts_component__ = __webpack_require__("../../../../../src/app/components/view-hosts/view-hosts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_view_host_events_view_host_events_component__ = __webpack_require__("../../../../../src/app/components/view-host-events/view-host-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_event_page_event_page_component__ = __webpack_require__("../../../../../src/app/components/event-page/event-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_configure_event_configure_event_component__ = __webpack_require__("../../../../../src/app/components/configure-event/configure-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_team_registration_team_registration_component__ = __webpack_require__("../../../../../src/app/components/team-registration/team-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_submit_artifact_submit_artifact_component__ = __webpack_require__("../../../../../src/app/components/submit-artifact/submit-artifact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_appheader_appheader_component__ = __webpack_require__("../../../../../src/app/components/appheader/appheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_eval_eventwise_registered_teams_eval_eventwise_registered_teams_component__ = __webpack_require__("../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_eval_teamwise_submissions_eval_teamwise_submissions_component__ = __webpack_require__("../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_appmain_appmain_component__ = __webpack_require__("../../../../../src/app/components/appmain/appmain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_user_eventwise_submissions_user_eventwise_submissions_component__ = __webpack_require__("../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_eval_submit_evaluation_form_eval_submit_evaluation_form_component__ = __webpack_require__("../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_demo_demo_component__ = __webpack_require__("../../../../../src/app/components/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_get_token_service__ = __webpack_require__("../../../../../src/app/services/get-token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_host_login_host_login_component__["a" /* HostLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_host_dashboard_host_dashboard_component__["a" /* HostDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_evaluator_login_evaluator_login_component__["a" /* EvaluatorLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_evaluator_dashboard_evaluator_dashboard_component__["a" /* EvaluatorDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_host_register_host_register_component__["a" /* HostRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_evaluator_register_evaluator_register_component__["a" /* EvaluatorRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_add_event_add_event_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_view_events_view_events_component__["a" /* ViewEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_view_hosts_view_hosts_component__["a" /* ViewHostsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_view_host_events_view_host_events_component__["a" /* ViewHostEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_event_page_event_page_component__["a" /* EventPageComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_configure_event_configure_event_component__["a" /* ConfigureEventComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_team_registration_team_registration_component__["a" /* TeamRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_submit_artifact_submit_artifact_component__["a" /* SubmitArtifactComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_appheader_appheader_component__["a" /* AppheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_eval_eventwise_registered_teams_eval_eventwise_registered_teams_component__["a" /* EvalEventwiseRegisteredTeamsComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_eval_teamwise_submissions_eval_teamwise_submissions_component__["a" /* EvalTeamwiseSubmissionsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_appmain_appmain_component__["a" /* AppmainComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_user_eventwise_submissions_user_eventwise_submissions_component__["a" /* UserEventwiseSubmissionsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_eval_submit_evaluation_form_eval_submit_evaluation_form_component__["a" /* EvalSubmitEvaluationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_demo_demo_component__["a" /* DemoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_46_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_36_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__["FileUploadModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_48__services_get_token_service__["a" /* GetTokenService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_17__guards_admin_auth_guard__["a" /* AdminAuthGuard */], __WEBPACK_IMPORTED_MODULE_18__guards_admin_notAuth_guard__["a" /* AdminNotAuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_evaluator_auth_guard__["a" /* EvaluatorAuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_evaluator_notAuth_guard__["a" /* EvaluatorNotAuthGuard */], __WEBPACK_IMPORTED_MODULE_19__guards_host_auth_guard__["a" /* HostAuthGuard */], __WEBPACK_IMPORTED_MODULE_20__guards_host_notAuth_guard__["a" /* HostNotAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-event/add-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-event/add-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-register mx-auto mt-5\">\n\t<!-- Custom Success/Error Message -->\n\t<div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n\n    <div class=\"card-header\">Register an Event</div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"form\" (submit)=\"onEventRegisterSubmit()\">\n\t  \n        <div class=\"form-group\">\n        <label for=\"exampleInputUsername\">Event Title</label>\n        <div>\n         <input class=\"form-control\" name=\"event_title\" formControlName=\"event_title\" id=\"event_title\" type=\"text\" placeholder=\"Enter Event Title\">\n         <ul class=\"help-block\" style=\"color:red\">\n          <li *ngIf=\"form.controls.event_title.errors?.required && form.controls.event_title.dirty\">This field is required</li>\n          </ul>\n          </div>\n\t\t    </div>\n    \n        <div class=\"form-group\">\n          <label for=\"exampleInputUsername\">Host Name</label>\n          <div>\n            <select class=\"form-control\" formControlName=\"host_username\" name=\"host_username\" ngModel=\"noption\">\n              <option value=\"noption\" disabled>Select host</option>\n              <option *ngFor=\"let host of hosts\"  [value]=\"host.host_username\">\n                {{host.host_username}}\n              </option>\n            </select>\n            </div>\n          </div>\n        \n          \n          <div class=\"form-group\">\n            <label for=\"exampleInputUsername\">Event Description</label>\n            <div>\n             <input class=\"form-control\" name=\"event_description\" formControlName=\"event_description\" id=\"event_description\" type=\"text\" placeholder=\"Enter Event Description\">\n             <ul class=\"help-block\" style=\"color:red\">\n              <li *ngIf=\"form.controls.event_description.errors?.required && form.controls.event_description.dirty\">This field is required</li>\n              </ul>\n              </div>\n            </div>\n\n        <div class=\"text-center\">\n       <button  [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Register</button>\n      </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-event/add-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEventComponent = (function () {
    function AddEventComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.hosts = new Array;
        this.createForm();
    }
    AddEventComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            event_title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            // Username Input
            host_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            // Password Input
            event_description: [''],
        });
    };
    AddEventComponent.prototype.disableForm = function () {
        this.form.controls['event_title'].disable();
        this.form.controls['host_username'].disable();
        this.form.controls['event_description'].disable();
    };
    // Function to enable the registration form
    AddEventComponent.prototype.enableForm = function () {
        this.form.controls['event_title'].enable();
        this.form.controls['host_username'].enable();
        this.form.controls['event_description'].enable();
    };
    AddEventComponent.prototype.onEventRegisterSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        var event = {
            event_title: this.form.get('event_title').value,
            host_username: this.form.get('host_username').value,
            event_description: this.form.get('event_description').value // Password input field
        };
        this.authService.registerEvent(event).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/admin-dashboard']); // Redirect to login view
                }, 500);
            }
        });
    };
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getHosts().subscribe(function (hosts) { return _this.hosts = hosts; });
    };
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__("../../../../../src/app/components/add-event/add-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-event/add-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" routerLink=\"/host-register\" routerLinkActive=\"active\">Add Host</button>\n<button class=\"btn btn-primary\" routerLink=\"/evaluator-register\" routerLinkActive=\"active\">Add Evaluator</button>\n<button class=\"btn btn-primary\" routerLink=\"/add-event\" routerLinkActive=\"active\">Add Event</button>\n<button class=\"btn btn-primary\" routerLink=\"/view-hosts\" routerLinkActive=\"active\">View Hosts</button>\n<button class=\"btn btn-primary\" routerLink=\"/view-events\" routerLinkActive=\"active\">View Events</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box card card-login mx-auto mt-5\">\n\t\t<div class=\"login-logo\">\n\t\t\t\t<a href=\"../../index2.html\"><b>Admin Login</b></a>\n\t\t\t</div>\n\t<!-- Custom Success/Error Message -->\n\t<div [ngClass]=\"messageClass\">\n    {{ message }}\n\t</div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (submit)=\"onAdminLoginSubmit()\">\n\t\t\n          <div class=\"form-group\">\n            <label for=\"admin_username\">Admin username</label>\n\t\t\t<div [ngClass]=\"{'has-error': form.controls.admin_username.errors && form.controls.admin_username.dirty, 'has-success': form.controls.admin_username.valid && form.controls.admin_username.dirty }\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"admin_username\" formControlName=\"admin_username\" />\n\t\t\t\t<!-- Validation -->\n\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t<li *ngIf=\"form.controls.admin_username.errors?.required && form.controls.admin_username.dirty\">This field is required.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n\t\t\t<div [ngClass]=\"{'has-error': form.controls.admin_password.errors && form.controls.admin_password.dirty, 'has-success': form.controls.admin_password.valid && form.controls.admin_password.dirty }\">\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"admin_password\" formControlName=\"admin_password\" />\n\t\t\t\t<!-- Validation -->\n\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t<li *ngIf=\"form.controls.admin_password.errors?.required && form.controls.admin_password.dirty\">This field is required.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \n          <button [disabled]=\"!form.valid\"  type=\"submit\" class=\"btn btn-primary btn-block\"  value=\"Login\">Login</button>\n\t\t  \n        </form>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_admin_auth_guard__ = __webpack_require__("../../../../../src/app/guards/admin_auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLoginComponent = (function () {
    function AdminLoginComponent(formBuilder, authService, router, AdminAuthGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.AdminAuthGuard = AdminAuthGuard;
        this.processing = false;
        this.createForm();
    }
    AdminLoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            admin_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            admin_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    AdminLoginComponent.prototype.disableForm = function () {
        this.form.controls['admin_username'].disable(); // Disable username field
        this.form.controls['admin_password'].disable(); // Disable password field
    };
    // Function to enable form
    AdminLoginComponent.prototype.enableForm = function () {
        this.form.controls['admin_username'].enable(); // Enable username field
        this.form.controls['admin_password'].enable(); // Enable password field
    };
    AdminLoginComponent.prototype.onAdminLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var admin = {
            admin_username: this.form.get('admin_username').value,
            admin_password: this.form.get('admin_password').value // Password input field
        };
        this.authService.admin_login(admin).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeAdminData(data.token2, data.admin);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/admin-dashboard']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    AdminLoginComponent.prototype.ngOnInit = function () {
        if (this.AdminAuthGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.AdminAuthGuard.redirectUrl; // Set the previous URL user was redirected from
            this.AdminAuthGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    AdminLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_admin_auth_guard__["a" /* AdminAuthGuard */]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/appheader/appheader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/appheader/appheader.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <nav class=\"navbar navbar-static-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a href=\"../../index2.html\" class=\"navbar-brand\"><b>Admin</b>LTE</a>\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse pull-left\" id=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n            <li><a href=\"#\">Link</a></li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\" role=\"menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">One more separated link</a></li>\n              </ul>\n            </li>\n          </ul>\n          <form class=\"navbar-form navbar-left\" role=\"search\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"navbar-search-input\" placeholder=\"Search\">\n            </div>\n          </form>\n        </div>\n        <!-- /.navbar-collapse -->\n        <!-- Navbar Right Menu -->\n        <div class=\"navbar-custom-menu\">\n          <ul class=\"nav navbar-nav\">\n            <!-- Messages: style can be found in dropdown.less-->\n            <li class=\"dropdown messages-menu\">\n              <!-- Menu toggle button -->\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-envelope-o\"></i>\n                <span class=\"label label-success\">4</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"header\">You have 4 messages</li>\n                <li>\n                  <!-- inner menu: contains the messages -->\n                  <ul class=\"menu\">\n                    <li><!-- start message -->\n                      <a href=\"#\">\n                        <div class=\"pull-left\">\n                          <!-- User Image -->\n                          <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                        </div>\n                        <!-- Message title and timestamp -->\n                        <h4>\n                          Support Team\n                          <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                        </h4>\n                        <!-- The message -->\n                        <p>Why not buy a new awesome theme?</p>\n                      </a>\n                    </li>\n                    <!-- end message -->\n                  </ul>\n                  <!-- /.menu -->\n                </li>\n                <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n              </ul>\n            </li>\n            <!-- /.messages-menu -->\n\n            <!-- Notifications Menu -->\n            <li class=\"dropdown notifications-menu\">\n              <!-- Menu toggle button -->\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-bell-o\"></i>\n                <span class=\"label label-warning\">10</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"header\">You have 10 notifications</li>\n                <li>\n                  <!-- Inner Menu: contains the notifications -->\n                  <ul class=\"menu\">\n                    <li><!-- start notification -->\n                      <a href=\"#\">\n                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                      </a>\n                    </li>\n                    <!-- end notification -->\n                  </ul>\n                </li>\n                <li class=\"footer\"><a href=\"#\">View all</a></li>\n              </ul>\n            </li>\n            <!-- Tasks Menu -->\n            <li class=\"dropdown tasks-menu\">\n              <!-- Menu Toggle Button -->\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-flag-o\"></i>\n                <span class=\"label label-danger\">9</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"header\">You have 9 tasks</li>\n                <li>\n                  <!-- Inner menu: contains the tasks -->\n                  <ul class=\"menu\">\n                    <li><!-- Task item -->\n                      <a href=\"#\">\n                        <!-- Task title and progress text -->\n                        <h3>\n                          Design some buttons\n                          <small class=\"pull-right\">20%</small>\n                        </h3>\n                        <!-- The progress bar -->\n                        <div class=\"progress xs\">\n                          <!-- Change the css width attribute to simulate progress -->\n                          <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                            <span class=\"sr-only\">20% Complete</span>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                    <!-- end task item -->\n                  </ul>\n                </li>\n                <li class=\"footer\">\n                  <a href=\"#\">View all tasks</a>\n                </li>\n              </ul>\n            </li>\n            <!-- User Account Menu -->\n            <li class=\"dropdown user user-menu\">\n              <!-- Menu Toggle Button -->\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <!-- The user image in the navbar-->\n                <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n                <!-- hidden-xs hides the username on small devices so only the image appears. -->\n                <span class=\"hidden-xs\">Alexander Pierce</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <!-- The user image in the menu -->\n                <li class=\"user-header\">\n                  <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                  <p>\n                    Alexander Pierce - Web Developer\n                    <small>Member since Nov. 2012</small>\n                  </p>\n                </li>\n                <!-- Menu Body -->\n                <li class=\"user-body\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-4 text-center\">\n                      <a href=\"#\">Followers</a>\n                    </div>\n                    <div class=\"col-xs-4 text-center\">\n                      <a href=\"#\">Sales</a>\n                    </div>\n                    <div class=\"col-xs-4 text-center\">\n                      <a href=\"#\">Friends</a>\n                    </div>\n                  </div>\n                  <!-- /.row -->\n                </li>\n                <!-- Menu Footer-->\n                <li class=\"user-footer\">\n                  <div class=\"pull-left\">\n                    <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                  </div>\n                  <div class=\"pull-right\">\n                    <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n        <!-- /.navbar-custom-menu -->\n      </div>\n      <!-- /.container-fluid -->\n    </nav>\n  </header>"

/***/ }),

/***/ "../../../../../src/app/components/appheader/appheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppheaderComponent = (function () {
    function AppheaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to logout user
    AppheaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/login']); // Navigate back to home page
    };
    AppheaderComponent.prototype.onAdminLogoutClick = function () {
        this.authService.adminLogout(); // Logout user
        this.router.navigate(['/admin-login']); // Navigate back to home page
    };
    AppheaderComponent.prototype.onHostLogoutClick = function () {
        this.authService.hostLogout(); // Logout user
        this.router.navigate(['/host-login']); // Navigate back to home page
    };
    AppheaderComponent.prototype.onEvaluatorLogoutClick = function () {
        this.authService.evaluatorLogout(); // Logout user
        this.router.navigate(['/evaluator-login']); // Navigate back to home page
    };
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    AppheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appheader',
            template: __webpack_require__("../../../../../src/app/components/appheader/appheader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/appheader/appheader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppheaderComponent);
    return AppheaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/appmain/appmain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/appmain/appmain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"container\">\n\n      <!-- Main content -->\n      <section class=\"content\">\n\n          <div class=\"box box-primary\">\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Quick Example</h3>\n              </div>\n              <!-- /.box-header -->\n              <!-- form start -->\n              <form role=\"form\">\n                <div class=\"box-body\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputFile\">File input</label>\n                    <input type=\"file\" id=\"exampleInputFile\">\n  \n                    <p class=\"help-block\">Example block-level help text here.</p>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"> Check me out\n                    </label>\n                  </div>\n                </div>\n                <!-- /.box-body -->\n  \n                <div class=\"box-footer\">\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </div>\n              </form>\n            </div>\n        <!-- /.box -->\n      </section>\n      <!-- /.content -->\n    </div>\n    <!-- /.container -->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/appmain/appmain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppmainComponent = (function () {
    function AppmainComponent() {
    }
    AppmainComponent.prototype.ngOnInit = function () {
    };
    AppmainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appmain',
            template: __webpack_require__("../../../../../src/app/components/appmain/appmain.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/appmain/appmain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppmainComponent);
    return AppmainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/configure-event/configure-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/configure-event/configure-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n        <div class=\"container\">\n            <section class=\"content-header\">\n                <h1>\n                                          Top Navigation\n                                          <small>Example 2.0</small>\n                                        </h1>\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n                    <li><a href=\"#\">Layout</a></li>\n                    <li class=\"active\">Top Navigation</li>\n                </ol>\n            </section>\n    \n            <section class=\"content\">\n                <div class=\"box box-primary\">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\">Configure Event</h3>\n                    </div>\n    \n                    <div *ngIf=\"message\" [ngClass]=\"messageClass\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                        <h4><i class=\"icon fa fa-check\"></i>{{ message }}</h4>\n                    </div>\n                    <!-- /.box-header -->\n                    <!-- form start -->\n    \n                    <div class=\"box-body\">\n    \n                        <div class=\"row\">\n                            <div class=\"col-xs-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputUsername\">Start Date and Time</label>\n                                    <angular2-date-picker [ngModelOptions]=\"{standalone: true}\" (onDateSelect)=\"onStartDateSelect($event)\" [(ngModel)]=\"start\" [settings]=\"settings\"></angular2-date-picker>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputUsername\">End Date and Time</label>\n                                    <angular2-date-picker [ngModelOptions]=\"{standalone: true}\" (onDateSelect)=\"onEndDateSelect($event)\" [(ngModel)]=\"end\" [settings]=\"settings\"></angular2-date-picker>\n                                </div>\n                            </div>\n                        </div>\n    \n                        <form [formGroup]=\"form\" (submit)=\"onConfigureRegisterSubmit()\">\n    \n                            <div class=\"row\">\n                                <div class=\"col-xs-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputUsername\">Event Title</label>\n                                        <div>\n                                            <input class=\"form-control\" [(ngModel)]=\"event.event_title\" name=\"event_title\" formControlName=\"event_title\" id=\"event_title\" type=\"text\" placeholder=\"Enter Event Title\">\n                                            <ul class=\"help-block\" style=\"color:red\">\n                                                <li *ngIf=\"form.controls.event_title.errors?.required && form.controls.event_title.dirty\">This field is required</li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputUsername\">Host Name</label>\n                                        <div>\n                                            <input class=\"form-control\" disabled [(ngModel)]=\"event.host_username\" formControlName=\"host_username\" name=\"host_username\" type=\"text\" ngModel=\"noption\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"location\">Location</label>\n                                        <div>\n                                            <input class=\"form-control\" [(ngModel)]=\"event.location\" name=\"location\" formControlName=\"location\" id=\"location\" type=\"text\" placeholder=\"Enter Location\"> </div>\n                                    </div>\n                                </div>\n                            </div>\n    \n                            <div class=\"form-group\">\n                                <label for=\"exampleInputUsername\">Event Description</label>\n                                <div>\n                                    <textarea class=\"form-control\" [(ngModel)]=\"event.event_description\" name=\"event_description\" formControlName=\"event_description\" id=\"event_description\" rows=\"2\" placeholder=\"Enter Event Description\"></textarea>\n    \n                                    <ul class=\"help-block\" style=\"color:red\">\n                                        <li *ngIf=\"form.controls.event_description.errors?.required && form.controls.event_description.dirty\">This field is required</li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"row\">\n                                <div class=\"col-xs-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"max_team_members\">Max Team Members</label>\n                                        <div>\n                                            <input class=\"form-control\" [(ngModel)]=\"event.max_team_members\" name=\"max_team_members\" formControlName=\"max_team_members\" id=\"max_team_members\" type=\"number\" placeholder=\"Enter number of maximum team members\">\n    \n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"max_ideas\">Max number of ideas</label>\n                                        <div>\n                                            <input class=\"form-control\" [(ngModel)]=\"event.max_ideas\" name=\"max_ideas\" formControlName=\"max_ideas\" id=\"max_ideas\" type=\"number\" placeholder=\"Enter number of maximum ideas that can be supported\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"prize\">Prize</label>\n                                        <div>\n                                            <input class=\"form-control\" [(ngModel)]=\"event.prize\" name=\"prize\" formControlName=\"prize\" id=\"prize\" type=\"number\" placeholder=\"Enter prize money\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n    \n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                        <div class=\"form-group\">\n                                                <label for=\"location\">Evaluators</label>\n                                                <div *ngFor=\"let evaluator of evaluators\">\n                                                    <input type=\"checkbox\" (change)=\"onChange(evaluator.evaluator_username, $event.target.checked)\"> {{evaluator.evaluator_username}}\n                                                </div>\n                                            </div>\n\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputUsername\">Publish</label>\n                                        <div>\n                                            <select class=\"form-control\" formControlName=\"publish\" name=\"publish\" [(ngModel)]=\"event.publish\">\n                                                <option value=\"yes\">Yes</option>\n                                                <option value=\"no\">No</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n    \n                            \n    \n                            <div class=\"box-footer\">\n                                <button [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Submit</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n    \n            </section>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/configure-event/configure-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigureEventComponent = (function () {
    function ConfigureEventComponent(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.event = {};
        this.evaluators = new Array;
        this.processing = false;
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy',
            defaultOpen: false,
            closeOnSelect: false
        };
        this.createForm();
    }
    ConfigureEventComponent.prototype.onStartDateSelect = function ($event) {
        this.start_date = $event;
    };
    ConfigureEventComponent.prototype.onEndDateSelect = function ($event) {
        this.end_date = $event;
    };
    ConfigureEventComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            event_title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            host_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            event_description: [''],
            location: [''],
            max_team_members: [''],
            max_ideas: [''],
            prize: [''],
            publish: [''],
            hello: [''],
            evaluators_array: this.formBuilder.array([])
        });
    };
    ConfigureEventComponent.prototype.onChange = function (evaluator_username, isChecked) {
        var evaluatorsFormArray = this.form.controls.evaluators_array;
        if (isChecked) {
            evaluatorsFormArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](evaluator_username));
        }
        else {
            var index = evaluatorsFormArray.controls.findIndex(function (x) { return x.value == evaluator_username; });
            evaluatorsFormArray.removeAt(index);
        }
    };
    ConfigureEventComponent.prototype.onConfigureRegisterSubmit = function () {
        var _this = this;
        var updated_event = {
            event_title: this.form.get('event_title').value,
            host_username: this.form.get('host_username').value,
            event_description: this.form.get('event_description').value,
            start: this.start_date,
            end: this.end_date,
            location: this.form.get('location').value,
            _id: this.event._id,
            max_team_members: this.form.get('max_team_members').value,
            max_ideas: this.form.get('max_ideas').value,
            prize: this.form.get('prize').value,
            publish: this.form.get('publish').value,
            hello: this.form.get('hello').value,
            evaluators_array: this.form.get('evaluators_array').value,
        };
        console.log(updated_event);
        this.authService.updateEvent(updated_event)
            .subscribe(function (events) { return _this.router.navigate(['/view-host-events']); }, function (err) { return console.log(err); });
    };
    ConfigureEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
        });
        this.authService.getEvent(this._id).subscribe(function (event) {
            _this.event = event;
            _this.start = event.start;
            _this.end = event.end;
            _this.start_date = event.start;
            _this.end_date = event.end;
        });
        this.authService.getEvaluators().subscribe(function (evaluators) {
            _this.evaluators = evaluators;
        });
    };
    ConfigureEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-configure-event',
            template: __webpack_require__("../../../../../src/app/components/configure-event/configure-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/configure-event/configure-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ConfigureEventComponent);
    return ConfigureEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "        <table >\n            <thead>\n                <tr>\n                    <th >Username</th>\n\t\t\t\t\t<th >Email</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor='let user of users'>\n\n                    <td>{{ user.username }}</td>\n\t\t\t\t\t<td>{{ user.email }}</td>\n\t\t\t\t\t<td><a (click)=\"deleteUser(user._id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\n\t\t\t\t\t\n                </tr>\n            </tbody>\n        </table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.users = new Array;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    DashboardComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.authService.deleteUser(_id)
            .subscribe(function (users) { return _this.users = users; }, function (err) { return console.log(err); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  redirecting...\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_token_service__ = __webpack_require__("../../../../../src/app/services/get-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoComponent = (function () {
    function DemoComponent(router, activatedRoute, authService, tokenService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.tokenService = tokenService;
        this.accessToken = null;
        this.accessResponse = null;
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.params = params;
            console.log("Route Params: " + JSON.stringify(_this.params));
        });
        if (this.params == null)
            return;
        if (this.params.error) {
            console.log("ERROR: " + this.params.error_description);
            return;
        }
        else {
            this.tokenService.getToken(this.params.code).subscribe(function (success) {
                _this.authService.storeLinkedInData(success.json().myToken, success.json().message, success.json().user);
                console.log(success.json());
                _this.router.navigate(['/profile']);
            }, function (error) { console.log("ERROR: " + error); return; });
        }
        if (this.accessResponse != null) {
            console.log(this.accessResponse.accessToken);
        }
    };
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__("../../../../../src/app/components/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_get_token_service__["a" /* GetTokenService */]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Registered teams</h2>\n<table  class=\"table table-bordered table-hover table-sm table-responsive\"  >\n    <thead>\n        <tr>\n            <th >username</th>\n            <th >Team name</th>\n            <th >Team ID</th>\n            <th >Event ID</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor='let team of teams'>\n  \n            <td>{{ team.username }}</td>\n            <td>{{ team.team_name }}</td>\n            <td>{{ team._id }}</td>  \n            <td>{{ team.event_id }}</td>  \n            <td><a [routerLink]=\"['/eval-teamwise-submissions',team.event_title,team._id]\" class=\"btn btn-xs btn-primary\">View Submissions</a></td>\n            <td><a [routerLink]=\"['/eval-submit-evaluation-form',evaluator_username,team._id]\" class=\"btn btn-xs btn-primary\">Submit Evaluation Form</a></td>\n            \n        </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvalEventwiseRegisteredTeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvalEventwiseRegisteredTeamsComponent = (function () {
    function EvalEventwiseRegisteredTeamsComponent(router, authService, route) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.teams = new Array;
        this.evaluator_username = "";
    }
    EvalEventwiseRegisteredTeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evaluator_username = JSON.parse(localStorage.getItem('evaluator')).evaluator_username;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
        });
        this.authService.getEvalEventwiseTeams(this._id).subscribe(function (teams) {
            _this.teams = teams;
        });
    };
    EvalEventwiseRegisteredTeamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eval-eventwise-registered-teams',
            template: __webpack_require__("../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EvalEventwiseRegisteredTeamsComponent);
    return EvalEventwiseRegisteredTeamsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-register mx-auto mt-5\">\n      \n        <div class=\"card-header\">Evaluation Form</div>\n    \n        <div class=\"card-body\">\n            <form [formGroup]=\"form\" (submit)=\"onEvaluationFormSubmit()\">\n    \n                \n                <div class=\"form-group\">\n                    <label for=\"exampleInputUsername\">Criteria 1</label>\n                    <div>\n                        <input class=\"form-control\" [(ngModel)]=\"data.criteria1\" name=\"criteria1\" formControlName=\"criteria1\" id=\"criteria1\" type=\"number\" placeholder=\"Enter rating on a scale of 1 to 10\">\n                        <ul class=\"help-block\" style=\"color:red\">\n                            <li *ngIf=\"form.controls.criteria1.errors?.required && form.controls.criteria1.dirty\">This field is required</li>\n                        </ul>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <label for=\"exampleInputUsername\">Criteria 2</label>\n                    <div>\n                        <input class=\"form-control\" [(ngModel)]=\"data.criteria2\" name=\"criteria2\" formControlName=\"criteria2\" id=\"event_description\" type=\"number\" placeholder=\"Enter rating on a scale of 1 to 10\">\n                        <ul class=\"help-block\" style=\"color:red\">\n                            <li *ngIf=\"form.controls.criteria2.errors?.required && form.controls.criteria2.dirty\">This field is required</li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputUsername\">Criteria 3</label>\n                    <div>\n                        <input class=\"form-control\" [(ngModel)]=\"data.criteria3\" name=\"criteria3\" formControlName=\"criteria3\" id=\"criteria3\" type=\"number\" placeholder=\"Enter rating on a scale of 1 to 10\">\n                        <ul class=\"help-block\" style=\"color:red\">\n                            <li *ngIf=\"form.controls.criteria3.errors?.required && form.controls.criteria3.dirty\">This field is required</li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputUsername\">Comments</label>\n                    <div>\n                        <input class=\"form-control\" [(ngModel)]=\"data.comments\" name=\"comments\" formControlName=\"comments\" id=\"comments\" type=\"textarea\" placeholder=\"Enter comments\">\n                        <ul class=\"help-block\" style=\"color:red\">\n                            <li *ngIf=\"form.controls.comments.errors?.required && form.controls.comments.dirty\">This field is required</li>\n                        </ul>\n                    </div>\n                </div>\n    \n                <div class=\"text-center\">\n                    <button [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvalSubmitEvaluationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EvalSubmitEvaluationFormComponent = (function () {
    function EvalSubmitEvaluationFormComponent(formBuilder, authService, route, router, _location) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.data = new Array();
        this.evaluator_username = "";
        this.createForm();
    }
    EvalSubmitEvaluationFormComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            criteria1: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            criteria2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            criteria3: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            comments: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
    };
    EvalSubmitEvaluationFormComponent.prototype.onEvaluationFormSubmit = function () {
        var _this = this;
        var updatedEvaluationData = {
            team_id: this._id,
            evaluator_username: this.evaluator_username,
            criteria1: this.form.get('criteria1').value,
            criteria2: this.form.get('criteria2').value,
            criteria3: this.form.get('criteria3').value,
            comments: this.form.get('comments').value
        };
        this.authService.updateEvaluationData(updatedEvaluationData)
            .subscribe(function (data) { return _this._location.back(); }, function (err) { return console.log(err); });
    };
    EvalSubmitEvaluationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
            _this.evaluator_username = params['evaluator_username'];
        });
        this.authService.getEvaluationData(this._id).subscribe(function (data) {
            _this.data = data;
            console.log(data);
        });
    };
    EvalSubmitEvaluationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eval-submit-evaluation-form',
            template: __webpack_require__("../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/eval-submit-evaluation-form/eval-submit-evaluation-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], EvalSubmitEvaluationFormComponent);
    return EvalSubmitEvaluationFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Uploaded Files</h2>\n<table  class=\"table table-bordered table-hover table-sm table-responsive\"  >\n    <thead>\n        <tr>\n            <th >Team ID</th>\n            <th> Event Name</th>\n            <th >File Name</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor='let file of files'>\n            <td>{{file.team_id}}</td>\n            <td>{{event_title}}</td>\n            <td><a href=\"http://localhost:8080/{{file.file_name}}\" target=\"_blank\">{{file.file_name}}</a></td>\n            \n          \n        </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvalTeamwiseSubmissionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvalTeamwiseSubmissionsComponent = (function () {
    function EvalTeamwiseSubmissionsComponent(router, authService, route) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.files = new Array;
    }
    EvalTeamwiseSubmissionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
            _this.event_title = params['event_title'];
        });
        this.authService.getEvalTeamwiseSubmissions(this._id).subscribe(function (files) {
            _this.files = files;
        });
    };
    EvalTeamwiseSubmissionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eval-teamwise-submissions',
            template: __webpack_require__("../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/eval-teamwise-submissions/eval-teamwise-submissions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EvalTeamwiseSubmissionsComponent);
    return EvalTeamwiseSubmissionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Evaluator Dashboard</h2>\n<table  class=\"table table-bordered table-hover table-sm table-responsive\"  >\n    <thead>\n        <tr>\n            <th >Title</th>\n            <th >Host</th>\n            <th >Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor='let evaluator_event of evaluator_events'>\n  \n            <td><a [routerLink]=\"['/eval-eventwise-registered-teams',evaluator_event._id]\">{{ evaluator_event.event_title }}</a></td>\n            <td>{{ evaluator_event.host_username }}</td>\n            <td>{{ evaluator_event.event_description }}</td>\n            \n  \n        </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatorDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvaluatorDashboardComponent = (function () {
    function EvaluatorDashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.evaluator_events = new Array;
    }
    EvaluatorDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obj = JSON.parse(localStorage.getItem('evaluator'));
        this.name = this.obj.evaluator_username;
        this.authService.getEvaluatorEvents(this.name).subscribe(function (evaluator_events) { return _this.evaluator_events = evaluator_events; });
    };
    EvaluatorDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evaluator-dashboard',
            template: __webpack_require__("../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/evaluator-dashboard/evaluator-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EvaluatorDashboardComponent);
    return EvaluatorDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/evaluator-login/evaluator-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/evaluator-login/evaluator-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box card card-login mx-auto mt-5\">\n\t\t<div class=\"login-logo\">\n\t\t\t\t<a href=\"../../index2.html\"><b>Evaluator Login</b></a>\n\t\t\t</div>\n\t<!-- Custom Success/Error Message -->\n\t<div [ngClass]=\"messageClass\">\n    {{ message }}\n\t</div>\n\t\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (submit)=\"onEvaluatorLoginSubmit()\">\n\t\t\n          <div class=\"form-group\">\n            <label for=\"evaluator_username\">Evaluator username</label>\n\t\t\t<div [ngClass]=\"{'has-error': form.controls.evaluator_username.errors && form.controls.evaluator_username.dirty, 'has-success': form.controls.evaluator_username.valid && form.controls.evaluator_username.dirty }\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"evaluator_username\" formControlName=\"evaluator_username\" />\n\t\t\t\t<!-- Validation -->\n\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t<li *ngIf=\"form.controls.evaluator_username.errors?.required && form.controls.evaluator_username.dirty\">This field is required.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n\t\t\t<div [ngClass]=\"{'has-error': form.controls.evaluator_password.errors && form.controls.evaluator_password.dirty, 'has-success': form.controls.evaluator_password.valid && form.controls.evaluator_password.dirty }\">\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"evaluator_password\" formControlName=\"evaluator_password\" />\n\t\t\t\t<!-- Validation -->\n\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t<li *ngIf=\"form.controls.evaluator_password.errors?.required && form.controls.evaluator_password.dirty\">This field is required.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \n          <button [disabled]=\"!form.valid\"  type=\"submit\" class=\"btn btn-primary btn-block\"  value=\"Login\">Login</button>\n\t\t  \n        </form>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/evaluator-login/evaluator-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatorLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_evaluator_auth_guard__ = __webpack_require__("../../../../../src/app/guards/evaluator_auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EvaluatorLoginComponent = (function () {
    function EvaluatorLoginComponent(formBuilder, authService, router, EvaluatorAuthGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.EvaluatorAuthGuard = EvaluatorAuthGuard;
        this.processing = false;
        this.createForm();
    }
    EvaluatorLoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            evaluator_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            evaluator_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    EvaluatorLoginComponent.prototype.disableForm = function () {
        this.form.controls['evaluator_username'].disable(); // Disable username field
        this.form.controls['evaluator_password'].disable(); // Disable password field
    };
    // Function to enable form
    EvaluatorLoginComponent.prototype.enableForm = function () {
        this.form.controls['evaluator_username'].enable(); // Enable username field
        this.form.controls['evaluator_password'].enable(); // Enable password field
    };
    EvaluatorLoginComponent.prototype.onEvaluatorLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var evaluator = {
            evaluator_username: this.form.get('evaluator_username').value,
            evaluator_password: this.form.get('evaluator_password').value // Password input field
        };
        this.authService.evaluator_login(evaluator).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeEvaluatorData(data.token4, data.evaluator);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/evaluator-dashboard']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    EvaluatorLoginComponent.prototype.ngOnInit = function () {
        if (this.EvaluatorAuthGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.EvaluatorAuthGuard.redirectUrl; // Set the previous URL user was redirected from
            this.EvaluatorAuthGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    EvaluatorLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evaluator-login',
            template: __webpack_require__("../../../../../src/app/components/evaluator-login/evaluator-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/evaluator-login/evaluator-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_evaluator_auth_guard__["a" /* EvaluatorAuthGuard */]])
    ], EvaluatorLoginComponent);
    return EvaluatorLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/evaluator-register/evaluator-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/evaluator-register/evaluator-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-register mx-auto mt-5\">\n\t<!-- Custom Success/Error Message -->\n\t<div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n\n    <div class=\"card-header\">Register a Evaluator Account</div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"form\" (submit)=\"onEvaluatorRegisterSubmit()\">\n\t  \n        <div class=\"form-group\">\n        <label for=\"exampleInputUsername\">Evaluator Username</label>\n        <div  [ngClass]=\"{'has-error': (form.controls.evaluator_username.errors && form.controls.evaluator_username.dirty), 'has-success': !form.controls.evaluator_username.errors}\">\n         <input class=\"form-control\" name=\"evaluator_username\" formControlName=\"evaluator_username\" id=\"evaluator_username\" type=\"text\" placeholder=\"Enter Evaluator Username\">\n         <ul class=\"help-block\" style=\"color:red\">\n          <li *ngIf=\"form.controls.evaluator_username.errors?.required && form.controls.evaluator_username.dirty\">This field is required</li>\n              <li *ngIf=\"form.controls.evaluator_username.errors?.minlength && form.controls.evaluator_username.dirty || form.controls.evaluator_username.errors?.maxlength && form.controls.evaluator_username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\n              <li *ngIf=\"form.controls.evaluator_username.errors?.validateUsername && form.controls.evaluator_username.dirty\">Username must not have any special characters</li>\n             \n          </ul>\n           </div>\n\t\t    </div>\n\t\t\n        <div class=\"form-group\">\n         <label for=\"exampleInputEmail1\">Evaluator Email address</label>\n         <div  [ngClass]=\"{'has-error': (form.controls.evaluator_email.errors && form.controls.evaluator_email.dirty), 'has-success': !form.controls.evaluator_email.errors}\">\n            <input class=\"form-control\" name=\"evaluator_email\" formControlName=\"evaluator_email\" id=\"exampleInputEmail1\" type=\"email\" placeholder=\"Enter Evaluator Email\">\n            <ul class=\"help-block\" style=\"color:red\">\n              <li *ngIf=\"form.controls.evaluator_email.errors?.required && form.controls.evaluator_email.dirty\">This field is required</li>\n                  <li *ngIf=\"(form.controls.evaluator_email.errors?.minlength && form.controls.evaluator_email.dirty || form.controls.evaluator_email.errors?.maxlength && form.controls.evaluator_email.dirty ) && form.controls.evaluator_email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n                  <li *ngIf=\"form.controls.evaluator_email.errors?.validateEmail && form.controls.evaluator_email.dirty\">This must be a valid e-mail</li>\n               </ul>\n               </div>\n          </div>\n          \n        <div class=\"form-group\">\n          <div class=\"form-row\">\n            <div class=\"col-md-6\">\n            <label for=\"evaluator_password\">Evaluator Password</label>\n            <div  [ngClass]=\"{'has-error': (form.controls.evaluator_password.errors && form.controls.evaluator_password.dirty), 'has-success': !form.controls.evaluator_password.errors}\">\n     \t\t      <input class=\"form-control\" name=\"evaluator_password\" formControlName=\"evaluator_password\" id=\"evaluator_password\" type=\"password\" placeholder=\"Enter evaluator password\">\n              <ul class=\"help-block\" style=\"color:red\">\n                  <li *ngIf=\"form.controls.evaluator_password.errors?.required && form.controls.evaluator_password.dirty\">This field is required</li>\n                  <li *ngIf=\"form.controls.evaluator_password.errors?.minlength && form.controls.evaluator_password.dirty || form.controls.evaluator_password.errors?.maxlength && form.controls.evaluator_password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n               </ul>\n            </div>\n          </div>\n            <div class=\"col-md-6\">\n             <label for=\"evaluator_confirm\">Confirm Password</label>\n             <div [ngClass]=\"{'has-error': (form.controls.evaluator_confirm.errors && form.controls.evaluator_confirm.dirty) || (form.errors?.matchingPasswords && form.controls.evaluator_confirm.dirty), 'has-success': !form.controls.evaluator_confirm.errors && !form.errors?.matchingPasswords}\">\n              <input class=\"form-control\" name=\"evaluator_confirm\" formControlName=\"evaluator_confirm\" id=\"evaluator_confirm\" type=\"password\" placeholder=\"Confirm evaluator password\">\n               <ul class=\"help-block\" style=\"color:red\">\n\t\t\t        \t<li *ngIf=\"form.controls.evaluator_confirm.errors?.required && form.controls.evaluator_confirm.dirty\">This field is required</li>\n\t\t\t        \t<li *ngIf=\"form.errors?.matchingPasswords && form.controls.evaluator_confirm.dirty\">Password do not match</li>\n\t\t\t\t      </ul>\n            </div>\n          </div>\n        </div>\n        </div>\n\n        <div class=\"text-center\">\n       <button  [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Register</button>\n      </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/evaluator-register/evaluator-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatorRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EvaluatorRegisterComponent = (function () {
    function EvaluatorRegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    EvaluatorRegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            evaluator_email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            evaluator_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            evaluator_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(35),
                ])],
            // Confirm Password Input
            evaluator_confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Field is required	 
        }, { validator: this.matchingPasswords('evaluator_password', 'evaluator_confirm') });
    };
    EvaluatorRegisterComponent.prototype.disableForm = function () {
        this.form.controls['evaluator_email'].disable();
        this.form.controls['evaluator_username'].disable();
        this.form.controls['evaluator_password'].disable();
        this.form.controls['evaluator_confirm'].disable();
    };
    // Function to enable the registration form
    EvaluatorRegisterComponent.prototype.enableForm = function () {
        this.form.controls['evaluator_email'].enable();
        this.form.controls['evaluator_username'].enable();
        this.form.controls['evaluator_password'].enable();
        this.form.controls['evaluator_confirm'].enable();
    };
    EvaluatorRegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    EvaluatorRegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Funciton to ensure passwords match
    EvaluatorRegisterComponent.prototype.matchingPasswords = function (evaluator_password, evaluator_confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[evaluator_password].value === group.controls[evaluator_confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    EvaluatorRegisterComponent.prototype.onEvaluatorRegisterSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        var evaluator = {
            evaluator_email: this.form.get('evaluator_email').value,
            evaluator_username: this.form.get('evaluator_username').value,
            evaluator_password: this.form.get('evaluator_password').value // Password input field
        };
        this.authService.registerEvaluator(evaluator).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/admin-dashboard']); // Redirect to login view
                }, 500);
            }
        });
    };
    EvaluatorRegisterComponent.prototype.ngOnInit = function () {
    };
    EvaluatorRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evaluator-register',
            template: __webpack_require__("../../../../../src/app/components/evaluator-register/evaluator-register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/evaluator-register/evaluator-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], EvaluatorRegisterComponent);
    return EvaluatorRegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/event-page/event-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/event-page/event-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"bg-navy-active color-palette\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-1\">\n                <p  style=\"font-size:500%\"><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i></p>\n            </div>\n            <div class=\"col-lg-11\" style=\"line-height:80%\">\n                <h1> {{ event.event_title }}</h1>\n                <p> {{ event.event_description }}</p>\n                <p><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{ event.display_time }}</p>\n                <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{ event.location }}</p>\n            </div>\n\n          </div>\n           \n        </div>\n    </div>\n    <div  class=\"container\">\n        <section class=\"content\">\n\n            <div class=\"nav-tabs-custom\">\n                <ul class=\"nav nav-tabs\">\n                  <li class=\"active\"><a href=\"#tab_1\" data-toggle=\"tab\">OVERVIEW</a></li>\n                  <li><a href=\"#tab_2\" data-toggle=\"tab\">SCHEDULE</a></li>\n                  <li><a href=\"#tab_3\" data-toggle=\"tab\">RULES</a></li>\n                  <li><a href=\"#tab_3\" data-toggle=\"tab\">PRIZES</a></li>\n                  <li><a href=\"#tab_3\" data-toggle=\"tab\">JUDGING</a></li>\n                </ul>\n                <div class=\"tab-content\">\n                  <div class=\"tab-pane active\" id=\"tab_1\">\n                   <div class=\"row\">\n                     <div class=\"col-lg-3\">\n                        <button [routerLink]=\"['/team-registration',event._id]\" class=\"btn btn-xs btn-primary\" type=\"button\" class=\"btn btn-block btn-primary btn-lg\">JOIN EVENT</button>\n                                                \n                        <br>\n                            <div class=\"box-header with-border\">\n                              <h3 class=\"box-title\">Organizers</h3>\n                            </div>\n                            <!-- /.box-header -->\n                            <div class=\"box-body no-padding\">\n                              <ul class=\"users-list clearfix\">\n                                <li>\n                                  <img src=\"assets/dist/img/user1-128x128.jpg\" alt=\"User Image\">\n                                  <a class=\"users-list-name\" href=\"#\">{{ event.host_username }}</a>\n                                </li>\n                              </ul>\n                            <!-- /.box-footer -->\n                          </div>\n\n                          <br>\n                          <div class=\"box box-primary\">\n                          <div class=\"box-header with-border\">\n                            <h3 class=\"box-title\">Evaluators</h3>\n                          </div>\n                          <!-- /.box-header -->\n                          <div class=\"box-body no-padding\">\n                            <ul class=\"users-list clearfix\">\n                              <li *ngFor=\"let evaluator of evaluators\">\n                                <img src=\"assets/dist/img/user1-128x128.jpg\" alt=\"User Image\">\n                                <a class=\"users-list-name\" href=\"#\">{{ evaluator }}</a>\n                              </li>\n                            </ul>\n                          <!-- /.box-footer -->\n                        </div>\n                        </div>\n\n                     </div>\n                     <div class=\"col-lg-9\">\n                        <div class=\"box box-primary\">\n                            <div class=\"box-header with-border\">\n                              <h3 class=\"box-title\">About this Event</h3>\n                            </div>\n                            <div class=\"box-body\">\n                                <p>Join people from around the world to develop innovative solutions to improve access to justice! The hackathon is not just for techies--we need people who understand the needs of low-income clients, legal professionals with deep knowledge of the issues, and project managers that can keep everything on track.\n                                </p>\n                                <br>\n                               <p> All technologies are welcome (not just Drupal). If you can’t participate in person, you can still participate remotely.\n                                </p>\n                                <br>\n                               <p> The Legal Aid Hackathon is funded by the generosity of the Legal Services Corporation by a TIG Grant to Bay Area Legal Services.\n                              </p>\n                              </div>\n                            <!-- /.box-body -->\n                          </div>\n\n                          <div class=\"box box-primary\">\n                              <div class=\"box-header\">\n                                <h3 class=\"box-title\">Prizes</h3>\n                              </div>\n                              <div class=\"box-body\">\n                                <div class=\"row\"  style=\"text-align:center\">\n                                  <div class=\"col-lg-4\">\n                                      <i style=\"font-size:500%\" class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\n                                      <p>1'st</p>\n                                      <h3>Cash Prizes for team</h3>\n                                    </div>\n                                  <div class=\"col-lg-4\">\n                                      <i style=\"font-size:500%\" class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\n                                      <p>2'nd</p>\n                                      <h3>Fitbits</h3>\n                                    </div>\n                                    <div class=\"col-lg-4\">\n                                        <i style=\"font-size:500%\" class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\n                                        <p>3'rd</p>\n                                        <h3>Xbox</h3>\n                                      </div>\n                                </div>\n                                </div>\n                              <!-- /.box-body -->\n                            </div>\n\n                            <div class=\"box\">\n                                <div class=\"box-header\">\n                                  <h3 class=\"box-title\">Schedule</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    8:00am - Introductions and Overview\n                                    \n                                    9:00am - Start Development\n                                    \n                                    11:00am - Informal break to connect with other teams\n                                    \n                                    12:15pm - Lunch break (lunch provided)\n                                    \n                                    2:30pm - Informal break to connect with other teams\n                                    \n                                    4:30pm - Team Presentations\n                                    \n                                    5:30pm - End of hackathon\n                                    \n                                    Coffee and snacks will be provided throughout the day\n                                  </div>\n                                <!-- /.box-body -->\n                              </div>\n\n                     </div>\n                   </div>\n                  </div>\n                  <!-- /.tab-pane -->\n                  <div class=\"tab-pane\" id=\"tab_2\">\n                    The European languages are members of the same family. Their separate existence is a myth.\n                    For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ\n                    in their grammar, their pronunciation and their most common words. Everyone realizes why a\n                    new common language would be desirable: one could refuse to pay expensive translators. To\n                    achieve this, it would be necessary to have uniform grammar, pronunciation and more common\n                    words. If several languages coalesce, the grammar of the resulting language is more simple\n                    and regular than that of the individual languages.\n                  </div>\n                  <!-- /.tab-pane -->\n                  <div class=\"tab-pane\" id=\"tab_3\">\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n                    It has survived not only five centuries, but also the leap into electronic typesetting,\n                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\n                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software\n                    like Aldus PageMaker including versions of Lorem Ipsum.\n                  </div>\n                  <!-- /.tab-pane -->\n                </div>\n                <!-- /.tab-content -->\n              </div>\n\n            \n        </section>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/event-page/event-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventPageComponent = (function () {
    function EventPageComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.event = {};
        this.evaluators = new Array;
    }
    EventPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
        });
        this.authService.getEvent(this._id).subscribe(function (data) {
            _this.event = data.event;
            for (_this.i = 0; _this.i < _this.event.evaluators_array.length; _this.i++) {
                _this.evaluators[_this.i] = _this.event.evaluators_array[_this.i];
            }
        });
    };
    EventPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-page',
            template: __webpack_require__("../../../../../src/app/components/event-page/event-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/event-page/event-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EventPageComponent);
    return EventPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n        <div class=\"bg-navy-active color-palette\">\n            <div class=\"container\">\n                <h1 style=\"text-align:center\">FEATURED HACKATHONS</h1>\n                <div *ngFor='let event of events'>\n                    <div *ngIf=\"event.future == 'true'\">\n                        <div class=\"bg-light-blue-active color-palette\">\n    \n                            <div class=\"row\">\n    \n                                <div class=\"col-lg-2  col-xs-6\">\n                                    <div>\n                                        <i style=\" line-height:60px;margin-left:20%\" class=\"fa fa-clock-o\"></i> {{event.time}}\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-1 col-xs-6\">\n                                    <div>\n                                        <h1 style=\" line-height:50% ; margin-left:30%\"><i class=\"fa fa-laptop\" ></i></h1>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-7  col-xs-12\">\n                                    <div>\n                                        <h3 style=\" line-height:50% ;\"><a [routerLink]=\"['/event-page',event._id]\" style=\"color:whitesmoke\">{{ event.event_title }}</a></h3>\n                                        <p>{{ event.event_description }}</p>\n                                    </div>\n    \n                                </div>\n                                <div class=\"col-lg-2  col-xs-12\">\n                                    <div>\n                                        <h4 style=\" line-height:50px\"><i class=\"fa fa-map-marker\"></i> {{ event.location }}</h4>\n                                    </div>\n    \n                                </div>\n    \n                            </div>\n                        </div>\n    \n                        <br>\n                    </div>\n                </div>\n    \n            </div>\n        </div>\n        <div  class=\"container\">\n            <section class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4\">\n                                    <div class=\"box-body\">\n                                      <input class=\"form-control\" type=\"text\" placeholder=\"Search Hackathons\">\n                                      <h3 style=\"text-align:center;margin:5px auto\" >near</h3>\n                                      <input class=\"form-control\" type=\"text\" placeholder=\"Location\">\n                                    </div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <div class=\"row\">\n                                <div *ngFor='let event of events'>\n                                        <div >\n                                            <div class=\"bg-gray color-palette\">\n                        \n                                                <div class=\"row\">\n                        \n                                                    <div class=\"col-lg-2  col-xs-6\">\n                                                        <div>\n                                                            <i style=\" line-height:60px;margin-left:20%\" class=\"fa fa-clock-o\"></i> {{event.time}}\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-lg-1 col-xs-6\">\n                                                        <div>\n                                                            <h1 style=\" line-height:50% ; margin-left:30%\"><i class=\"fa fa-laptop\" ></i></h1>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-lg-7  col-xs-12\">\n                                                        <div>\n                                                            <h3 style=\" line-height:50% ;\"><a [routerLink]=\"['/event-page',event._id]\" style=\"color:black\">{{ event.event_title }}</a></h3>\n                                                            <p>{{ event.event_description }}</p>\n                                                        </div>\n                        \n                                                    </div>\n                                                    <div class=\"col-lg-2  col-xs-12\">\n                                                        <div>\n                                                            <h4 style=\" line-height:50px\"><i class=\"fa fa-map-marker\"></i> {{ event.location }}</h4>\n                                                        </div>\n                        \n                                                    </div>\n                        \n                                                </div>\n                                            </div>\n                        \n                                            <br>\n                                        </div>\n                                    </div>\n\n                        </div>\n\n                    </div>\n                </div>\n                \n            </section>\n\n        </div>\n    \n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.events = new Array;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getEvents().subscribe(function (data) {
            _this.events = data.events;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/host-dashboard/host-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/host-dashboard/host-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" routerLink=\"/view-host-events\" routerLinkActive=\"active\">View Host Events</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/host-dashboard/host-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HostDashboardComponent = (function () {
    function HostDashboardComponent() {
    }
    HostDashboardComponent.prototype.ngOnInit = function () {
    };
    HostDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-host-dashboard',
            template: __webpack_require__("../../../../../src/app/components/host-dashboard/host-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/host-dashboard/host-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HostDashboardComponent);
    return HostDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/host-login/host-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/host-login/host-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box card card-login mx-auto mt-5\">\n\t\t\t<div class=\"login-logo\">\n\t\t\t\t\t<a href=\"../../index2.html\"><b>Host Login</b></a>\n\t\t\t\t</div>\n\t<!-- Custom Success/Error Message -->\n\t<div [ngClass]=\"messageClass\">\n    {{ message }}\n\t</div>\n\t\n      <!--div class=\"card-header\">Host Login</div-->\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (submit)=\"onHostLoginSubmit()\">\n\t\t\n          <div class=\"form-group\">\n            <label for=\"host_username\">Host username</label>\n\t\t\t<div [ngClass]=\"{'has-error': form.controls.host_username.errors && form.controls.host_username.dirty, 'has-success': form.controls.host_username.valid && form.controls.host_username.dirty }\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"host_username\" formControlName=\"host_username\" />\n\t\t\t\t<!-- Validation -->\n\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t<li *ngIf=\"form.controls.host_username.errors?.required && form.controls.host_username.dirty\">This field is required.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n\t\t\t<div [ngClass]=\"{'has-error': form.controls.host_password.errors && form.controls.host_password.dirty, 'has-success': form.controls.host_password.valid && form.controls.host_password.dirty }\">\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"host_password\" formControlName=\"host_password\" />\n\t\t\t\t<!-- Validation -->\n\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t<li *ngIf=\"form.controls.host_password.errors?.required && form.controls.host_password.dirty\">This field is required.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \n          <button [disabled]=\"!form.valid\"  type=\"submit\" class=\"btn btn-primary btn-block\"  value=\"Login\">Login</button>\n\t\t  \n        </form>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/host-login/host-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_host_auth_guard__ = __webpack_require__("../../../../../src/app/guards/host_auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HostLoginComponent = (function () {
    function HostLoginComponent(formBuilder, authService, router, HostAuthGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.HostAuthGuard = HostAuthGuard;
        this.processing = false;
        this.createForm();
    }
    HostLoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            host_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            host_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    HostLoginComponent.prototype.disableForm = function () {
        this.form.controls['host_username'].disable(); // Disable username field
        this.form.controls['host_password'].disable(); // Disable password field
    };
    // Function to enable form
    HostLoginComponent.prototype.enableForm = function () {
        this.form.controls['host_username'].enable(); // Enable username field
        this.form.controls['host_password'].enable(); // Enable password field
    };
    HostLoginComponent.prototype.onHostLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var host = {
            host_username: this.form.get('host_username').value,
            host_password: this.form.get('host_password').value // Password input field
        };
        this.authService.host_login(host).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                console.log(data.host);
                _this.authService.storeHostData(data.token3, data.host);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/host-dashboard']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    HostLoginComponent.prototype.ngOnInit = function () {
        if (this.HostAuthGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.HostAuthGuard.redirectUrl; // Set the previous URL user was redirected from
            this.HostAuthGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    HostLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-host-login',
            template: __webpack_require__("../../../../../src/app/components/host-login/host-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/host-login/host-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_host_auth_guard__["a" /* HostAuthGuard */]])
    ], HostLoginComponent);
    return HostLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/host-register/host-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/host-register/host-register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box box-primary\" style=\"width:500px;margin:0 auto\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Add a Host</h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form role=\"form\" [formGroup]=\"form\" (submit)=\"onHostRegisterSubmit()\">\n      <div class=\"box-body\">\n\n          <div class=\"form-group\">\n              <label for=\"exampleInputUsername\">Host Username</label>\n              <div  [ngClass]=\"{'has-error': (form.controls.host_username.errors && form.controls.host_username.dirty), 'has-success': !form.controls.host_username.errors}\">\n               <input class=\"form-control\" name=\"host_username\" formControlName=\"host_username\" id=\"host_username\" type=\"text\" placeholder=\"Enter Host Username\">\n               <ul class=\"help-block\" style=\"color:red\">\n                <li *ngIf=\"form.controls.host_username.errors?.required && form.controls.host_username.dirty\">This field is required</li>\n                    <li *ngIf=\"form.controls.host_username.errors?.minlength && form.controls.host_username.dirty || form.controls.host_username.errors?.maxlength && form.controls.host_username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\n                    <li *ngIf=\"form.controls.host_username.errors?.validateUsername && form.controls.host_username.dirty\">Username must not have any special characters</li>\n                   \n                </ul>\n                 </div>\n              </div>\n          \n              <div class=\"form-group\">\n               <label for=\"exampleInputEmail1\">Host Email address</label>\n               <div  [ngClass]=\"{'has-error': (form.controls.host_email.errors && form.controls.host_email.dirty), 'has-success': !form.controls.host_email.errors}\">\n                  <input class=\"form-control\" name=\"host_email\" formControlName=\"host_email\" id=\"exampleInputEmail1\" type=\"email\" placeholder=\"Enter Host Email\">\n                  <ul class=\"help-block\" style=\"color:red\">\n                    <li *ngIf=\"form.controls.host_email.errors?.required && form.controls.host_email.dirty\">This field is required</li>\n                        <li *ngIf=\"(form.controls.host_email.errors?.minlength && form.controls.host_email.dirty || form.controls.host_email.errors?.maxlength && form.controls.host_email.dirty ) && form.controls.host_email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n                        <li *ngIf=\"form.controls.host_email.errors?.validateEmail && form.controls.host_email.dirty\">This must be a valid e-mail</li>\n                     </ul>\n                     </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                      <label for=\"host_password\">Host Password</label>\n                      <div  [ngClass]=\"{'has-error': (form.controls.host_password.errors && form.controls.host_password.dirty), 'has-success': !form.controls.host_password.errors}\">\n                         <input class=\"form-control\" name=\"host_password\" formControlName=\"host_password\" id=\"host_password\" type=\"password\" placeholder=\"Enter host password\">\n                        <ul class=\"help-block\" style=\"color:red\">\n                            <li *ngIf=\"form.controls.host_password.errors?.required && form.controls.host_password.dirty\">This field is required</li>\n                            <li *ngIf=\"form.controls.host_password.errors?.minlength && form.controls.host_password.dirty || form.controls.host_password.errors?.maxlength && form.controls.host_password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n                         </ul>\n                      </div>\n                    </div>\n                      <div class=\"col-md-6\">\n                       <label for=\"host_confirm\">Confirm Password</label>\n                       <div [ngClass]=\"{'has-error': (form.controls.host_confirm.errors && form.controls.host_confirm.dirty) || (form.errors?.matchingPasswords && form.controls.host_confirm.dirty), 'has-success': !form.controls.host_confirm.errors && !form.errors?.matchingPasswords}\">\n                        <input class=\"form-control\" name=\"host_confirm\" formControlName=\"host_confirm\" id=\"host_confirm\" type=\"password\" placeholder=\"Confirm host password\">\n                         <ul class=\"help-block\" style=\"color:red\">\n                          <li *ngIf=\"form.controls.host_confirm.errors?.required && form.controls.host_confirm.dirty\">This field is required</li>\n                          <li *ngIf=\"form.errors?.matchingPasswords && form.controls.host_confirm.dirty\">Password do not match</li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  </div>      \n\n      </div>\n      <!-- /.box-body -->\n\n      <div class=\"box-footer\">\n          <button  [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Register</button>\n          \n      </div>\n    </form>\n  </div>\n  <!-- /.box -->"

/***/ }),

/***/ "../../../../../src/app/components/host-register/host-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HostRegisterComponent = (function () {
    function HostRegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    HostRegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            host_email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            host_username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            host_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(35),
                ])],
            // Confirm Password Input
            host_confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Field is required	 
        }, { validator: this.matchingPasswords('host_password', 'host_confirm') });
    };
    HostRegisterComponent.prototype.disableForm = function () {
        this.form.controls['host_email'].disable();
        this.form.controls['host_username'].disable();
        this.form.controls['host_password'].disable();
        this.form.controls['host_confirm'].disable();
    };
    // Function to enable the registration form
    HostRegisterComponent.prototype.enableForm = function () {
        this.form.controls['host_email'].enable();
        this.form.controls['host_username'].enable();
        this.form.controls['host_password'].enable();
        this.form.controls['host_confirm'].enable();
    };
    HostRegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    HostRegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Funciton to ensure passwords match
    HostRegisterComponent.prototype.matchingPasswords = function (host_password, host_confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[host_password].value === group.controls[host_confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    HostRegisterComponent.prototype.onHostRegisterSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        var host = {
            host_email: this.form.get('host_email').value,
            host_username: this.form.get('host_username').value,
            host_password: this.form.get('host_password').value // Password input field
        };
        this.authService.registerHost(host).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/admin-dashboard']); // Redirect to login view
                }, 500);
            }
        });
    };
    HostRegisterComponent.prototype.ngOnInit = function () {
    };
    HostRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-host-register',
            template: __webpack_require__("../../../../../src/app/components/host-register/host-register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/host-register/host-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HostRegisterComponent);
    return HostRegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n\t\t<div class=\"login-logo\">\n\t\t\t<a href=\"../../index2.html\"><b>Login</b></a>\n\t\t</div>\n\t\t<!-- /.login-logo -->\n\t\t<div class=\"login-box-body\">\n\t\t\t\t<div *ngIf=\"message\"  [ngClass]=\"messageClass\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t\t<h4><i class=\"icon fa fa-check\"></i>{{ message }}</h4>\n\t\t\t\t\t</div>\n\t\n\t\t\t<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\t\t\t\t\n\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t\t\t\t\t\t<div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" />\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n\t\t\t\t\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t\t\t\t\t<li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t\t\t\t\t\t<div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" />\n\t\t\t\t\t\t\t\t<!-- Validation -->\n\t\t\t\t\t\t\t\t<ul style=\"color:red\" class=\"help-block\">\n\t\t\t\t\t\t\t\t\t<li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button [disabled]=\"!form.valid\"  type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block btn-flat\">Log In</button>\n\t\t\t</form>\n\t\n\t\t\t<div class=\"social-auth-links text-center\">\n\t\t\t\t<p>- OR -</p>\n\t\t\t\t<a href=\"https://www.linkedin.com/oauth/v2/authorization?response_type=code\n\t\t\t\t&client_id=816x7fwlimaa7s&redirect_uri=http://localhost:4200/demo&state=987654321&scope=r_basicprofile r_emailaddress\" class=\"btn btn-block btn-social btn-linkedin btn-flat\"><i class=\"fa fa-linkedin\"></i> Sign in using\n\t\t\t\t\tLinkedIn</a>\n\t\t\t</div>\n\t\t\t<!-- /.social-auth-links -->\n\n\t\t\t<p class=\"text-center\"> Don't have an account? <a routerLink=\"/register\" class=\"text-center\">Register</a></p>\n\t\n\t\t</div>\n\t\t<!-- /.login-box-body -->\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.message = false;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger alert-dismissible'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success alert-dismissible'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/profile']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n        <nav class=\"navbar navbar-static-top\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"navbar-brand\"><b>Hackathon</b></a>\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n                        <i class=\"fa fa-bars\"></i>\n                    </button>\n                </div>\n    \n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse pull-left\" id=\"navbar-collapse\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a></li>\n                        <li *ngIf=\"authService.adminLoggedIn()\">\n                            <a routerLink=\"/admin-dashboard\" routerLinkActive=\"active\">Admin Dashboard</a>\n                        </li>\n                        <li *ngIf=\"authService.hostLoggedIn()\">\n                            <a routerLink=\"/host-dashboard\" routerLinkActive=\"active\">Host Dashboard</a>\n                        </li>\n                        <li *ngIf=\"authService.evaluatorLoggedIn()\">\n                            <a routerLink=\"/evaluator-dashboard\" routerLinkActive=\"active\">Evaluator Dashboard</a>\n                        </li>\n                        <li *ngIf=\"authService.loggedIn()\">\n                            <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n                        </li>\n                        <li *ngIf=\"authService.loggedIn()\">\n                            <a routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\n                        </li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse -->\n                <!-- Navbar Right Menu -->\n                <div class=\"navbar-custom-menu\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"dropdown\" *ngIf=\"!authService.loggedIn()&&!authService.adminLoggedIn()&&!authService.hostLoggedIn()&&!authService.evaluatorLoggedIn()\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Login <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\" role=\"menu\">\n                                <li><a routerLink=\"/login\" routerLinkActive=\"active\">User Login</a></li>\n                                <li><a routerLink=\"/admin-login\" routerLinkActive=\"active\">Admin Login</a></li>\n                                <li><a routerLink=\"/host-login\" routerLinkActive=\"active\">Host Login</a></li>\n                                <li><a routerLink=\"/evaluator-login\" routerLinkActive=\"active\">Evaluator Login</a></li>\n                            </ul>\n                        </li>\n    \n                        <!-- User Account Menu -->\n                        <li class=\"dropdown user user-menu\" *ngIf=\"authService.loggedIn()||authService.adminLoggedIn()||authService.hostLoggedIn()||authService.evaluatorLoggedIn()\">\n                            <!-- Menu Toggle Button -->\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" *ngIf=\"authService.loggedIn()||authService.adminLoggedIn()||authService.hostLoggedIn()||authService.evaluatorLoggedIn()\">\n                                <!-- The user image in the navbar-->\n                               <img *ngIf=\"authService.getAdminName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getAdminName()}}\" class=\"user-image\" alt=\"User Image\">\n                                <img *ngIf=\"authService.getHostName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getHostName()}}\" class=\"user-image\" alt=\"User Image\">\n                                <img *ngIf=\"authService.getEvaluatorName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getEvaluatorName()}}\" class=\"user-image\" alt=\"User Image\">\n                                <img *ngIf=\"authService.getUserName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getUserName()}}\" class=\"user-image\" alt=\"User Image\">  <!-- hidden-xs hides the username on small devices so only the image appears. -->\n                                <span class=\"hidden-xs\" *ngIf=\"authService.getAdminName()\">{{authService.getAdminName()}}</span>\n                                <span class=\"hidden-xs\" *ngIf=\"authService.getHostName()\">{{authService.getHostName()}}</span>\n                                <span class=\"hidden-xs\" *ngIf=\"authService.getEvaluatorName()\">{{authService.getEvaluatorName()}}</span>\n                                <span class=\"hidden-xs\" *ngIf=\"authService.getUserName()\">{{authService.getUserName()}}</span>\n    \n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <!-- The user image in the menu -->\n                                <li class=\"user-header\">\n                                    <img *ngIf=\"authService.getAdminName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getAdminName()}}\" class=\"img-circle\" alt=\"User Image\">\n                                    <img *ngIf=\"authService.getHostName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getHostName()}}\" class=\"img-circle\" alt=\"User Image\">\n                                    <img *ngIf=\"authService.getEvaluatorName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getEvaluatorName()}}\" class=\"img-circle\" alt=\"User Image\">\n                                    <img *ngIf=\"authService.getUserName()\" src=\"https://api.adorable.io/avatars/160/{{authService.getUserName()}}\" class=\"img-circle\" alt=\"User Image\">\n    \n                                    <p *ngIf=\"authService.getAdminName()\">\n                                        {{authService.getAdminName()}} - Admin\n                                        <small>Member since Nov. 2012</small>\n                                    </p>\n                                    <p *ngIf=\"authService.getHostName()\">\n                                            {{authService.getHostName()}} - Host\n                                        <small>Member since Nov. 2012</small>\n                                    </p>\n                                    <p *ngIf=\"authService.getEvaluatorName()\">\n                                            {{authService.getEvaluatorName()}} - Evaluator\n                                        <small>Member since Nov. 2012</small>\n                                    </p>\n                                    <p *ngIf=\"authService.getUserName()\">\n                                            {{authService.getUserName()}} - User\n                                        <small>Member since Nov. 2012</small>\n                                    </p>\n                                </li>\n                                <!-- Menu Body -->\n                                <li class=\"user-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-xs-4 text-center\">\n                                            <a href=\"#\">Followers</a>\n                                        </div>\n                                        <div class=\"col-xs-4 text-center\">\n                                            <a href=\"#\">Sales</a>\n                                        </div>\n                                        <div class=\"col-xs-4 text-center\">\n                                            <a href=\"#\">Friends</a>\n                                        </div>\n                                    </div>\n                                    <!-- /.row -->\n                                </li>\n                                <!-- Menu Footer-->\n                                <li class=\"user-footer\">\n                                    <div class=\"pull-left\">\n                                        <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                                    </div>\n                                    <div class=\"pull-right\">\n                                        <a *ngIf=\"authService.loggedIn()\" routerLink=\"/login\" (click)=\"onLogoutClick()\" routerLinkActive=\"active\" class=\"btn btn-default btn-flat\">Sign out</a>\n                                        <a *ngIf=\"authService.adminLoggedIn()\" routerLink=\"/admin-login\" (click)=\"onAdminLogoutClick()\" routerLinkActive=\"active\" class=\"btn btn-default btn-flat\">Sign out</a>\n                                        <a *ngIf=\"authService.hostLoggedIn()\" routerLink=\"/host-login\" (click)=\"onHostLogoutClick()\" routerLinkActive=\"active\" class=\"btn btn-default btn-flat\">Sign out</a>\n                                        <a *ngIf=\"authService.evaluatorLoggedIn()\" routerLink=\"/evaluator-login\" (click)=\"onEvaluatorLogoutClick()\" routerLinkActive=\"active\" class=\"btn btn-default btn-flat\">Sign out</a>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n    \n                        \n                        <li *ngIf=\"!authService.loggedIn()&&!authService.adminLoggedIn()&&!authService.hostLoggedIn()&&!authService.evaluatorLoggedIn()\">\n                            <a routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n                        </li>\n                    </ul>\n                </div>\n                <!-- /.navbar-custom-menu -->\n            </div>\n            <!-- /.container-fluid -->\n        </nav>\n    </header>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/login']); // Navigate back to home page
    };
    NavbarComponent.prototype.onAdminLogoutClick = function () {
        this.authService.adminLogout(); // Logout user
        this.router.navigate(['/admin-login']); // Navigate back to home page
    };
    NavbarComponent.prototype.onHostLogoutClick = function () {
        this.authService.hostLogout(); // Logout user
        this.router.navigate(['/host-login']); // Navigate back to home page
    };
    NavbarComponent.prototype.onEvaluatorLogoutClick = function () {
        this.authService.evaluatorLogout(); // Logout user
        this.router.navigate(['/evaluator-login']); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"bg-navy-active color-palette\">\n        <div class=\"container\">\n            <h1 style=\"text-align:center\">FEATURED HACKATHONS</h1>\n            <div *ngFor='let event of events'>\n                <div *ngIf=\"event.future == 'true'\">\n                    <div class=\"bg-light-blue-active color-palette\">\n\n                        <div class=\"row\">\n\n                            <div class=\"col-lg-2  col-xs-6\">\n                                <div>\n                                    <i style=\" line-height:60px;margin-left:20%\" class=\"fa fa-clock-o\"></i> {{event.time}}\n                                </div>\n                            </div>\n                            <div class=\"col-lg-1 col-xs-6\">\n                                <div>\n                                    <h1 style=\" line-height:50% ; margin-left:30%\"><i class=\"fa fa-laptop\" ></i></h1>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-7  col-xs-12\">\n                                <div>\n                                    <h3 style=\" line-height:50% ;\">{{ event.event_title }}</h3>\n                                    <p>{{ event.event_description }}</p>\n                                </div>\n\n                            </div>\n                            <div class=\"col-lg-2  col-xs-12\">\n                                <div>\n                                    <h4 style=\" line-height:50px\"><i class=\"fa fa-map-marker\"></i> {{ event.location }}</h4>\n                                </div>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <br>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"container\">\n\n        <section class=\"content\">\n\n            <h2 class=\"page-header\">Registered Teams Events</h2>\n            <table class=\"table table-bordered table-hover table-sm table-responsive\">\n                <thead>\n                    <tr>\n                        <th>Registration ID</th>\n                        <th>Username</th>\n                        <th>Team Name</th>\n                        <th>Event Title</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let team of teams'>\n                        <td>{{ team._id }}</td>\n                        <td>{{ team.username }}</td>\n                        <td>{{ team.team_name }}</td>\n                        <td> {{ team.event_title}}</td>\n                        <td><a class=\"btn btn-xs btn-primary\" [routerLink]=\"['/user-teamwise-submissions',team.event_title,team._id]\">View Submissions</a></td>\n                        <td><a class=\"btn btn-xs btn-primary\" [routerLink]=\"['/submit-artifact',team._id]\">Submit Artifacts</a></td>\n\n                    </tr>\n                </tbody>\n            </table>\n\n            <div class=\"box box-info\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">Ongoing events</h3>\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Title</th>\n                                    <th>Start Date and Time</th>\n                                    <th>End Date and Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let event of events'>\n\n                                    <td *ngIf=\"event.live == 'true'\"><a [routerLink]=\"['/event-page',event._id]\">{{ event.event_title }}</a></td>\n                                    <td *ngIf=\"event.live == 'true'\">{{ event.start | date: 'dd-MM-yyyy HH:mm'}}</td>\n                                    <td *ngIf=\"event.live == 'true'\"> {{ event.end | date: 'dd-MM-yyyy HH:mm'}}</td>\n                                    <td *ngIf=\"event.live == 'true'\"><a [routerLink]=\"['/team-registration',event._id]\" class=\"btn btn-xs btn-primary\">Register</a></td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /.table-responsive -->\n                </div>\n                <!-- /.box-footer -->\n            </div>\n\n            <div class=\"box box-info\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">Future events</h3>\n\n                    <div class=\"box-tools pull-right\">\n                        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n                    </div>\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table no-margin\">\n                            <thead>\n                                <tr>\n                                    <th>Title</th>\n                                    <th>Start Date and Time</th>\n                                    <th>End Date and Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let event of events'>\n\n                                    <td *ngIf=\"event.future == 'true'\"><a [routerLink]=\"['/event-page',event._id]\">{{ event.event_title }}</a></td>\n                                    <td *ngIf=\"event.future == 'true'\">{{ event.start| date: 'dd-MM-yyyy HH:mm' }}</td>\n                                    <td *ngIf=\"event.future == 'true'\"> {{ event.end | date: 'dd-MM-yyyy HH:mm'}}</td>\n                                    <td *ngIf=\"event.future == 'true'\"><a [routerLink]=\"['/team-registration',event._id]\" class=\"btn btn-xs btn-primary\">Register</a></td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /.table-responsive -->\n                </div>\n                <!-- /.box-footer -->\n            </div>\n\n            <div class=\"box box-info\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">Archived events</h3>\n\n                    <div class=\"box-tools pull-right\">\n                        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n                    </div>\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table no-margin\">\n                            <thead>\n                                <tr>\n                                    <th>Title</th>\n                                    <th>Start Date and Time</th>\n                                    <th>End Date and Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let event of events'>\n\n                                    <td *ngIf=\"event.archived == 'true'\"><a [routerLink]=\"['/event-page',event._id]\">{{ event.event_title }}</a></td>\n                                    <td *ngIf=\"event.archived == 'true'\">{{ event.start | date: 'dd-MM-yyyy HH:mm'}}</td>\n                                    <td *ngIf=\"event.archived == 'true'\"> {{ event.end | date: 'dd-MM-yyyy HH:mm'}}</td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /.table-responsive -->\n                </div>\n                <!-- /.box-footer -->\n            </div>\n        </section>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_token_service__ = __webpack_require__("../../../../../src/app/services/get-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, activatedRoute, authService, tokenService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.tokenService = tokenService;
        this.events = new Array;
        this.teams = new Array;
        this.accessToken = null;
        this.accessResponse = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getEvents().subscribe(function (data) {
            _this.events = data.events;
        });
        this.authService.getTeams(JSON.parse(localStorage.getItem('user')).username).subscribe(function (teams) { return _this.teams = teams; });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_get_token_service__["a" /* GetTokenService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" register-box card card-register mx-auto mt-5\">\n\t\t<div class=\"login-logo\">\n\t\t\t\t<a href=\"../../index2.html\"><b>Register an Account</b></a>\n\t\t\t</div>\n\t\t<!-- Custom Success/Error Message -->\n\t\t<div [ngClass]=\"messageClass\">\n\t\t{{ message }}\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body\">\n\t\t  <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\t\t  \n\t\t\t<div class=\"form-group\">\n\t\t\t <label for=\"exampleInputUsername\">Username</label>\n\t\t\t  <div  [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty), 'has-success': !form.controls.username.errors}\">\n\t\t\t  <input class=\"form-control\" name=\"username\" formControlName=\"username\" id=\"username\" type=\"text\" placeholder=\"Enter username\">\n\t\t\t  <!-- Validation -->\n\t\t\t  <ul class=\"help-block\" style=\"color:red\">\n\t\t\t<li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\n\t\t\t<li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\n\t\t\t<li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\n\t\t   \n\t\t\t</ul>\n\t\t\t </div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t <label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t  <div  [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty), 'has-success': !form.controls.email.errors}\">\n\t\t\t  <input class=\"form-control\" name=\"email\" formControlName=\"email\" id=\"exampleInputEmail1\" type=\"email\" placeholder=\"Enter email\">\n\t\t\t  <!-- Validation -->\n\t\t\t  <ul class=\"help-block\" style=\"color:red\">\n\t\t\t<li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n\t\t\t<li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n\t\t\t<li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n\t\t\t </ul>\n\t\t\t </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t  <div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<div  [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\n\t\t\t\t\t<input class=\"form-control\" name=\"password\" formControlName=\"password\" id=\"password\" type=\"password\" placeholder=\"Enter password\">\n\t\t\t\t\t\t<!-- Validation -->\n\t\t\t\t\t<ul class=\"help-block\" style=\"color:red\">\n\t\t\t\t\t<li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n\t\t\t\t\t <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<label for=\"confirm\">Confirm Password</label>\n\t\t\t\t <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n\t\t\t\t<input class=\"form-control\" name=\"confirm\" formControlName=\"confirm\" id=\"confirm\" type=\"password\" placeholder=\"Confirm password\">\n\t\t\t\t\t\t<!-- Validation -->\n\t\t\t\t\t<ul class=\"help-block\" style=\"color:red\">\n\t\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n\t\t\t\t\t<li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"text-center\">\n\t\t   <button [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Register</button>\n\t\t  </div>\n\t\t  </form>\n\t\t  <div class=\"text-center\">\n\t\t\t\t<br>\n\t\t\t<p class=\"text-center\" >Already have an account? <a routerLink=\"/login\">Login Page</a></p>\n\t\t  </div>\n\t\t</div>\n\t  </div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(35),
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required] // Field is required	 
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 500);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/submit-artifact/submit-artifact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/submit-artifact/submit-artifact.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    .my-drop-zone { border: dotted 3px lightgray; }\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n    .another-file-over-class { border: dotted 3px green; }\n \n    html, body { height: 100%; }\n</style>\n \n<div class=\"container\">\n \n    <div class=\"navbar navbar-default\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href>Angular2 File Upload</a>\n        </div>\n    </div>\n \n    <div class=\"row\">\n \n        <div class=\"col-md-3\">\n \n            <h3>Select files</h3>\n \n            <div ng2FileDrop\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                 (fileOver)=\"fileOverBase($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Base drop zone\n            </div>\n \n            <div ng2FileDrop\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n                 (fileOver)=\"fileOverAnother($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Another drop zone\n            </div>\n \n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n \n            Single\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        </div>\n \n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n \n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n \n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                    <td *ngIf=\"uploader.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n \n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n \n        </div>\n \n    </div>\n \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/submit-artifact/submit-artifact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitArtifactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitArtifactComponent = (function () {
    function SubmitArtifactComponent(router, route) {
        this.router = router;
        this.route = route;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.myurl = 'http://localhost:8080/authentication/upload/';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: this.myurl });
    }
    SubmitArtifactComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    SubmitArtifactComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    SubmitArtifactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
        });
        this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('_id', _this._id);
            form.append('username', JSON.parse(localStorage.getItem('user')).username);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status);
            _this.router.navigate(['/profile']);
        };
    };
    SubmitArtifactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-submit-artifact',
            template: __webpack_require__("../../../../../src/app/components/submit-artifact/submit-artifact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/submit-artifact/submit-artifact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SubmitArtifactComponent);
    return SubmitArtifactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/team-registration/team-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-registration/team-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-register mx-auto mt-5\">\n    <!-- Custom Success/Error Message -->\n    <div [ngClass]=\"messageClass\">\n        {{ message }}\n    </div>\n\n    <div class=\"card-header\">Register team</div>\n    <div class=\"card-body\">\n        <form [formGroup]=\"form\" (submit)=\"onTeamRegisterSubmit()\">\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputUsername\">Team Name</label>\n                <input class=\"form-control\" name=\"team_name\" formControlName=\"team_name\" id=\"team_name\" type=\"text\" placeholder=\"Enter team name\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputUsername\">Team Member 1</label>\n                <input class=\"form-control\" name=\"member1\" formControlName=\"member1\" id=\"member1\" type=\"text\" placeholder=\"Enter member1\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputUsername\">Team Member 2</label>\n                <input class=\"form-control\" name=\"member2\" formControlName=\"member2\" id=\"member2\" type=\"text\" placeholder=\"Enter member2\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputUsername\">Team Member 3</label>\n                <input class=\"form-control\" name=\"member3\" formControlName=\"member3\" id=\"member3\" type=\"text\" placeholder=\"Enter member3\">\n            </div>\n\n            <div class=\"text-center\">\n                <button [disabled]=\"!form.valid \" type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">Register Team</button>\n            </div>\n\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/team-registration/team-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamRegistrationComponent = (function () {
    function TeamRegistrationComponent(formBuilder, authService, router, route) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.event = {};
        this.createForm();
    }
    TeamRegistrationComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            team_name: [''],
            member1: [''],
            member2: [''],
            member3: [''],
        });
    };
    TeamRegistrationComponent.prototype.onTeamRegisterSubmit = function () {
        var _this = this;
        var team = {
            username: JSON.parse(localStorage.getItem('user')).username,
            team_name: this.form.get('team_name').value,
            member1: this.form.get('member1').value,
            member2: this.form.get('member2').value,
            member3: this.form.get('member3').value,
            event_id: this.event._id,
            event_title: this.event.event_title
        };
        console.log(team);
        this.authService.registerTeam(team)
            .subscribe(function (teams) { return _this.router.navigate(['/profile']); }, function (err) { return console.log(err); });
    };
    TeamRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
        });
        this.authService.getEvent(this._id).subscribe(function (event) {
            _this.event = event;
        });
    };
    TeamRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team-registration',
            template: __webpack_require__("../../../../../src/app/components/team-registration/team-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/team-registration/team-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], TeamRegistrationComponent);
    return TeamRegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Uploaded Files</h2>\n<table  class=\"table table-bordered table-hover table-sm table-responsive\"  >\n    <thead>\n        <tr>\n            <th >Team ID</th>\n            <th> Event Name</th>\n            <th >File Name</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor='let file of files'>\n            <td>{{file.team_id}}</td>\n            <td>{{event_title}}</td>\n            <td><a href=\"http://localhost:8080/{{file.file_name}}\" target=\"_blank\">{{file.file_name}}</a></td>\n            \n          \n        </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEventwiseSubmissionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEventwiseSubmissionsComponent = (function () {
    function UserEventwiseSubmissionsComponent(router, authService, route) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.files = new Array;
    }
    UserEventwiseSubmissionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._id = params['_id'];
            _this.event_title = params['event_title'];
        });
        this.authService.getUserTeamwiseSubmissions(this._id).subscribe(function (files) {
            _this.files = files;
        });
    };
    UserEventwiseSubmissionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-eventwise-submissions',
            template: __webpack_require__("../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-eventwise-submissions/user-eventwise-submissions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserEventwiseSubmissionsComponent);
    return UserEventwiseSubmissionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-events/view-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-events/view-events.component.html":
/***/ (function(module, exports) {

module.exports = "<table >\n  <thead>\n      <tr>\n          <th >Title</th>\n          <th >Host</th>\n          <th >Description</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor='let event of events'>\n\n          <td>{{ event.event_title }}</td>\n          <td>{{ event.host_username }}</td>\n          <td>{{ event.event_description }}</td>\n          <td><a (click)=\"deleteEvent(event._id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\n\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/view-events/view-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewEventsComponent = (function () {
    function ViewEventsComponent(authService) {
        this.authService = authService;
        this.events = new Array;
    }
    ViewEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getEvents().subscribe(function (events) { return _this.events = events.events; });
    };
    ViewEventsComponent.prototype.deleteEvent = function (_id) {
        var _this = this;
        this.authService.deleteEvent(_id)
            .subscribe(function (events) { return _this.events = events; }, function (err) { return console.log(err); });
    };
    ViewEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-events',
            template: __webpack_require__("../../../../../src/app/components/view-events/view-events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-events/view-events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ViewEventsComponent);
    return ViewEventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-host-events/view-host-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-host-events/view-host-events.component.html":
/***/ (function(module, exports) {

module.exports = "<table >\n  <thead>\n      <tr>\n          <th >Title</th>\n          <th >Host</th>\n          <th >Description</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor='let host_event of host_events'>\n\n          <td><a [routerLink]=\"['/event-page',host_event._id]\">{{ host_event.event_title }}</a></td>\n          <td>{{ host_event.host_username }}</td>\n          <td>{{ host_event.event_description }}</td>\n          <td><a [routerLink]=\"['/configure-event',host_event._id]\" class=\"btn btn-xs btn-primary\">Configure</a></td>\n          <td><a [routerLink]=\"['/event-page',host_event._id]\" class=\"btn btn-xs btn-danger\">Delete</a></td>\n          \n\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/view-host-events/view-host-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewHostEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewHostEventsComponent = (function () {
    function ViewHostEventsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.host_events = new Array;
    }
    ViewHostEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obj = JSON.parse(localStorage.getItem('host'));
        this.name = this.obj.host_username;
        this.authService.getHostEvents(this.name).subscribe(function (host_events) { return _this.host_events = host_events; });
    };
    ViewHostEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-host-events',
            template: __webpack_require__("../../../../../src/app/components/view-host-events/view-host-events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-host-events/view-host-events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewHostEventsComponent);
    return ViewHostEventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-hosts/view-hosts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-hosts/view-hosts.component.html":
/***/ (function(module, exports) {

module.exports = "<table >\n  <thead>\n      <tr>\n          <th >Host</th>\n          <th >Email</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor='let host of hosts'>\n\n          <td>{{ host.host_username }}</td>\n<td>{{ host.host_email }}</td>\n<td><a (click)=\"deleteHost(host._id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\n\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/view-hosts/view-hosts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewHostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewHostsComponent = (function () {
    function ViewHostsComponent(authService) {
        this.authService = authService;
        this.hosts = new Array;
    }
    ViewHostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getHosts().subscribe(function (hosts) { return _this.hosts = hosts; });
    };
    ViewHostsComponent.prototype.deleteHost = function (_id) {
        var _this = this;
        this.authService.deleteHost(_id)
            .subscribe(function (hosts) { return _this.hosts = hosts; }, function (err) { return console.log(err); });
    };
    ViewHostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-hosts',
            template: __webpack_require__("../../../../../src/app/components/view-hosts/view-hosts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-hosts/view-hosts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ViewHostsComponent);
    return ViewHostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/admin_auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AdminAuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.adminLoggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.authService.logout();
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/admin-login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AdminAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/admin_notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminNotAuthGuard = (function () {
    function AdminNotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    AdminNotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.adminLoggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            this.authService.logout();
            return true; // Return true: user is allowed to view route
        }
    };
    AdminNotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminNotAuthGuard);
    return AdminNotAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/evaluator_auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatorAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvaluatorAuthGuard = (function () {
    function EvaluatorAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    EvaluatorAuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.evaluatorLoggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.authService.logout();
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/evaluator-login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    EvaluatorAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EvaluatorAuthGuard);
    return EvaluatorAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/evaluator_notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatorNotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvaluatorNotAuthGuard = (function () {
    function EvaluatorNotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    EvaluatorNotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.evaluatorLoggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            this.authService.logout();
            return true; // Return true: user is allowed to view route
        }
    };
    EvaluatorNotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EvaluatorNotAuthGuard);
    return EvaluatorNotAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/host_auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HostAuthGuard = (function () {
    function HostAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    HostAuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.hostLoggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.authService.logout();
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/host-login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    HostAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HostAuthGuard);
    return HostAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/host_notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostNotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HostNotAuthGuard = (function () {
    function HostNotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    HostNotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.hostLoggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            this.authService.logout();
            return true; // Return true: user is allowed to view route
        }
    };
    HostNotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HostNotAuthGuard);
    return HostNotAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:5000/";
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        return this.http.get(this.domain + 'authentication/dashboard').map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (_id) {
        return this.http.delete(this.domain + 'authentication/delete_user/' + _id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeAdminData = function (token2, admin) {
        localStorage.setItem('token2', token2); // Set token in local storage
        localStorage.setItem('admin', JSON.stringify(admin)); // Set user in local storage as string
    };
    AuthService.prototype.adminLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token2');
    };
    AuthService.prototype.getAdminName = function () {
        if (JSON.parse(localStorage.getItem('admin')))
            return JSON.parse(localStorage.getItem('admin')).admin_username;
        else
            return false;
    };
    AuthService.prototype.getUserName = function () {
        if (JSON.parse(localStorage.getItem('user')))
            return JSON.parse(localStorage.getItem('user')).username;
        else
            return false;
    };
    AuthService.prototype.getHostName = function () {
        if (JSON.parse(localStorage.getItem('host')))
            return JSON.parse(localStorage.getItem('host')).host_username;
        else
            return false;
    };
    AuthService.prototype.getEvaluatorName = function () {
        if (JSON.parse(localStorage.getItem('evaluator')))
            return JSON.parse(localStorage.getItem('evaluator')).evaluator_username;
        else
            return false;
    };
    AuthService.prototype.admin_login = function (admin) {
        return this.http.post(this.domain + 'authentication/admin_login', admin).map(function (res) { return res.json(); });
    };
    AuthService.prototype.adminLogout = function () {
        localStorage.clear();
    };
    AuthService.prototype.storeHostData = function (token3, host) {
        localStorage.setItem('token3', token3); // Set token in local storage
        localStorage.setItem('host', JSON.stringify(host)); // Set user in local storage as string
    };
    AuthService.prototype.hostLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token3');
    };
    AuthService.prototype.registerHost = function (host) {
        return this.http.post(this.domain + 'authentication/host_register', host).map(function (res) { return res.json(); });
    };
    AuthService.prototype.host_login = function (host) {
        return this.http.post(this.domain + 'authentication/host_login', host).map(function (res) { return res.json(); });
    };
    AuthService.prototype.hostLogout = function () {
        localStorage.clear();
    };
    AuthService.prototype.storeEvaluatorData = function (token4, evaluator) {
        localStorage.setItem('token4', token4); // Set token in local storage
        localStorage.setItem('evaluator', JSON.stringify(evaluator)); // Set user in local storage as string
    };
    AuthService.prototype.evaluatorLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token4');
    };
    AuthService.prototype.registerEvaluator = function (evaluator) {
        return this.http.post(this.domain + 'authentication/evaluator_register', evaluator).map(function (res) { return res.json(); });
    };
    AuthService.prototype.evaluator_login = function (evaluator) {
        return this.http.post(this.domain + 'authentication/evaluator_login', evaluator).map(function (res) { return res.json(); });
    };
    AuthService.prototype.evaluatorLogout = function () {
        localStorage.clear();
    };
    AuthService.prototype.registerEvent = function (event) {
        return this.http.post(this.domain + 'authentication/add-event', event).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerTeam = function (team) {
        return this.http.post(this.domain + 'authentication/team_registration', team).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvents = function () {
        return this.http.get(this.domain + 'authentication/events').map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTeams = function (username) {
        return this.http.get(this.domain + 'authentication/team_details/' + username).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvalEventwiseTeams = function (event_id) {
        return this.http.get(this.domain + 'authentication/eval_eventwise_team_details/' + event_id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvalTeamwiseSubmissions = function (team_id) {
        return this.http.get(this.domain + 'authentication/teamwise_files/' + team_id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserTeamwiseSubmissions = function (team_id) {
        return this.http.get(this.domain + 'authentication/teamwise_files/' + team_id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvent = function (_id) {
        return this.http.get(this.domain + 'authentication/events/' + _id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvaluationData = function (_id) {
        return this.http.get(this.domain + 'authentication/evaluation_data/' + _id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateEvent = function (updatedEvent) {
        var body = {
            event_title: updatedEvent.event_title,
            host_username: updatedEvent.host_username,
            event_description: updatedEvent.event_description,
            start: updatedEvent.start,
            end: updatedEvent.end,
            location: updatedEvent.location,
            _id: updatedEvent._id,
            max_team_members: updatedEvent.max_team_members,
            max_ideas: updatedEvent.max_ideas,
            prize: updatedEvent.prize,
            publish: updatedEvent.publish,
            evaluators_array: updatedEvent.evaluators_array,
        };
        console.log(body);
        return this.http.put(this.domain + 'authentication/update-event/' + body._id, body);
    };
    AuthService.prototype.updateEvaluationData = function (updatedEvaluationData) {
        var body = {
            team_id: updatedEvaluationData.team_id,
            evaluator_username: updatedEvaluationData.evaluator_username,
            criteria1: updatedEvaluationData.criteria1,
            criteria2: updatedEvaluationData.criteria2,
            criteria3: updatedEvaluationData.criteria3,
            comments: updatedEvaluationData.comments,
        };
        return this.http.put(this.domain + 'authentication/update_evaluation_data/' + body.team_id, body);
    };
    AuthService.prototype.getHostEvents = function (host_username) {
        return this.http.get(this.domain + 'authentication/get_host_events/' + host_username).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvaluatorEvents = function (evaluator_username) {
        return this.http.get(this.domain + 'authentication/get_evaluator_events/' + evaluator_username).map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteEvent = function (_id) {
        return this.http.delete(this.domain + 'authentication/delete_event/' + _id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getHosts = function () {
        return this.http.get(this.domain + 'authentication/hosts').map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvaluators = function () {
        return this.http.get(this.domain + 'authentication/evaluators').map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteHost = function (_id) {
        return this.http.delete(this.domain + 'authentication/delete_host/' + _id).map(function (res) { return res.json(); });
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])() || Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('myToken');
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    AuthService.prototype.storeLinkedInData = function (myToken, message, user) {
        localStorage.setItem('myToken', myToken);
        localStorage.setItem('message', message);
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/get-token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetTokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetTokenService = (function () {
    function GetTokenService(http) {
        this.http = http;
        this.accessTokenUrl = "http://localhost:5000/authentication/callback";
    }
    GetTokenService.prototype.getToken = function (info) {
        console.log(info);
        return this.http.post(this.accessTokenUrl, {
            code: info
        });
    };
    GetTokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetTokenService);
    return GetTokenService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map