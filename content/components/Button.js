const { Element } = require('../util');
const dom = React.DOM;

module.exports = Element({
  render: function() {
    return dom.button({ id: this.props.id,
                        className: this.props.className },
                      dom.div({ className: 'image' }));
  }
});
