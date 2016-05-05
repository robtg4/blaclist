/**
 * Order
 *  Order the Children by the given key ('order' by default).
 *
 *  Props:
 *    direction - handle the direction of the ordering ('column' by default)
 *    style - provide extra styling to the view that wraps the children
 *
 */

'use strict';
let React = require('react-native');

let {
  View
} = React;

var Order = React.createClass({

  getDefaultProps() { return {by: 'order', direction: 'column', style: ''} },
  
  sortBy(array, key) {
    return array.sort(function(a, b) {
        var x = a.props[key]; var y = b.props[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  },

  render() {
    return (
      <View style={[{flex: 1, flexDirection: this.props.direction}, this.props.style]}>
	{this.sortBy(this.props.children, this.props.by)}
      </View>
    );
  },
});

module.exports = Order;
