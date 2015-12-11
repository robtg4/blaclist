var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} = React;

var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
          <Text style={styles.name}>Your name</Text>
        </View>

        <Text style={styles.item}>About</Text>
        <Text style={styles.item}>Contacts</Text>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'black',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});