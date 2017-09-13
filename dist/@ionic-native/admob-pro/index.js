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
 * @paid
 * @name AdMob Pro
 * @description
 * Plugin for Google Ads, including AdMob / DFP (DoubleClick for publisher) and mediations to other Ad networks.
 *
 * IMPORTANT NOTICE: this plugin takes a percentage out of your earnings if you profit more than $1,000. Read more about this on the plugin's repo. For a completely free alternative, see [AdMobPro Free](../admob-free).
 * @usage
 * ```typescript
 * import { AdMobPro } from '@ionic-native/admob-pro';
 * import { Platform } from 'ionic-angular';
 *
 * constructor(private admob: AdMobPro, private platform: Platform ) { }
 *
 * ionViewDidLoad() {
 *   this.admob.onAdDismiss()
 *     .subscribe(() => { console.log('User dismissed ad'); });
 * }
 *
 * onClick() {
 *   let adId;
 *   if(this.platform.is('android')) {
 *     adId = 'YOUR_ADID_ANDROID';
 *   } else if (this.platform.is('ios')) {
 *     adId = 'YOUR_ADID_IOS';
 *   }
 *   this.admob.prepareInterstitial({adId: adId})
 *     .then(() => { this.admob.showInterstitial(); });
 * }
 *
 * ```
 *
 * @interfaces
 * AdMobOptions
 * AdExtras
 */
var AdMobPro = (function (_super) {
    __extends(AdMobPro, _super);
    function AdMobPro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AD_POSITION = {
            NO_CHANGE: 0,
            TOP_LEFT: 1,
            TOP_CENTER: 2,
            TOP_RIGHT: 3,
            LEFT: 4,
            CENTER: 5,
            RIGHT: 6,
            BOTTOM_LEFT: 7,
            BOTTOM_CENTER: 8,
            BOTTOM_RIGHT: 9,
            POS_XY: 10
        };
        return _this;
    }
    /**
     * Create a banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the banner is created
     */
    AdMobPro.prototype.createBanner = function (adIdOrOptions) { return; };
    /**
     * Destroy the banner, remove it from screen.
     */
    AdMobPro.prototype.removeBanner = function () { };
    /**
     * Show banner at position
     * @param position {number} Position. Use `AdMobPro.AD_POSITION` to set values.
     */
    AdMobPro.prototype.showBanner = function (position) { };
    /**
     * Show banner at custom position
     * @param x {number} Offset from screen left.
     * @param y {number} Offset from screen top.
     */
    AdMobPro.prototype.showBannerAtXY = function (x, y) { };
    /**
     * Hide the banner, remove it from screen, but can show it later
     */
    AdMobPro.prototype.hideBanner = function () { };
    /**
     * Prepare interstitial banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when interstitial is prepared
     */
    AdMobPro.prototype.prepareInterstitial = function (adIdOrOptions) { return; };
    /**
     * Show interstitial ad when it's ready
     */
    AdMobPro.prototype.showInterstitial = function () { };
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the ad is prepared
     */
    AdMobPro.prototype.prepareRewardVideoAd = function (adIdOrOptions) { return; };
    /**
     * Show a reward video ad
     */
    AdMobPro.prototype.showRewardVideoAd = function () { };
    /**
     * Sets the values for configuration and targeting
     * @param options {AdMobOptions} Options
     * @returns {Promise<any>} Returns a Promise that resolves when the options have been set
     */
    AdMobPro.prototype.setOptions = function (options) { return; };
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    AdMobPro.prototype.getAdSettings = function () { return; };
    /**
     * Triggered when failed to receive Ad
     * @returns {Observable<any>}
     */
    AdMobPro.prototype.onAdFailLoad = function () { return; };
    /**
     * Triggered when Ad received
     * @returns {Observable<any>}
     */
    AdMobPro.prototype.onAdLoaded = function () { return; };
    /**
     * Triggered when Ad will be showed on screen
     * @returns {Observable<any>}
     */
    AdMobPro.prototype.onAdPresent = function () { return; };
    /**
     * Triggered when user click the Ad, and will jump out of your App
     * @returns {Observable<any>}
     */
    AdMobPro.prototype.onAdLeaveApp = function () { return; };
    /**
     * Triggered when dismiss the Ad and back to your App
     * @returns {Observable<any>}
     */
    AdMobPro.prototype.onAdDismiss = function () { return; };
    return AdMobPro;
}(core_2.IonicNativePlugin));
AdMobPro.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AdMobPro.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdMobPro.prototype, "createBanner", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdMobPro.prototype, "removeBanner", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdMobPro.prototype, "showBanner", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AdMobPro.prototype, "showBannerAtXY", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdMobPro.prototype, "hideBanner", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdMobPro.prototype, "prepareInterstitial", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdMobPro.prototype, "showInterstitial", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdMobPro.prototype, "prepareRewardVideoAd", null);
__decorate([
    core_2.Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdMobPro.prototype, "showRewardVideoAd", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdMobPro.prototype, "setOptions", null);
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobPro.prototype, "getAdSettings", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'onAdFailLoad',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], AdMobPro.prototype, "onAdFailLoad", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'onAdLoaded',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], AdMobPro.prototype, "onAdLoaded", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'onAdPresent',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], AdMobPro.prototype, "onAdPresent", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'onAdLeaveApp',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], AdMobPro.prototype, "onAdLeaveApp", null);
__decorate([
    core_2.Cordova({
        eventObservable: true,
        event: 'onAdDismiss',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], AdMobPro.prototype, "onAdDismiss", null);
AdMobPro = __decorate([
    core_2.Plugin({
        pluginName: 'AdMob Pro',
        plugin: 'cordova-plugin-admobpro',
        pluginRef: 'AdMob',
        repo: 'https://github.com/floatinghotpot/cordova-admob-pro',
        platforms: ['Android', 'iOS', 'Windows Phone 8']
    })
], AdMobPro);
exports.AdMobPro = AdMobPro;
//# sourceMappingURL=index.js.map