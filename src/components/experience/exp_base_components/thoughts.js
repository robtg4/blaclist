//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//libraries
var NavigationBar = require('react-native-navbar');
var BackButton = require('../../common/backButton');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <NavigationBar
          style={styles.navbar}
          statusBar={{
            style: 'light-content',
            hidden: false,
          }}
          tintColor={'#222222'}
          title={{
            title: 'COMMENTS',
            tintColor: '#EDEDED',
          }}
          leftButton={
            <BackButton
              onPress={this.goBack} /> } />
    </View>
  },
  goBack: function() {
    this.props.navigator.pop();
  },
});

var styles = StyleSheet.create({
  navbar: {
    width: window.width,
  },
  container: {
    flex: 1,
  }
});
