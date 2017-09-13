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
 * @name MS ADAL
 * @description
 * Active Directory Authentication Library (ADAL) plugin.
 * Active Directory Authentication Library ([ADAL](https://docs.microsoft.com/en-us/dotnet/api/microsoft.identitymodel.clients.activedirectory?view=azure-dotnet))
 * plugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of
 * Windows Server Active Directory and Windows Azure Active Directory. Here you can find the source code for the library.
 * @usage
 * ```typescript
 * import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal';
 *
 *
 * constructor(private msAdal: MSAdal) {}
 *
 * ...
 *
 * let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');
 *
 * authContext.acquireTokenAsync('https://graph.windows.net', 'a5d92493-ae5a-4a9f-bcbf-9f1d354067d3', 'http://MyDirectorySearcherApp')
 *   .then((authResponse: AuthenticationResult) => {
 *     console.log('Token is' , authResponse.accessToken);
 *     console.log('Token will expire on', authResponse.expiresOn);
 *   })
 *   .catch((e: any) => console.log('Authentication failed', e));
 *
 *
 * ```
 *
 * @classes
 * AuthenticationContext
 * @interfaces
 * AuthenticationResult
 * TokenCache
 * TokenCacheItem
 * UserInfo
 */
var MSAdal = MSAdal_1 = (function (_super) {
    __extends(MSAdal, _super);
    function MSAdal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSAdal.prototype.createAuthenticationContext = function (authority, validateAuthority) {
        if (validateAuthority === void 0) { validateAuthority = true; }
        var authContext;
        if (core_1.checkAvailability(MSAdal_1.getPluginRef(), null, MSAdal_1.getPluginName()) === true) {
            authContext = new (MSAdal_1.getPlugin()).AuthenticationContext(authority);
        }
        return new AuthenticationContext(authContext);
    };
    return MSAdal;
}(core_1.IonicNativePlugin));
MSAdal.decorators = [
    { type: core_2.Injectable },
];
/** @nocollapse */
MSAdal.ctorParameters = function () { return []; };
MSAdal = MSAdal_1 = __decorate([
    core_1.Plugin({
        pluginName: 'MSADAL',
        plugin: 'cordova-plugin-ms-adal',
        pluginRef: 'Microsoft.ADAL',
        repo: 'https://github.com/AzureAD/azure-activedirectory-library-for-cordova',
        platforms: ['Android', 'iOS', 'Windows']
    })
], MSAdal);
exports.MSAdal = MSAdal;
/**
 * @hidden
 */
var AuthenticationContext = (function () {
    function AuthenticationContext(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Acquires token using interactive flow. It always shows UI and skips token from cache.
     *
     * @param   {String}  resourceUrl Resource identifier
     * @param   {String}  clientId    Client (application) identifier
     * @param   {String}  redirectUrl Redirect url for this application
     * @param   {String}  userId      User identifier (optional)
     * @param   {String}  extraQueryParameters
     *                                Extra query parameters (optional)
     *                                Parameters should be escaped before passing to this method (e.g. using 'encodeURI()')
     * @returns {Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
     */
    AuthenticationContext.prototype.acquireTokenAsync = function (resourceUrl, clientId, redirectUrl, userId, extraQueryParameters) { return; };
    /**
     * Acquires token WITHOUT using interactive flow. It checks the cache to return existing result
     * if not expired. It tries to use refresh token if available. If it fails to get token without
     * displaying UI it will fail. This method guarantees that no UI will be shown to user.
     *
     * @param   {String}  resourceUrl Resource identifier
     * @param   {String}  clientId    Client (application) identifier
     * @param   {String}  userId      User identifier (optional)
     * @returns {Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
     */
    AuthenticationContext.prototype.acquireTokenSilentAsync = function (resourceUrl, clientId, userId) { return; };
    return AuthenticationContext;
}());
__decorate([
    core_1.InstanceProperty,
    __metadata("design:type", String)
], AuthenticationContext.prototype, "authority", void 0);
__decorate([
    core_1.InstanceProperty,
    __metadata("design:type", Boolean)
], AuthenticationContext.prototype, "validateAuthority", void 0);
__decorate([
    core_1.InstanceProperty,
    __metadata("design:type", Object)
], AuthenticationContext.prototype, "tokenCache", void 0);
__decorate([
    core_1.CordovaInstance({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationContext.prototype, "acquireTokenAsync", null);
__decorate([
    core_1.CordovaInstance({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AuthenticationContext.prototype, "acquireTokenSilentAsync", null);
exports.AuthenticationContext = AuthenticationContext;
var MSAdal_1;
//# sourceMappingURL=index.js.map