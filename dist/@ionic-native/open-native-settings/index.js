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
var core_1 = require("@ionic-native/core");
var core_2 = require("@angular/core");
/**
 * @name Open Native Settings
 * @description
 * Plugin to open native screens of iOS/android settings
 * @usage
 * You can open any of these settings:
 * ```
 * "about", // ios
    "accessibility", // ios, android
    "account", // ios, android
    "airplane_mode", // ios, android
    "apn", // android
    "application_details", // ios, android
    "application_development", // android
    "application", // android
    "autolock", // ios
    "battery_optimization", // android
    "bluetooth", // ios, android
    "castle", // ios
    "captioning", // android
    "cast", // android
    "cellular_usage", // ios
    "configuration_list", // ios
    "data_roaming", // android
    "date", // ios, android
    "display", // ios, android
    "dream", // android
    "facetime", // ios
    "home", // android
    "keyboard", // ios, android
    "keyboard_subtype", // android
    "locale", // ios, android
    "location", // ios, android
    "locations", // ios
    "manage_all_applications", // android
    "manage_applications", // android
    "memory_card", // android
    "music", // ios
    "music_equalizer", // ios
    "music_volume", // ios
    "network", // ios, android
    "nike_ipod", // ios
    "nfcsharing", // android
    "nfc_payment", // android
    "nfc_settings", // android
    "notes", // ios
    "notification_id", // ios
    "passbook", // ios
    "phone", // ios
    "photos", // ios
    "print", // android
    "privacy", // android
    "quick_launch", // android
    "reset", // ios
    "ringtone", // ios
    "browser", // ios
    "search", // ios, android
    "security", // android
    "settings", // ios, android
    "show_regulatory_info",
    "sound", // ios, android
    "software_update", // ios
    "storage", // ios, android
    "store", // ios, android
    "sync", // android
    "tethering", // ios
    "twitter", // ios
    "touch", // ios
    "usage", // ios, android
    "user_dictionary", // android
    "video", // ios
    "voice_input", // android
    "vpn", // ios
    "wallpaper", // ios
    "wifi_ip", // android
    "wifi", // ios, android
    "wireless" // android
    ```
 * ```typescript
 * import { OpenNativeSettings } from '@ionic-native/open-native-settings';
 *
 *
 * constructor(private openNativeSettings: OpenNativeSettings) { }
 *
 * ...
 *
 *
 * ```
 */
var OpenNativeSettings = (function (_super) {
    __extends(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a setting dialog
     * @param setting {string} setting name
     * @return {Promise<any>}
     */
    OpenNativeSettings.prototype.open = function (setting) { return; };
    return OpenNativeSettings;
}(core_1.IonicNativePlugin));
OpenNativeSettings.decorators = [
    { type: core_2.Injectable },
];
/** @nocollapse */
OpenNativeSettings.ctorParameters = function () { return []; };
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpenNativeSettings.prototype, "open", null);
OpenNativeSettings = __decorate([
    core_1.Plugin({
        pluginName: 'OpenNativeSettings',
        plugin: 'cordova-open-native-settings',
        pluginRef: 'cordova.plugins.settings',
        repo: 'https://github.com/guyromb/Cordova-open-native-settings',
        platforms: ['Android', 'iOS']
    })
], OpenNativeSettings);
exports.OpenNativeSettings = OpenNativeSettings;
//# sourceMappingURL=index.js.map