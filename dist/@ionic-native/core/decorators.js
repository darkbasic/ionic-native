"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("./plugin");
var util_1 = require("./util");
var Observable_1 = require("rxjs/Observable");
require("rxjs/observable/throw");
/**
 * @private
 */
function InstanceCheck(opts) {
    if (opts === void 0) { opts = {}; }
    return function (pluginObj, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (plugin_1.instanceAvailability(this)) {
                    return descriptor.value.apply(this, args);
                }
                else {
                    if (opts.sync) {
                        return;
                    }
                    else if (opts.observable) {
                        return new Observable_1.Observable(function () { });
                    }
                    return util_1.getPromise(function () { });
                }
            },
            enumerable: true
        };
    };
}
exports.InstanceCheck = InstanceCheck;
/**
 * Executes function only if plugin is available
 * @private
 */
function CordovaCheck(opts) {
    if (opts === void 0) { opts = {}; }
    return function (pluginObj, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var check = plugin_1.checkAvailability(pluginObj);
                if (check === true) {
                    return descriptor.value.apply(this, args);
                }
                else {
                    if (opts.sync) {
                        return null;
                    }
                    else if (opts.observable) {
                        return Observable_1.Observable.throw(new Error(check && check.error));
                    }
                    return Promise.reject(check && check.error);
                }
            },
            enumerable: true
        };
    };
}
exports.CordovaCheck = CordovaCheck;
/**
 * @private
 *
 * Class decorator specifying Plugin metadata. Required for all plugins.
 *
 * @usage
 * ```typescript
 * @Plugin({
 *  pluginName: 'MyPlugin',
 *  plugin: 'cordova-plugin-myplugin',
 *  pluginRef: 'window.myplugin'
 *  })
 *  export class MyPlugin {
 *
 *    // Plugin wrappers, properties, and functions go here ...
 *
 *  }
 * ```
 */
function Plugin(config) {
    return function (cls) {
        // Add these fields to the class
        for (var prop in config) {
            cls[prop] = config[prop];
        }
        cls['installed'] = function (printWarning) {
            return !!util_1.getPlugin(config.pluginRef);
        };
        cls['getPlugin'] = function () {
            return util_1.getPlugin(config.pluginRef);
        };
        cls['checkInstall'] = function () {
            return plugin_1.checkAvailability(cls) === true;
        };
        cls['getPluginName'] = function () {
            return config.pluginName;
        };
        cls['getPluginRef'] = function () {
            return config.pluginRef;
        };
        cls['getPluginInstallName'] = function () {
            return config.plugin;
        };
        cls['getPluginRepo'] = function () {
            return config.repo;
        };
        cls['getSupportedPlatforms'] = function () {
            return config.platforms;
        };
        return cls;
    };
}
exports.Plugin = Plugin;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
function Cordova(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return plugin_1.wrap(this, methodName, opts).apply(this, args);
            },
            enumerable: true
        };
    };
}
exports.Cordova = Cordova;
/**
 * @private
 *
 * Wrap an instance method
 */
function CordovaInstance(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return plugin_1.wrapInstance(this, methodName, opts).apply(this, args);
            },
            enumerable: true
        };
    };
}
exports.CordovaInstance = CordovaInstance;
/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
function CordovaProperty(target, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        get: function () {
            if (plugin_1.checkAvailability(target, key) === true) {
                return util_1.getPlugin(target.constructor.getPluginRef())[key];
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (plugin_1.checkAvailability(target, key) === true) {
                util_1.getPlugin(target.constructor.getPluginRef())[key] = value;
            }
        }
    });
}
exports.CordovaProperty = CordovaProperty;
/**
 * @private
 * @param target
 * @param key
 * @constructor
 */
function InstanceProperty(target, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        get: function () {
            return this._objectInstance[key];
        },
        set: function (value) {
            this._objectInstance[key] = value;
        }
    });
}
exports.InstanceProperty = InstanceProperty;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
function CordovaFunctionOverride(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return plugin_1.overrideFunction(this, methodName, opts);
            },
            enumerable: true
        };
    };
}
exports.CordovaFunctionOverride = CordovaFunctionOverride;
/**
 * @private
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 *
 */
function CordovaFiniteObservable(opts) {
    if (opts === void 0) { opts = {}; }
    if (opts.observable === false) {
        throw new Error('CordovaFiniteObservable decorator can only be used on methods that returns observable. Please provide correct option.');
    }
    opts.observable = true;
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var wrappedObservable = plugin_1.wrap(this, methodName, opts).apply(this, args);
                return new Observable_1.Observable(function (observer) {
                    var wrappedSubscription = wrappedObservable.subscribe({
                        next: function (x) {
                            observer.next(opts.resultTransform ? opts.resultTransform(x) : x);
                            if (opts.resultFinalPredicate && opts.resultFinalPredicate(x)) {
                                observer.complete();
                            }
                        },
                        error: function (err) { observer.error(err); },
                        complete: function () { observer.complete(); }
                    });
                    return function () {
                        wrappedSubscription.unsubscribe();
                    };
                });
            },
            enumerable: true
        };
    };
}
exports.CordovaFiniteObservable = CordovaFiniteObservable;
//# sourceMappingURL=decorators.js.map