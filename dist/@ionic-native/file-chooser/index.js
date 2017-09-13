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
 * @name File Chooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { FileChooser } from '@ionic-native/file-chooser';
 *
 * constructor(private fileChooser: FileChooser) { }
 *
 * ...
 *
 * this.fileChooser.open()
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
var FileChooser = (function (_super) {
    __extends(FileChooser, _super);
    function FileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open a file
     * @returns {Promise<string>}
     */
    FileChooser.prototype.open = function () { return; };
    return FileChooser;
}(core_2.IonicNativePlugin));
FileChooser.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FileChooser.ctorParameters = function () { return []; };
__decorate([
    core_2.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileChooser.prototype, "open", null);
FileChooser = __decorate([
    core_2.Plugin({
        pluginName: 'FileChooser',
        plugin: 'cordova-plugin-filechooser',
        pluginRef: 'fileChooser',
        repo: 'https://github.com/ihadeed/cordova-filechooser',
        platforms: ['Android']
    })
], FileChooser);
exports.FileChooser = FileChooser;
//# sourceMappingURL=index.js.map