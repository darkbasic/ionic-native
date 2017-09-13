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
 * @beta
 * @name HyperTrack
 * @description
 * HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider.
 * Make sure to include your publishable key at config.xml (see [HyperTrack Cordova Setup](https://docs.hypertrack.com/sdks/cordova/setup.html#step-2-configure-the-sdk)).
 *
 * @usage
 * ```typescript
 * import { HyperTrack } from '@ionic-native/hyper-track';
 *
 * constructor(private hyperTrack: HyperTrack) { }
 *
 * // Check if app has location permissions enabled
 * this.hyperTrack.checkLocationPermission().then(response => {
 *   // response (String) can be "true" or "false"
 *   if (response != "true") {
 *     // Ask for permissions
 *     this.hyperTrack.requestPermissions().then(response => {}, error => {});
 *   }
 * }, error => {});
 *
 * // Check if app has location services enabled
 * this.hyperTrack.checkLocationServices().then(response => {
 *   // response (String) can be "true" or "false"
 *   if (response != "true") {
 *     // Request services to be enabled
 *     this.hyperTrack.requestLocationServices().then(response => {}, error => {});
 *   }
 * }, error => {});
 *
 * // First set the current user. This can be done via getOrCreateUser() or setUserId()
 * this.hyperTrack.setUserId("xxx").then(user => {
 *   // user (String) is a String representation of a User's JSON
 *
 *   this.hyperTrack.startTracking().then(userId => {}, trackingError => {});
 *
 *   this.hyperTrack.createAndAssignAction('visit', 'lookupId','address', 20.12, -100.3).then(action => {
 *     // Handle action. It's a String representation of the Action's JSON. For example:
 *     // '{"eta":"Jul 17, 2017 12:50:03 PM","assigned_at":"Jul 17, 2017 12:34:38 PM",,"distance":"0.0",...}'
 *   }, error => {});
 *
 *   // You can complete an action with completeAction() or completeActionWithLookupId()
 *   this.hyperTrack.completeAction('action-id').then(response => {
 *     // Handle response (String). Should be "OK".
 *   }, error => {});
 *
 *   this.hyperTrack.getCurrentLocation().then(location => {
 *     // Handle location. It's a String representation of a Location's JSON.For example:
 *     // '{"mAccuracy":22.601,,"mLatitude":23.123456, "mLongitude":-100.1234567, ...}'
 *   }, error => {});
 *
 *   this.hyperTrack.stopTracking().then(success => {
 *     // Handle success (String). Should be "OK".
 *   }, error => {});
 *
 * }, error => {});*
 * ```
 */
var HyperTrack = (function (_super) {
    __extends(HyperTrack, _super);
    function HyperTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns given text. For testing purposes.
     * @param {String} text Given text to print
     * @returns {Promise<any>} Returns a Promise that resolves with the result text (which is the same as the given text) if successful, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.helloWorld = function (text) { return; };
    /**
     * Create a new user to identify the current device or get a user from a lookup id.
     * @param {String} name User's name
     * @param {String} phone User's phone
     * @param {String} photo User's photo as URL or a Base64 converted string
     * @param {String} lookupId User's lookupId, which is used to check if a new user is to be created (in this case you could set it to an internal reference for the user that you can use later to identify it), or if one with an existing lookupId is to be used.
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the User's JSON, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.getOrCreateUser = function (name, phone, photo, lookupId) { return; };
    /**
     * Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.
     * @param {String} userId User's ID
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred. An "OK" response doesn't necessarily mean that the userId was found. It just means that it was set correctly.
     */
    HyperTrack.prototype.setUserId = function (userId) { return; };
    /**
     * Enable the SDK and start tracking. This will fail if there is no user set.
     * @returns {Promise<any>} Returns a Promise that resolves with the userId (String) of the User being tracked if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
     */
    HyperTrack.prototype.startTracking = function () { return; };
    /**
     * Create and assign an action to the current user using specified parameters
     * @param {String} type The action type. Can be one from "pickup", "delivery", "dropoff", "visit", "stopover" or "task"
     * @param {String} lookupId The Action's desired lookupId
     * @param {String} expectedPlaceAddress The address of the Action
     * @param {Number} expectedPlaceLatitude The latitude of the Action
     * @param {Number} expectedPlaceLongitude The longitude of the Action
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Action's JSON, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.createAndAssignAction = function (type, lookupId, expectedPlaceAddress, expectedPlaceLatitude, expectedPlaceLongitude) { return; };
    /**
     * Complete an action from the SDK by its ID
     * @param {String} actionId ID of the Action that will be marked as completed
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.completeAction = function (actionId) { return; };
    /**
     * Complete an action from the SDK using Action's lookupId as parameter
     * @param {String} lookupId Lookup ID of the Action that will be marked as completed
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.completeActionWithLookupId = function (lookupId) { return; };
    /**
     * Disable the SDK and stop tracking.
     * Needs user setting (via getOrCreateUser() or setUserId()) first.
     * @returns {Promise<any>} Returns a Promise that resolves with the an "OK" string if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
     */
    HyperTrack.prototype.stopTracking = function () { return; };
    /**
     * Get user's current location from the SDK
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Location's JSON, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.getCurrentLocation = function () { return; };
    /**
     * Check if Location permission has been granted to the app (for Android).
     * Returns "true" or "false" in success method accordingly.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location permission was granted, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.checkLocationPermission = function () { return; };
    /**
     * Request user to grant Location access to the app (for Anrdoid).
     * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location access was given to the app, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.requestPermissions = function () { return; };
    /**
     * Check if Location services are enabled on the device (for Android).
     * Returns "true" or "false" in success method accordingly.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location services are enabled, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.checkLocationServices = function () { return; };
    /**
     * Request user to enable Location services on the device.
     * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location services were enabled, or it gets rejected if an error ocurred.
     */
    HyperTrack.prototype.requestLocationServices = function () { return; };
    return HyperTrack;
}(core_2.IonicNativePlugin));
HyperTrack.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
HyperTrack.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "helloWorld", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "getOrCreateUser", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "setUserId", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "startTracking", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "createAndAssignAction", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "completeAction", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "completeActionWithLookupId", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "stopTracking", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "getCurrentLocation", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "checkLocationPermission", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "requestPermissions", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "checkLocationServices", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HyperTrack.prototype, "requestLocationServices", null);
HyperTrack = __decorate([
    core_2.Plugin({
        pluginName: 'HyperTrack',
        plugin: 'cordova-plugin-hypertrack',
        pluginRef: 'cordova.plugins.HyperTrack',
        repo: 'https://github.com/hypertrack/hypertrack-cordova',
        platforms: ['Android']
    })
], HyperTrack);
exports.HyperTrack = HyperTrack;
//# sourceMappingURL=index.js.map