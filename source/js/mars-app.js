"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mars_1 = require('./mars');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var MarsApp = (function () {
    function MarsApp() {
    }
    MarsApp = __decorate([
        core_1.Component({
            selector: 'mars-app',
            template: "<div>\n  <svg height=\"100\" width=\"100\">\n\t<g mars/>\n  </svg>\n</div>\n",
            directives: [mars_1.Mars]
        }), 
        __metadata('design:paramtypes', [])
    ], MarsApp);
    return MarsApp;
}());
exports.MarsApp = MarsApp;
platform_browser_dynamic_1.bootstrap(MarsApp);
