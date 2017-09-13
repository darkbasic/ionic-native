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
/**
 * @beta
 * @name Web Intent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import { WebIntent } from '@ionic-native/web-intent';
 *
 * constructor(private webIntent: WebIntent) { }
 *
 * ...
 *
 * const options = {
 *   action: this.webIntent.ACTION_VIEW,
 *   url: 'path/to/file',
 *   type: 'application/vnd.android.package-archive'
 * };
 *
 * this.webIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 */
var WebIntent = (function (_super) {
    __extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Launches an Android intent
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    WebIntent.prototype.startActivity = function (options) { return; };
    /**
     * Starts a new activity and return the result to the application
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    WebIntent.prototype.startActivityForResult = function (options) { return; };
    /**
     * Checks if this app was invoked with specified extra
     * @param extra {string}
     * @returns {Promise<any>}
     */
    WebIntent.prototype.hasExtra = function (extra) { return; };
    /**
     * Gets the extra that this app was invoked with
     * @param extra {string}
     * @returns {Promise<any>}
     */
    WebIntent.prototype.getExtra = function (extra) { return; };
    /**
     * Gets the Uri the app was invoked with
     * @returns {Promise<any>}
     */
    WebIntent.prototype.getUri = function () { return; };
    ;
    /**
     * @returns {Observable<string>}
     */
    WebIntent.prototype.onNewIntent = function () { return; };
    ;
    /**
     * Sends a custom intent passing optional extras
     * @param options {Object} { action: string, extras?: { option: boolean } }
     * @returns {Promise<any>}
     */
    WebIntent.prototype.sendBroadcast = function (options) { return; };
    /**
     * Registers a broadcast receiver for the specified filters
     * @param filters {any}
     */
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { };
    /**
     * Unregisters a broadcast receiver
     */
    WebIntent.prototype.unregisterBroadcastReceiver = function () { };
    /**
    * Returns the content of the intent used whenever the application activity is launched
    */
    WebIntent.prototype.onIntent = function () { };
    /**
    *
    */
    WebIntent.prototype.onActivityResult = function () { };
    /**
     * @returns {Promise<any>}
     */
    WebIntent.prototype.getIntent = function () { return; };
    ;
    return WebIntent;
}(core_2.IonicNativePlugin));
WebIntent.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
WebIntent.ctorParameters = function () { return []; };
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "ACTION_SEND", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "ACTION_VIEW", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "EXTRA_TEXT", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "EXTRA_SUBJECT", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "EXTRA_STREAM", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "EXTRA_EMAIL", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "ACTION_CALL", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "ACTION_SENDTO", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "ACTION_GET_CONTENT", void 0);
__decorate([
    core_2.CordovaProperty,
    __metadata("design:type", String)
], WebIntent.prototype, "ACTION_PICK", void 0);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "startActivity", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "startActivityForResult", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "hasExtra", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "getExtra", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "getUri", null);
__decorate([
    core_2.Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], WebIntent.prototype, "onNewIntent", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "sendBroadcast", null);
__decorate([
    core_2.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebIntent.prototype, "registerBroadcastReceiver", null);
__decorate([
    core_2.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebIntent.prototype, "unregisterBroadcastReceiver", null);
__decorate([
    core_2.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebIntent.prototype, "onIntent", null);
__decorate([
    core_2.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebIntent.prototype, "onActivityResult", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebIntent.prototype, "getIntent", null);
WebIntent = __decorate([
    core_2.Plugin({
        pluginName: 'WebIntent',
        plugin: 'com-darryncampbell-cordova-plugin-intent',
        pluginRef: 'intentShim',
        repo: 'https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent',
        platforms: ['Android']
    })
], WebIntent);
exports.WebIntent = WebIntent;
//# sourceMappingURL=index.js.map