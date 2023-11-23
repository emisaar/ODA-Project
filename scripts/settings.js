'use strict';


/**
 * Initializes the SDK and sets a global field with passed name for it the can
 * be referred later
 *
 * @param {string} name Name by which the chat widget should be referred
 */
function initSdk(name) {
    // Retry initialization later if WebSDK is not available yet
    if (!document || !WebSDK) {
        setTimeout(function () {
            initSdk(name);
        }, 2000);
        return;
    }

    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    var Bots;



    setTimeout(function () {

        var chatWidgetSettings = {
            URI: 'oda-9cefd7df104d451ea687c33c8b006289-da3.data.digitalassistant.oci.oraclecloud.com/', // ODA URI, pass the hostname. Do not include the protocol (https://).

            channelId: '0ae88895-2c67-4cd2-a319-559245430a33', // Channel ID, available in channel settings in ODA UI

//Add settings here


        };


        Bots = new WebSDK(chatWidgetSettings);



        Bots.connect();

//Add Bots.setUserInputMessage('Order pizza'); here. Comment out for voice recognition.


        // Create global object to refer Bots
        window[name] = Bots;
    }, 0);
}




