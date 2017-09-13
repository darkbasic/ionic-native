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
 * @name 3D Touch
 * @description
 * @usage
 * Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.
 * ```typescript
 * import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';
 *
 * constructor(private threeDeeTouch: ThreeDeeTouch) { }
 *
 * ...
 *
 * this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));
 *
 * this.threeDeeTouch.watchForceTouches()
 *   .subscribe(
 *     (data: ThreeDeeTouchForceTouch) => {
 *       console.log('Force touch %' + data.force);
 *       console.log('Force touch timestamp: ' + data.timestamp);
 *       console.log('Force touch x: ' + data.x);
 *       console.log('Force touch y: ' + data.y);
 *     }
 *   );
 *
 *
 * let actions: Array<ThreeDeeTouchQuickAction> = [
 *   {
 *     type: 'checkin',
 *     title: 'Check in',
 *     subtitle: 'Quickly check in',
 *     iconType: 'Compose'
 *   },
 *   {
 *     type: 'share',
 *     title: 'Share',
 *     subtitle: 'Share like you care',
 *     iconType: 'Share'
 *   },
 *   {
 *     type: 'search',
 *     title: 'Search',
 *     iconType: 'Search'
 *   },
 *   {
 *     title: 'Show favorites',
 *     iconTemplate: 'HeartTemplate'
 *   }
 * ];
 *
 * this.threeDeeTouch.configureQuickActions(actions);
 *
 * this.threeDeeTouch.onHomeIconPressed().subscribe(
 *  (payload) => {
 *    // returns an object that is the button you presed
 *    console.log('Pressed the ${payload.title} button')
 *    console.log(payload.type)
 *
 *  }
 * )
 * ```
 * @interfaces
 * ThreeDeeTouchQuickAction
 * ThreeDeeTouchForceTouch
 */
var ThreeDeeTouch = (function (_super) {
    __extends(ThreeDeeTouch, _super);
    function ThreeDeeTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
     * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether the plugin is available or not
     */
    ThreeDeeTouch.prototype.isAvailable = function () { return; };
    /**
     * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
     * @returns {Observable<ThreeDeeTouchForceTouch>} Returns an observable that sends a `ThreeDeeTouchForceTouch` object
     */
    ThreeDeeTouch.prototype.watchForceTouches = function () { return; };
    /**
     * setup the 3D-touch actions, takes an array of objects with the following
     * @param {string} type (optional) A type that can be used `onHomeIconPressed` callback
     * @param {string} title Title for your action
     * @param {string} subtitle (optional) A short description for your action
     * @param {string} iconType (optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update
     * @param {string} iconTemplate (optional) Can be used to provide your own icon
     */
    ThreeDeeTouch.prototype.configureQuickActions = function (quickActions) { };
    /**
     * When a home icon is pressed, your app launches and this JS callback is invoked.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    ThreeDeeTouch.prototype.onHomeIconPressed = function () {
        return new Observable_1.Observable(function (observer) {
            if (window.ThreeDeeTouch) {
                window.ThreeDeeTouch.onHomeIconPressed = observer.next.bind(observer);
            }
            else {
                observer.error('3dTouch plugin is not available.');
                observer.complete();
            }
        });
    };
    /**
     * Enable Link Preview.
     * UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.
     */
    ThreeDeeTouch.prototype.enableLinkPreview = function () { };
    /**
     * Disabled the link preview feature, if enabled.
     */
    ThreeDeeTouch.prototype.disableLinkPreview = function () { };
    return ThreeDeeTouch;
}(core_2.IonicNativePlugin));
ThreeDeeTouch.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ThreeDeeTouch.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThreeDeeTouch.prototype, "isAvailable", null);
__decorate([
    core_2.Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], ThreeDeeTouch.prototype, "watchForceTouches", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ThreeDeeTouch.prototype, "configureQuickActions", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThreeDeeTouch.prototype, "enableLinkPreview", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThreeDeeTouch.prototype, "disableLinkPreview", null);
ThreeDeeTouch = __decorate([
    core_2.Plugin({
        pluginName: 'ThreeDeeTouch',
        plugin: 'cordova-plugin-3dtouch',
        pluginRef: 'ThreeDeeTouch',
        repo: 'https://github.com/EddyVerbruggen/cordova-plugin-3dtouch',
        platforms: ['iOS']
    })
], ThreeDeeTouch);
exports.ThreeDeeTouch = ThreeDeeTouch;
//# sourceMappingURL=index.js.map