(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('moment')) :
  typeof define === 'function' && define.amd ? define('module-on-fly', ['exports', '@angular/common', '@angular/core', '@angular/router', 'moment'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["module-on-fly"] = {}, global.ng.common, global.ng.core, global.ng.router, global.moment));
})(this, (function (exports, common, i0, i1, moment) { 'use strict';

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
  var moment__namespace = /*#__PURE__*/_interopNamespace(moment);

  var ModuleOnFlyComponent = /** @class */ (function () {
      function ModuleOnFlyComponent() {
      }
      ModuleOnFlyComponent.prototype.ngOnInit = function () {
          this.calculatedFromMoment = moment__namespace.now();
      };
      return ModuleOnFlyComponent;
  }());
  ModuleOnFlyComponent.ɵfac = function ModuleOnFlyComponent_Factory(t) { return new (t || ModuleOnFlyComponent)(); };
  ModuleOnFlyComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ModuleOnFlyComponent, selectors: [["lib-moduleOnFly"]], decls: 7, vars: 1, consts: [["src", "onfly-assets/grady-booch-presenting-5.jpg"]], template: function ModuleOnFlyComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0__namespace.ɵɵelementStart(0, "p");
              i0__namespace.ɵɵtext(1, " module-on-fly works! ");
              i0__namespace.ɵɵelement(2, "img", 0);
              i0__namespace.ɵɵelement(3, "br");
              i0__namespace.ɵɵelement(4, "br");
              i0__namespace.ɵɵelement(5, "br");
              i0__namespace.ɵɵtext(6);
              i0__namespace.ɵɵelementEnd();
          }
          if (rf & 2) {
              i0__namespace.ɵɵadvance(6);
              i0__namespace.ɵɵtextInterpolate1(" calculatedFromMoment: ", ctx.calculatedFromMoment, " ");
          }
      }, encapsulation: 2 });
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModuleOnFlyComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'lib-moduleOnFly',
                      template: "\n    <p>\n      module-on-fly works!\n      <img src='onfly-assets/grady-booch-presenting-5.jpg' />\n      <br />\n      <br />\n      <br />\n      calculatedFromMoment: {{ calculatedFromMoment }}\n    </p>\n  ",
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
                  { path: '', component: ModuleOnFlyComponent }
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
                              { path: '', component: ModuleOnFlyComponent }
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
