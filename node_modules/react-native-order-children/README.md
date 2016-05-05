# React Native - Order Children
## Overview
  A simple React Native Component which allows you to re-order the children by a given prop.  By default it will order by the prop "order." This can also be used in conjunction with absolute positioning to give a very basic Z-Index capability to React Native.

## Available Props

0. **by** (default: 'order') - Allows you to define the key that each child should by ordered by.
0. **direction** (default: 'column') - Choose 'row' or 'column' to define what direction the views should be ordered in.
0. **style** (default: '') - Define extra styling which can be used to style the wrapper view of the children.

## Example

```js
var Order = require('react-native-order-children');
var React = require('react-native');

var ExampleComponent = React.createClass({
  render() {
    return (
        <Order>
            <View order={2}>
                <Text> 1 </Text>
            </View>
            <View order={1}>
                <Text> 2 </Text>
            </View>
        </Order>
    );
  },

});

module.exports = ExampleComponent;
```
