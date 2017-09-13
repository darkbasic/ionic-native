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
 * @name Document Viewer
 * @description
 * This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.
 *
 * @usage
 * ```typescript
 * import { DocumentViewer } from '@ionic-native/document-viewer';
 *
 *
 * constructor(private document: DocumentViewer) { }
 *
 * ...
 * const options: DocumentViewerOptions = {
 *   title: 'My PDF'
 * }
 *
 * this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
 *
 * ```
 *
 * @interfaces
 * DocumentViewerOptions
 */
var DocumentViewer = (function (_super) {
    __extends(DocumentViewer, _super);
    function DocumentViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Displays the email composer pre-filled with data.
     *
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    DocumentViewer.prototype.getSupportInfo = function () { return; };
    /**
     * Check if the document can be shown
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {Array<DocumentViewerOptions>} options
     * @param [onPossible] {Function}
     * @param [onMissingApp] {Function}
     * @param [onImpossible] {Function}
     * @param [onError] {Function}
     */
    DocumentViewer.prototype.canViewDocument = function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { };
    /**
     * Opens the file
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {DocumentViewerOptions} options
     * @param [onShow] {Function}
     * @param [onClose] {Function}
     * @param [onMissingApp] {Function}
     * @param [onError] {Function}
     */
    DocumentViewer.prototype.viewDocument = function (url, contentType, options, onShow, onClose, onMissingApp, onError) { };
    return DocumentViewer;
}(core_1.IonicNativePlugin));
DocumentViewer.decorators = [
    { type: core_2.Injectable },
];
/** @nocollapse */
DocumentViewer.ctorParameters = function () { return []; };
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentViewer.prototype, "getSupportInfo", null);
__decorate([
    core_1.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Function, Function, Function, Function]),
    __metadata("design:returntype", void 0)
], DocumentViewer.prototype, "canViewDocument", null);
__decorate([
    core_1.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Function, Function, Function, Function]),
    __metadata("design:returntype", void 0)
], DocumentViewer.prototype, "viewDocument", null);
DocumentViewer = __decorate([
    core_1.Plugin({
        pluginName: 'Document Viewer',
        plugin: 'cordova-plugin-document-viewer',
        pluginRef: 'SitewaertsDocumentViewer',
        repo: 'https://github.com/sitewaerts/cordova-plugin-document-viewer',
        platforms: ['Android', 'iOS', 'Windows']
    })
], DocumentViewer);
exports.DocumentViewer = DocumentViewer;
//# sourceMappingURL=index.js.map