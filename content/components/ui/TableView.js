const { Element } = require('../../util');
const dom = React.DOM;
const { div, ul, li } = dom;

module.exports = Element({
  displayName: 'TableView',

  getInitialState: function() {
    return { scrollTop: 0 };
  },

  componentDidMount: function() {
    let node = this.getDOMNode().parentNode;
    node.addEventListener('scroll', this.onScroll);

    setTimeout(() => {
      let rect = node.parentNode.getBoundingClientRect();
      this.setState({ containerHeight: rect.height });
    }, 0);
  },

  onScroll: function(ev) {
    this.setState({ scrollTop: this.getDOMNode().parentNode.scrollTop });
  },

  render: function() {
    if(!this.state.containerHeight) {
      return div();
    }

    let state = this.state;
    let start = Math.max(0, (state.scrollTop / this.props.elementHeight | 0) - 1);
    let end = start + (state.containerHeight / this.props.elementHeight | 0) + 1;
    let height = this.props.data.length * this.props.elementHeight;
    let offset = state.scrollTop % this.props.elementHeight;

    return div(
      { style: {
        width: '100%',
        height: height + 'px',
        position: 'relative'
      }},
      this.props.data.slice(start, end).map((item, i) => {
        return div({ style: {
          height: this.props.elementHeight + 'px',
          position: 'absolute',
          borderBottom: '1px solid #c0c0c0',
          top: 0,
          left: 0,
          width: '100%',
          transform: 'translateY(' + ((start + i) * this.props.elementHeight) + 'px)'
        }}, item.name);
      })
    );
  }
});
