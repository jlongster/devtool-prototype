"use strict";
const { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;
const { require } = Cu.import("resource://gre/modules/devtools/Loader.jsm", {}).devtools;

let { Services } = Cu.import("resource://gre/modules/Services.jsm", {});
Services.prefs.setBoolPref("devtools.debugger.log", false);

const util = require('sdk/lang/functional');
const gDevTools = require('devtools/gDevTools.jsm').gDevTools;

const getToolDefinition = util.once(() => {
  return {
    id: 'react-debugger',
    ordinal: 99,
    url: "chrome://react-debugger/content/panel.html",
    label: 'RDebugger',
    tooltip: 'Debug JavaScript',
    isTargetSupported: function(target) {
      return true;
    },
    build: function(iframeWindow, toolbox) {
      const path = "chrome://react-debugger/content/main.js";
      const app = require(path);

      return {
        open: function() {
          app.init(iframeWindow, toolbox);
          return this;
        },
        destroy: function() {
          app.shutdown();
        },
      };
    }
  }
});

function startup() {
  //gDevTools.registerTool(getToolDefinition());
}

function shutdown() {
  //gDevTools.unregisterTool(getToolDefinition());
}
