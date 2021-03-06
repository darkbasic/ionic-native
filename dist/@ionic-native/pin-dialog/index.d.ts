import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Pin Dialog
 * @description
 *
 * @usage
 * ```typescript
 * import { PinDialog } from '@ionic-native/pin-dialog';
 *
 *
 * constructor(private pinDialog: PinDialog) { }
 *
 * ...
 *
 * this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
export declare class PinDialog extends IonicNativePlugin {
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     * @returns {Promise<{ buttonIndex: number, input1: string }>}
     */
    prompt(message: string, title: string, buttons: string[]): Promise<{
        buttonIndex: number;
        input1: string;
    }>;
}
