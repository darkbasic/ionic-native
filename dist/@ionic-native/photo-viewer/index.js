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
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from '@ionic-native/photo-viewer';
 *
 * constructor(private photoViewer: PhotoViewer) { }
 *
 * ...
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 * ```
 */
var PhotoViewer = (function (_super) {
    __extends(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {any}
     */
    PhotoViewer.prototype.show = function (url, title, options) { };
    return PhotoViewer;
}(core_2.IonicNativePlugin));
PhotoViewer.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PhotoViewer.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], PhotoViewer.prototype, "show", null);
PhotoViewer = __decorate([
    core_2.Plugin({
        pluginName: 'PhotoViewer',
        plugin: 'com-sarriaroman-photoviewer',
        pluginRef: 'PhotoViewer',
        repo: 'https://github.com/sarriaroman/photoviewer',
        platforms: ['Android', 'iOS']
    })
], PhotoViewer);
exports.PhotoViewer = PhotoViewer;
//# sourceMappingURL=index.js.map