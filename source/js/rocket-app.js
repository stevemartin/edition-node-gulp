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
var rocket_1 = require('./rocket');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var RocketApp = (function () {
    function RocketApp() {
    }
    RocketApp = __decorate([
        core_1.Component({
            selector: 'rocket-app',
            template: "<div>\n  <svg height=\"100\" width=\"100\">\n\t<g rocket/>\n  </svg>\n</div>\n",
            directives: [rocket_1.Rocket]
        }), 
        __metadata('design:paramtypes', [])
    ], RocketApp);
    return RocketApp;
}());
exports.RocketApp = RocketApp;
platform_browser_dynamic_1.bootstrap(RocketApp);
