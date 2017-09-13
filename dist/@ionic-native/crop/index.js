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
 * @name Crop
 * @description Crops images
 * @usage
 * ```typescript
 * import { Crop } from '@ionic-native/crop';
 *
 * constructor(private crop: Crop) { }
 *
 * ...
 *
 * this.crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log('new image path is: ' + newImage),
 *     error => console.error('Error cropping image', error)
 *   );
 * ```
 */
var Crop = (function (_super) {
    __extends(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Crops an image
     * @param pathToImage
     * @param options
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    Crop.prototype.crop = function (pathToImage, options) { return; };
    return Crop;
}(core_2.IonicNativePlugin));
Crop.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
Crop.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Crop.prototype, "crop", null);
Crop = __decorate([
    core_2.Plugin({
        pluginName: 'Crop',
        plugin: 'cordova-plugin-crop',
        pluginRef: 'plugins',
        repo: 'https://github.com/jeduan/cordova-plugin-crop',
        platforms: ['Android', 'iOS']
    })
], Crop);
exports.Crop = Crop;
//# sourceMappingURL=index.js.map