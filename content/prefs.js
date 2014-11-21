let ViewHelpers = require('devtools/ViewHelpers.jsm').ViewHelpers;

module.exports = new ViewHelpers.Prefs("devtools", {
  sourcesWidth: ["Int", "debugger.ui.panes-sources-width"],
  instrumentsWidth: ["Int", "debugger.ui.panes-instruments-width"],
  panesVisibleOnStartup: ["Bool", "debugger.ui.panes-visible-on-startup"],
  variablesSortingEnabled: ["Bool", "debugger.ui.variables-sorting-enabled"],
  variablesOnlyEnumVisible: ["Bool", "debugger.ui.variables-only-enum-visible"],
  variablesSearchboxVisible: ["Bool", "debugger.ui.variables-searchbox-visible"],
  pauseOnExceptions: ["Bool", "debugger.pause-on-exceptions"],
  ignoreCaughtExceptions: ["Bool", "debugger.ignore-caught-exceptions"],
  sourceMapsEnabled: ["Bool", "debugger.source-maps-enabled"],
  prettyPrintEnabled: ["Bool", "debugger.pretty-print-enabled"],
  autoPrettyPrint: ["Bool", "debugger.auto-pretty-print"],
  tracerEnabled: ["Bool", "debugger.tracer"],
  editorTabSize: ["Int", "editor.tabsize"],
  autoBlackBox: ["Bool", "debugger.auto-black-box"]
});
