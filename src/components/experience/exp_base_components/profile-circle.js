//component for profile circles on article preview
//to indicate that user's friends have commmented on the article
var React = require('react-native');
var { View, StyleSheet,Image, TouchableHighlight } = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var ImageButton = require('../../common/imageButton');
//additional libraries

module.exports = React.createClass({
  render: function() {
      return (
        <TouchableHighlight
          style={styles.profileBtn}
          underlayColor={'transparent'}
          onPress={this.props.onPress} >
            <Image
              source={this.props.source}
              style={[styles.profile, this.border('red')]} />
        </TouchableHighlight>
      );

  },
  border: function(color) {
      return {
        //borderColor: color,
        //borderWidth: 4,
      }
   },
});

var styles = StyleSheet.create({
  profileBtn: {
    height: window.width/8,
    width: window.width/8,
    borderRadius: window.width/8/2,
    margin: 2,
  },
  profile: {
    height: window.width/8,
    width: window.width/8,
    borderRadius: window.width/8/2,
  },
});
