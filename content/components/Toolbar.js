const { Element } = require('../util');
const dom = React.DOM;
const { div, ul, li, button } = dom;
const Button = require('./Button');

module.exports = Element({
  render: function() {
    return div(
      { className: 'toolbar ' + this.props.className },
      Button({ id: 'run',
               className: 'devtools-toolbarbutton' }),
      Button({ id: 'step-over',
               className: 'devtools-toolbarbutton' }),
      Button({ id: 'step-in',
               className: 'devtools-toolbarbutton' }),
      Button({ id: 'step-out',
               className: 'devtools-toolbarbutton' })
    );
  }
});
