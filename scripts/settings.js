'use strict';


/**
 * Initializes the SDK and sets a global field with passed name for it the can
 * be referred later
 *
 * @param {string} name Name by which the chat widget should be referred
 */
var chatWidgetSettings = {
    URI: "oda-9cefd7df104d451ea687c33c8b006289-da3.data.digitalassistant.oci.oraclecloud.com/",
    channelId: "0ae88895-2c67-4cd2-a319-559245430a33",
    theme: "redwood-dark",
    enableClearMessage: true,
    enableLocalConversationHistory: true,
    enableTimestamp: true,
    showConnectionStatus: true,
    showTypingIndicator: true,
    disablePastActions: 'all',
    customHeaderElementId: "customHeaderElement",
    embedTopStickyId: "topStickyElement",
    logoIcon: 'images/bot-white.png',
    botIcon: 'images/bot-white.png',
    personIcon: 'images/user.png',
    isDebugMode: true,
    locale: 'es-mx',
    'multiLangChat': true,
    multiLangChat: {
        supportedLangs: [{
            lang: 'en'
        }, {
            lang: 'es',
            label: 'Español'
        }],
        primary: 'en'
    },
    "i18n": {
        "es-mx": {
            "chatTitle": "Asistente Tec CCM"
        },
        "en-us": {
            "chatTitle": "Tec CCM Assistant"
        }
    }
};
!function (globalObj, doc, library, name) {
    function initiateSDK() {
        setTimeout(function () {
            globalObj[name] = Object.assign(WebSDK);
            globalObj[name] = new globalObj[name](chatWidgetSettings);
            globalObj[name].connect().then(() => {

            }, (reason) => {
                console.log("Connection failed");
                console.log(reason);
            });
        }, 2000);
    }
    try {
        var scripts = doc.getElementsByTagName("script")[0],
            lib = doc.createElement("script");
        lib.async = true;
        lib.src = library;
        lib.onReady = initiateSDK();
        scripts.parentNode.insertBefore(lib, scripts);
    } catch (e) {
        console.error("Could not load the chat widget");
    }
}(window, document, "scripts/web-sdk.js", "Bots");




