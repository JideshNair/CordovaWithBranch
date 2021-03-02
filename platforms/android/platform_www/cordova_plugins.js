cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-googleplus.GooglePlus",
      "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
      "pluginId": "cordova-plugin-googleplus",
      "clobbers": [
        "window.plugins.googleplus"
      ]
    },
    {
      "id": "segment-cordova-plugin.SegmentCordovaPlugin",
      "file": "plugins/segment-cordova-plugin/www/SegmentCordovaPlugin.js",
      "pluginId": "segment-cordova-plugin",
      "clobbers": [
        "Segment"
      ]
    },
    {
      "id": "branch-cordova-sdk.Branch",
      "file": "plugins/branch-cordova-sdk/src/index.js",
      "pluginId": "branch-cordova-sdk",
      "clobbers": [
        "Branch"
      ]
    }
  ];
  module.exports.metadata = {
    "clevertap-cordova": "2.2.0",
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-firebasex": "9.1.2",
    "cordova-plugin-googleplus": "7.0.1",
    "cordova-plugin-whitelist": "1.3.4",
    "segment-cordova-plugin": "4.0.0",
    "branch-cordova-sdk": "4.1.2"
  };
});