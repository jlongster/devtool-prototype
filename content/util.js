
function Element(obj) {
  return React.createFactory(React.createClass(obj));
}

module.exports = { Element };
