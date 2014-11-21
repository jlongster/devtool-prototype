const { Element } = require('../util');
const dom = React.DOM;
const { div, ul, li } = dom;
const Resizable = require('./ui/Resizable');
const { Tabs, TabList, TabPanel } = require('./ui/Tabs');
const TableView = require('./ui/TableView');

module.exports = Element({
  render: function() {
    return Resizable(
      { className: 'sources ' + this.props.className,
        side: 'right' },
      Tabs(
        { className: 'devtools-sidebar-tabs' },
        TabList({ className: 'tabs' }, 'Sources', 'Call Stack'),
        TabPanel(null, 'Sources'),
        TabPanel(null, 'Call Stack')
      )
    );
  }
});
