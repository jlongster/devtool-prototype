const { Element } = require('../../util');
const dom = React.DOM;
const { div, ul, li } = dom;

const Tabs = Element({
  displayName: 'Tabs',

  propTypes: {
	selectedIndex: React.PropTypes.number,
	onSelect: React.PropTypes.func,
	focus: React.PropTypes.bool
  },

  getDefaultProps: function () {
	return {
	  selectedIndex: 0,
	  focus: false
	};
  },

  getInitialState: function () {
	return {
	  selectedIndex: this.props.selectedIndex
	};
  },

  setSelected: function (index, focus) {
	// Don't do anything if nothing has changed
	if (index === this.state.selectedIndex) return;
	// Check index boundary
	if (index < 0 || index >= this.getTabsCount()) return;

	// Keep reference to last index for event handler
	var last = this.state.selectedIndex;

	// Update selected index
	this.setState({ selectedIndex: index });

	// Call change event handler
	if (typeof this.props.onSelect === 'function') {
	  this.props.onSelect(index, last);
	}
  },

  getTabsCount: function () {
	return React.Children.count(this.props.children[0].props.children);
  },

  getPanelsCount: function () {
	return React.Children.count(this.props.children.slice(1));
  },

  getTabList: function () {
	return this.refs.tablist;
  },

  getTab: function (index) {
	return this.refs['tabs-' + index];
  },

  getPanel: function (index) {
	return this.refs['panels-' + index];
  },

  handleClick: function (e) {
	var node = e.target;
	var index = [].slice.call(node.parentNode.children).indexOf(node);
	this.setSelected(index);
  },

  render: function () {
	var state = this.state;

    var tabs = this.props.children[0];
    var panels = this.props.children.slice(1);

	tabs = TabList(
      { className: tabs.props.className },
      tabs.props.children.map((tab, i) => {
        let props = {
          className: 'tab ' + (state.selectedIndex === i ? 'selected' : ''),
          role: 'tab',
          onClick: this.handleClick,
          key: 'id' + i
        };

        return React.addons.cloneWithProps(typeof tab === 'string' ? dom.div(null, tab) : tab, props);
      })
    );

    panels = panels.map(function(panel, i) {
	  return React.addons.cloneWithProps(panel, {
		selected: state.selectedIndex === i ? 'selected' : null
	  });
	});

	return div(
      { className: this.props.className },
      tabs,
      panels
    );
  }
});

const TabPanel = Element({
  displayName: 'TabPanel',

  getDefaultProps: function () {
	return {
	  selected: false,
	};
  },

  render: function () {
	// Attributes
	var style = {display: this.props.selected ? '' : 'none'};
	return div({ className: 'tabpanel',
                 role: "tabpanel", style: style },
               this.props.children);
  }
});

const TabList = Element({
  displayName: 'TabList',

  render: function () {
	return ul({ role: "tablist",
                className: this.props.className},
              this.props.children);
  }
});

module.exports = { Tabs, TabPanel, TabList };
