const { Element } = require('../util');
const dom = React.DOM;
const { div, ul, li } = dom;
const Resizable = require('./ui/Resizable');

module.exports = Element({
  render: function() {
    return div({ className: 'editor'},
               'editor')
  }
});
