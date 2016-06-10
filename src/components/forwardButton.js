//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, StyleSheet, TouchableHighlight} = React;
//libraries
var NavigationBar = require('react-native-navbar');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor={'transparent'} >
        <Image
          style={{width: window.width/15, height: window.height/30, marginLeft: window.width/25}}
          source={require('../img/forward-btn.png')}
          resizeMode={'contain'} />
      </TouchableHighlight>
  },
});

var styles = StyleSheet.create({
});
