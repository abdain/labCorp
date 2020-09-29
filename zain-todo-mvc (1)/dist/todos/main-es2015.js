(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _todos_services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/services/todos.service */ "./src/app/todos/services/todos.service.ts");
/* harmony import */ var _todos_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/components/complete-all/complete-all.component */ "./src/app/todos/components/complete-all/complete-all.component.ts");
/* harmony import */ var _todos_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/components/todo-list/todo-list.component */ "./src/app/todos/components/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








const _c0 = function (a0) { return { selected: a0 }; };
function AppComponent_footer_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_9_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onChangeFilter($event, "All"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_9_Template_a_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onChangeFilter($event, "Active"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_9_Template_a_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onChangeFilter($event, "Completed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_9_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onClearCompleted(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Clear completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.leftTasks.length, " items left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r0.filters) === "All"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx_r0.filters) === "Active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx_r0.filters) === "Completed"));
} }
class AppComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.filters = this.todoService.filtersMode$;
        this.leftTasks = [];
        this.alltodos = [];
    }
    ngOnInit() {
        this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.todoService.allTodos$.subscribe(todos => {
            this.alltodos = todos;
            this.leftTasks = todos.filter(todo => !todo.completed);
        });
    }
    onEnteKey() {
        const fieldvalue = this.todoForm.get('task').value;
        if (fieldvalue) {
            this.todoService.addTodo(fieldvalue);
            this.todoForm.get('task').setValue('');
        }
    }
    onClearCompleted() {
        this.todoService.clearCompleted();
    }
    onChangeFilter(e, mode) {
        this.todoService.changeFilterMode(mode);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 2, consts: [[1, "todoapp"], [1, "header"], ["role", "form", "novalidate", "", 3, "formGroup"], ["formControlName", "task", "placeholder", "What needs to be done", "autofocus", "", 1, "new-todo", 3, "keyup.enter"], [1, "main"], ["class", "footer", 4, "ngIf"], [1, "info"], [1, "footer"], [1, "todo-count"], [1, "filters"], ["href", "#", 3, "ngClass", "click"], [1, "clear-completed", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AppComponent_Template_input_keyup_enter_5_listener() { return ctx.onEnteKey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-complete-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-todos-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_footer_9_Template, 18, 16, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Double-click to edit a todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.todoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alltodos.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _todos_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_3__["CompleteAllComponent"], _todos_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodosListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: _todos_services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos/todos.module */ "./src/app/todos/todos.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot([], {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false
                }
            }),
            !_app_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
            }) : [],
            _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__["TodosModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__["TodosModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot([], {
                        runtimeChecks: {
                            strictStateImmutability: false,
                            strictActionImmutability: false
                        }
                    }),
                    !_app_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                    }) : [],
                    _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__["TodosModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/todos/components/complete-all/complete-all.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/todos/components/complete-all/complete-all.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteAllComponent", function() { return CompleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/todos/services/todos.service */ "./src/app/todos/services/todos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function CompleteAllComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteAllComponent_ng_container_0_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleCompleteAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark all as complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CompleteAllComponent {
    constructor(changeDetectorRef, todosService) {
        this.changeDetectorRef = changeDetectorRef;
        this.todosService = todosService;
        this.multipleTodosExist = false;
    }
    ngOnInit() {
        this.subscription = this.todosService.allTodos$.subscribe(todos => {
            this.multipleTodosExist = todos && todos.length > 1;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    toggleCompleteAll() {
        this.todosService.toggleAllCompleted();
    }
}
CompleteAllComponent.ɵfac = function CompleteAllComponent_Factory(t) { return new (t || CompleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
CompleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteAllComponent, selectors: [["app-complete-all"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "click"], ["for", "toggle-all", "title", "Mark all as complete", 1, "toggle-all-label"]], template: function CompleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CompleteAllComponent_ng_container_0_Template, 4, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multipleTodosExist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".toggle-all-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvY29tcG9uZW50cy9jb21wbGV0ZS1hbGwvY29tcGxldGUtYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MvY29tcG9uZW50cy9jb21wbGV0ZS1hbGwvY29tcGxldGUtYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZS1hbGwtbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-complete-all',
                styleUrls: [
                    './complete-all.component.scss',
                ],
                templateUrl: './complete-all.component.html',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/components/todo-list/todo-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todos/components/todo-list/todo-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/todos/services/todos.service */ "./src/app/todos/services/todos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





const _c0 = function (a0, a1) { return { completed: a0, editing: a1 }; };
function TodosListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodosListComponent_li_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const task_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onCompleteTask(task_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TodosListComponent_li_1_Template_label_dblclick_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const task_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onEdit(task_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosListComponent_li_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const task_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onClear(task_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodosListComponent_li_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const task_r1 = ctx.$implicit; return task_r1.text = $event; })("keyup.enter", function TodosListComponent_li_1_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const task_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onUpdate(task_r1.id, task_r1.text); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, task_r1.completed, task_r1.editing));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", task_r1.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", task_r1.text);
} }
class TodosListComponent {
    constructor(todosService) {
        this.todosService = todosService;
        this.tasksList = this.todosService.todos$;
    }
    onCompleteTask(i) {
        this.todosService.toggleComplete(i);
    }
    onUpdate(i, text) {
        this.todosService.updateTodo(i, text);
    }
    onClear(i) {
        this.todosService.removeTodo(i);
    }
    onEdit(i) {
        this.todosService.editTodo(i);
    }
}
TodosListComponent.ɵfac = function TodosListComponent_Factory(t) { return new (t || TodosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
TodosListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosListComponent, selectors: [["app-todos-list"]], decls: 3, vars: 3, consts: [[1, "todo-list"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "change"], [3, "dblclick"], [1, "destroy", 3, "click"], ["type", "text", 1, "edit", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function TodosListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosListComponent_li_1_Template, 7, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.tasksList));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".no-matches[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-left: 2rem;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1tYXRjaGVzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos-list',
                styleUrls: [
                    './todo-list.component.scss',
                ],
                templateUrl: './todo-list.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/services/todos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/todos/services/todos.service.ts ***!
  \*************************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _state_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/todo.actions */ "./src/app/todos/state/todo.actions.ts");
/* harmony import */ var _state_todo_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/todo.selectors */ "./src/app/todos/state/todo.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");





class TodosService {
    constructor(store) {
        this.store = store;
        this.todos$ = this.store.select(_state_todo_selectors__WEBPACK_IMPORTED_MODULE_2__["todos"]);
        this.filtersMode$ = this.store.select(_state_todo_selectors__WEBPACK_IMPORTED_MODULE_2__["filtersModes"]);
        this.allTodos$ = this.store.select(_state_todo_selectors__WEBPACK_IMPORTED_MODULE_2__["alltodos"]);
    }
    addTodo(text) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["addTodo"]({ text }));
    }
    removeTodo(id) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["removeTodo"]({ id }));
    }
    toggleComplete(id) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["toggleCompleted"]({ id }));
    }
    toggleAllCompleted() {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["toggleAllCompleted"]());
    }
    updateTodo(id, text) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["updateTodo"]({ id, text }));
    }
    editTodo(id) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["editTodo"]({ id }));
    }
    changeFilterMode(mode) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["changeFilterMode"]({ mode }));
    }
    clearCompleted() {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["clearCompleted"]());
    }
}
TodosService.ɵfac = function TodosService_Factory(t) { return new (t || TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TodosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosService, factory: TodosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/state/todo.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/todos/state/todo.actions.ts ***!
  \*********************************************/
/*! exports provided: addTodo, removeTodo, editTodo, updateTodo, toggleCompleted, toggleAllCompleted, changeFilterMode, clearCompleted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTodo", function() { return removeTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTodo", function() { return editTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodo", function() { return updateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCompleted", function() { return toggleCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAllCompleted", function() { return toggleAllCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilterMode", function() { return changeFilterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCompleted", function() { return clearCompleted; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");

const addTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Add Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Remove Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Edit Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Update Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Toggle Completed', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleAllCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Toggle All Completed');
const changeFilterMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Change Filter Mode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Clear Completed');


/***/ }),

/***/ "./src/app/todos/state/todo.selectors.ts":
/*!***********************************************!*\
  !*** ./src/app/todos/state/todo.selectors.ts ***!
  \***********************************************/
/*! exports provided: todosSelector, todos, alltodos, filtersModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosSelector", function() { return todosSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todos", function() { return todos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alltodos", function() { return alltodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtersModes", function() { return filtersModes; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _todos_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.reducer */ "./src/app/todos/state/todos.reducer.ts");


const todosSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('todos');
const todos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(todosSelector, _todos_reducer__WEBPACK_IMPORTED_MODULE_1__["todos"]);
const alltodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(todosSelector, _todos_reducer__WEBPACK_IMPORTED_MODULE_1__["allTodos"]);
const filtersModes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(todosSelector, _todos_reducer__WEBPACK_IMPORTED_MODULE_1__["filterMode"]);


/***/ }),

/***/ "./src/app/todos/state/todos.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/state/todos.reducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, todosReducer, filterMode, todos, allTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosReducer", function() { return todosReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterMode", function() { return filterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todos", function() { return todos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTodos", function() { return allTodos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todos/state/todo.actions.ts");


const initialState = {
    filterMode: 'All',
    todos: [],
    allTodos: []
};
function getFilteredTodos(updatedTodos, filterMode) {
    return filterMode === 'All' ? updatedTodos : filterMode === 'Active' ?
        [...updatedTodos.filter(todo => !todo.completed)] :
        [...updatedTodos.filter(todo => todo.completed)];
}
function todosReducer(state, action) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["addTodo"], (existingState, { text }) => {
        let updatedTodos = [{ text, completed: false, id: new Date().getTime() }, ...existingState.allTodos];
        let { filterMode } = existingState;
        return Object.assign(Object.assign({}, existingState), { todos: getFilteredTodos(updatedTodos, filterMode), allTodos: updatedTodos });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["removeTodo"], (existingState, { id }) => {
        const updatedTodos = [...existingState.allTodos];
        updatedTodos.forEach((task, i) => {
            if (task.id === id) {
                updatedTodos.splice(i, 1);
            }
        });
        let { filterMode } = existingState;
        return Object.assign(Object.assign({}, existingState), { todos: getFilteredTodos(updatedTodos, filterMode), allTodos: updatedTodos });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["changeFilterMode"], (existingState, { mode }) => (Object.assign(Object.assign({}, existingState), { filterMode: mode, todos: getFilteredTodos(existingState.allTodos, mode) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["toggleCompleted"], (existingState, { id }) => {
        let updatedTodos = [...existingState.allTodos];
        updatedTodos.forEach((todo, i) => {
            if (id === todo.id) {
                todo.completed = !todo.completed;
            }
        });
        let { filterMode } = existingState;
        return Object.assign(Object.assign({}, existingState), { todos: getFilteredTodos(updatedTodos, filterMode), allTodos: updatedTodos });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["editTodo"], (existingState, { id }) => {
        let updatedTodos = [...existingState.allTodos];
        updatedTodos.forEach((todo, i) => {
            if (id === todo.id) {
                todo.editing = true;
            }
        });
        let { filterMode } = existingState;
        return Object.assign(Object.assign({}, existingState), { todos: getFilteredTodos(updatedTodos, filterMode), allTodos: updatedTodos });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["updateTodo"], (existingState, { id, text }) => {
        let updatedTodos = [...existingState.allTodos];
        updatedTodos.forEach((todo, i) => {
            if (id === todo.id) {
                if (text === '') {
                    updatedTodos.splice(i, 1);
                }
                else {
                    todo.text = text;
                    todo.editing = false;
                }
            }
        });
        let { filterMode } = existingState;
        return Object.assign(Object.assign({}, existingState), { todos: getFilteredTodos(updatedTodos, filterMode), allTodos: updatedTodos });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["clearCompleted"], (existingState) => {
        let updatedTodos = [...existingState.allTodos.filter(todo => !todo.completed)];
        let { filterMode } = existingState;
        return Object.assign(Object.assign({}, existingState), { todos: getFilteredTodos(updatedTodos, filterMode), allTodos: updatedTodos });
    }))(state, action);
}
const filterMode = (state) => state.filterMode;
const todos = (state) => state.todos;
const allTodos = (state) => state.allTodos;


/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/complete-all/complete-all.component */ "./src/app/todos/components/complete-all/complete-all.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/todos/components/todo-list/todo-list.component.ts");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/todos.service */ "./src/app/todos/services/todos.service.ts");
/* harmony import */ var _state_todos_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/todos.reducer */ "./src/app/todos/state/todos.reducer.ts");










const DECLARATIONS = [
    _components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__["CompleteAllComponent"],
    _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodosListComponent"],
];
class TodosModule {
}
TodosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TodosModule });
TodosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TodosModule_Factory(t) { return new (t || TodosModule)(); }, providers: [
        _services_todos_service__WEBPACK_IMPORTED_MODULE_6__["TodosService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('todos', _state_todos_reducer__WEBPACK_IMPORTED_MODULE_7__["todosReducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TodosModule, { declarations: [_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__["CompleteAllComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodosListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"]], exports: [_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__["CompleteAllComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodosListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TodosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    ...DECLARATIONS,
                ],
                exports: [
                    ...DECLARATIONS,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('todos', _state_todos_reducer__WEBPACK_IMPORTED_MODULE_7__["todosReducer"]),
                ],
                providers: [
                    _services_todos_service__WEBPACK_IMPORTED_MODULE_6__["TodosService"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\zain-todo-mvc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map