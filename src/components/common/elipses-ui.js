//component for profile circles on article preview
//to indicate that user's friends have commmented on the article
var React = require('react-native');
var { View, StyleSheet,Image, TouchableHighlight } = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//additional libraries

module.exports = React.createClass({
  render: function() {
      return (
        <TouchableHighlight
          key={this.props.key}
          underlayColor={'transparent'}
          onPress={this.props.onElipsesPress} >
            {this.circle(this.props.circleSize)}
        </TouchableHighlight>
      );

  },
  onElipsesPress: function() {

  },
  circle: function(size) {
    var elipse = StyleSheet.create({
      circleSize: {
        flex: 1,
        height: size,
        width: size,
        borderRadius: size/2,
        backgroundColor: '#436675',
        alignSelf:'center',
        margin: 1,
      },
    });
    return <View style={[styles.contain, this.border('red')]}>
      <View style={elipse.circleSize} />
      <View style={elipse.circleSize} />
      <View style={elipse.circleSize} />
    </View>

  },
  border: function(color) {
      return {
        //borderColor: color,
        //borderWidth: 4,
      }
   },
});

var styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
