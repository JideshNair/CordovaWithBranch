cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "branch-cordova-sdk.Branch",
      "file": "plugins/branch-cordova-sdk/src/index.js",
      "pluginId": "branch-cordova-sdk",
      "clobbers": [
        "Branch"
      ]
    },
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    },
    {
      "id": "segment-cordova-plugin.SegmentCordovaPlugin",
      "file": "plugins/segment-cordova-plugin/www/SegmentCordovaPlugin.js",
      "pluginId": "segment-cordova-plugin",
      "clobbers": [
        "Segment"
      ]
    }
  ];
  module.exports.metadata = {
    "branch-cordova-sdk": "4.1.2",
    "clevertap-cordova": "2.2.0",
    "cordova-plugin-whitelist": "1.3.4",
    "segment-cordova-plugin": "4.0.0"
  };
});