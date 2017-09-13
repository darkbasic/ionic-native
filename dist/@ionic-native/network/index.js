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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/merge");
/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from '@ionic-native/network';
 *
 * constructor(private network: Network) { }
 *
 * ...
 *
 * // watch network for a disconnect
 * let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = this.network.onConnect().subscribe(() => {
 *   console.log('network connected!');
 *   // We just got a connection but we need to wait briefly
 *
   // before we determine the connection type. Might need to wait.
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (this.network.type === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
var Network = (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    Network.prototype.onchange = function () {
        return Observable_1.Observable.merge(this.onConnect(), this.onDisconnect());
    };
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    Network.prototype.onDisconnect = function () { return; };
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    Network.prototype.onConnect = function () { return; };
    return Network;
}(core_2.IonicNativePlugin));
Network.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
Network.ctorParameters = function () { return []; };
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], Network.prototype, "type", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], Network.prototype, "downlinkMax", void 0);
__decorate([
    core_2.CordovaCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], Network.prototype, "onchange", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'offline'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], Network.prototype, "onDisconnect", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'online'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], Network.prototype, "onConnect", null);
Network = __decorate([
    core_2.Plugin({
        pluginName: 'Network',
        plugin: 'cordova-plugin-network-information',
        pluginRef: 'navigator.connection',
        repo: 'https://github.com/apache/cordova-plugin-network-information',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Network);
exports.Network = Network;
//# sourceMappingURL=index.js.map