const { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;
const devtools = Cu.import("resource://gre/modules/devtools/Loader.jsm", {}).devtools;

const loader = devtools.provider.loader;
// Snag the console so it goes to the browser's normal console
loader.globals.console = console;
loader.globals.React = React;
loader.globals.window = window;
loader.globals.document = document;
loader.globals.setTimeout = (func, t) => setTimeout(func, t);
loader.globals.requestAnimationFrame = func => {
  mozRequestAnimationFrame(func);
};

window.onbeforeunload = function() {
  // Force all the modules to reload, but don't emit a devtools
  // unloaded event
  var events = devtools.require("sdk/system/events");
  events.emit("startupcache-invalidate", {});

  delete devtools._provider;
  devtools._chooseProvider();
};

window.onerror = function(msg, url, line, x, info) {
  console.error(msg, info.stack);
}

const app = devtools.require('chrome://react-debugger/content/main.js');
app.init();
