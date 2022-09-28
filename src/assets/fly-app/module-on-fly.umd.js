(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router')) :
  typeof define === 'function' && define.amd ? define('module-on-fly', ['exports', '@angular/common', '@angular/core', '@angular/router'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["module-on-fly"] = {}, global.ng.common, global.ng.core, global.ng.router));
})(this, (function (exports, common, i0, i1) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var ModuleOnFlyComponent = /** @class */ (function () {
      function ModuleOnFlyComponent() {
      }
      ModuleOnFlyComponent.prototype.ngOnInit = function () {
      };
      return ModuleOnFlyComponent;
  }());
  ModuleOnFlyComponent.ɵfac = function ModuleOnFlyComponent_Factory(t) { return new (t || ModuleOnFlyComponent)(); };
  ModuleOnFlyComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ModuleOnFlyComponent, selectors: [["lib-moduleOnFly"]], decls: 2, vars: 0, template: function ModuleOnFlyComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0__namespace.ɵɵelementStart(0, "p");
              i0__namespace.ɵɵtext(1, " module-on-fly works! ");
              i0__namespace.ɵɵelementEnd();
          }
      }, encapsulation: 2 });
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModuleOnFlyComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'lib-moduleOnFly',
                      template: "\n    <p>\n      module-on-fly works!\n    </p>\n  ",
                      styles: []
                  }]
          }], function () { return []; }, null);
  })();

  var ModuleOnFlyModule = /** @class */ (function () {
      function ModuleOnFlyModule() {
      }
      return ModuleOnFlyModule;
  }());
  ModuleOnFlyModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ModuleOnFlyModule });
  ModuleOnFlyModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function ModuleOnFlyModule_Factory(t) { return new (t || ModuleOnFlyModule)(); }, imports: [[
              common.CommonModule,
              i1.RouterModule.forChild([
                  { path: 'module-onfly', component: ModuleOnFlyComponent }
              ])
          ]] });
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ModuleOnFlyModule, { declarations: [ModuleOnFlyComponent], imports: [common.CommonModule, i1__namespace.RouterModule] }); })();
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModuleOnFlyModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [ModuleOnFlyComponent],
                      imports: [
                          common.CommonModule,
                          i1.RouterModule.forChild([
                              { path: 'module-onfly', component: ModuleOnFlyComponent }
                          ])
                      ],
                  }]
          }], null, null);
  })();

  /*
   * Public API Surface of module-on-fly
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ModuleOnFlyModule = ModuleOnFlyModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=module-on-fly.umd.js.map
