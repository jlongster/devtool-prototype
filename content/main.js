const { Element } = require('./util');
const dom = React.DOM;
const { div, ul, li } = dom;
const Toolbar = require('./components/Toolbar');
const Editor = require('./components/Editor');
const Sources = require('./components/Sources');
const prefs = require('./prefs');

const App = Element({
  render: function() {
    return div(
      { className: 'body theme-body devtools-monospace' },
      Toolbar({ className: 'devtools-toolbar' }),
      div({ className: 'widgets' },
          Sources({ className: 'theme-sidebar' }),
          Editor())
    );
  }
});

var app = {
  init: function() {
    React.render(App(), document.querySelector('body'));
  },
  shutdown: function() {
  }
};

module.exports = app;
