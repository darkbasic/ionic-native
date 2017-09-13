import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Keychain Touch Id
 * @description
 * A cordova plugin adding the iOS TouchID / Android fingerprint to your
 * app and allowing you to store a password securely in the device keychain.
 *
 * @usage
 * ```typescript
 * import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
 *
 *
 * constructor(private keychainTouchId: KeychainTouchId) { }
 *
 * ...
 *
 *
 * this.keychainTouchId.isAvailable()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class KeychainTouchId extends IonicNativePlugin {
    /**
     * Check if Touch ID / Fingerprint is supported by the device
     * @return {Promise<any>} Returns a promise that resolves when there is hardware support
     */
    isAvailable(): Promise<any>;
    /**
     * Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
     * successful authentication using fingerprint
     * @param key {string} the key you want to store
     * @param password {string} the password you want to encrypt and store
     * @return {Promise<any>} Returns a promise that resolves when there is a result
     */
    save(key: string, password: string): Promise<any>;
    /**
     * Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
     * with the password stored in keychain or will resolve an error code, where -1 indicated not available.
     * @param key {string} the key you want to retrieve from keychain
     * @param message {string} a message to the user
     * @return {Promise<any>} Returns a promise that resolves when the key value is successfully retrieved or an error
     */
    verify(key: string, message: string): Promise<any>;
    /**
     * Checks if there is a password stored within the keychain for the given key.
     * @param key {string} the key you want to check from keychain
     * @return {Promise<any>} Returns a promise that resolves with success if the key is available or failure if key is not.
     */
    has(key: string): Promise<any>;
    /**
     * Deletes the password stored under given key from the keychain.
     * @param key {string} the key you want to delete from keychain
     * @return {Promise<any>} Returns a promise that resolves with success if the key is deleted or failure if key is not
     */
    delete(key: string): Promise<any>;
    /**
     * Sets the language of the fingerprint dialog
     * @param locale {string} locale subtag from [this list](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
     */
    setLocale(locale: string): void;
}
