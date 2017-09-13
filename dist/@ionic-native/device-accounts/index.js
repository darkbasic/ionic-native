"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@ionic-native/core");
/**
 * @name Device Accounts
 * @description
 * Gets the Google accounts associated with the Android device
 *
 * @usage
 * ```typescript
 * import { DeviceAccounts } from '@ionic-native/device-accounts';
 *
 * constructor(private deviceAccounts: DeviceAccounts) { }
 *
 * ...
 *
 * this.deviceAccounts.get()
 *   .then(accounts => console.log(accounts))
 *   .catch(error => console.error(error));
 *
 * ```
 */
var DeviceAccounts = (function (_super) {
    __extends(DeviceAccounts, _super);
    function DeviceAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Gets all accounts registered on the Android Device
     * @returns {Promise<any>}
     */
    DeviceAccounts.prototype.get = function () { return; };
    /**
     *  Get all accounts registered on Android device for requested type
     * @returns {Promise<any>}
     */
    DeviceAccounts.prototype.getByType = function (type) { return; };
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     * @returns {Promise<any>}
     */
    DeviceAccounts.prototype.getEmails = function () { return; };
    /**
     *  Get the first email registered on Android device
     * @returns {Promise<any>}
     */
    DeviceAccounts.prototype.getEmail = function () { return; };
    return DeviceAccounts;
}(core_2.IonicNativePlugin));
DeviceAccounts.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DeviceAccounts.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceAccounts.prototype, "get", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviceAccounts.prototype, "getByType", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceAccounts.prototype, "getEmails", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceAccounts.prototype, "getEmail", null);
DeviceAccounts = __decorate([
    core_2.Plugin({
        pluginName: 'DeviceAccounts',
        plugin: 'cordova-device-accounts',
        pluginRef: 'plugins.DeviceAccounts',
        repo: 'https://github.com/danielsogl/cordova-device-accounts',
        platforms: ['Android']
    })
], DeviceAccounts);
exports.DeviceAccounts = DeviceAccounts;
//# sourceMappingURL=index.js.map