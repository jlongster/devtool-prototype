const { Element } = require('../../util');
const dom = React.DOM;
const { div, ul, li } = dom;

module.exports = Element({
  displayName: 'Resizable',

  getInitialState: function() {
    return { dragging: false,
             lastPos: null,
             size: null };
  },

  componentDidMount: function() {
    let style = window.getComputedStyle(this.getDOMNode());
    let basis = parseInt(style.flexBasis);
    if(!basis) {
      console.log('Warning: Resizable element does not have an ' +
                  'initial size. Use flex-basis to specify it: ' +
                 this.props.children);
    }
    this.setState({ size: basis });
  },

  startDrag: function(e) {
    this.setState({ dragging : true });
    window.addEventListener('mousemove', this.handleDrag)
    window.addEventListener('mouseup', this.stopDrag)
  },

  stopDrag: function(e) {
    window.removeEventListener('mousemove', this.handleDrag)
    window.removeEventListener('mouseup', this.stopDrag)
  },

  handleDrag: function(e) {
    let pos = [e.clientX, e.clientY];
    let size = this.state.size;

    if(this.state.lastPos) {
      let diff;
      if(this.props.side === 'left') {
        diff = this.state.lastPos[0] - pos[0];
      }
      else if(this.props.side === 'right') {
        diff = pos[0] - this.state.lastPos[0];
      }
      // Not implemented
      // else if(this.props.side === 'top') {
      //   diff = this.state.lastPos[1] - pos[1];
      // }
      // else if(this.props.side === 'bottom') {
      //   diff = pos[1] - this.state.lastPos[1];
      // }

      size += diff;
      this.getDOMNode().style.flexBasis = size + 'px';
    }

    this.setState({ lastPos: pos, size: size });
  },

  render: function() {
    return div(
      { className: 'resizable-container ' + this.props.className },
      this.props.children,
      div({ className: 'resizer-' + this.props.side,
            draggable: 'true',
            onMouseDown: this.startDrag,
            onMouseMove: this.move })
    );
  }
});
