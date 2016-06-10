var React = require('react-native');
var {
  View, 
  StyleSheet,
  Text, 
} = React;

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//library and dynamic components
var ImageButton = require('../common/imageButton');
var EventEmitter = require('EventEmitter');
var Subscribable = require('Subscribable');

module.exports = React.createClass({ 
  mixins: [Subscribable.Mixin],

  /**
    * Allow this component to see sidebar menu functions
    */
  contextTypes : {
    menuActions: React.PropTypes.object.isRequired
  },
  /**
    * On Load
    */
  componentDidMount: function() {
    this.addListenerOn(this.props.events, 'toggleMenu', this.onLeftButtonPress);
  },

  /**
    * When Navbar Left Button Tapped
    */
  onLeftButtonPress: function() {
    this.context.menuActions.toggle();
  },
  //render menu through SideMenu component 
  render: function() {
    return <View style={styles.container}>
      <View style={styles.top}>
        <View style={[styles.btnWrapper, {backgroundColor: '#484848'}]} >
          <ImageButton
              style={[styles.btn, this.border('red')]}
              resizeMode={'contain'}
              onPress={this.onHomePress}
              source={require('../img/home-icon.png')} />
        </View> 
        <View style={[styles.btnWrapper, {backgroundColor: '#404040'}]} >
          <ImageButton
              style={[styles.btn, this.border('red')]}
              resizeMode={'contain'}
              onPress={this.onTrendPress}
              source={require('../img/hash-icon.png')} />
        </View> 
        <View style={[styles.btnWrapper, {backgroundColor: '#383838'}]} >
          <ImageButton
              style={[styles.btn, this.border('red')]}
              resizeMode={'contain'}
              onPress={this.onListPress}
              source={require('../img/list-icon.png')} />
        </View> 
        <View style={[styles.btnWrapper, {backgroundColor: '#303030'}]} >
          <ImageButton
              style={[styles.btn, this.border('red')]}
              resizeMode={'contain'}
              onPress={this.onProfilePress}
              source={require('../img/user-icon.png')} />
        </View> 
        <View style={[styles.btnWrapper, {backgroundColor: '#282828'}]} >
          <ImageButton
              style={[styles.btn, this.border('red')]}
              resizeMode={'contain'}
              onPress={this.onSettingPress}
              source={require('../img/settings-icon.png')} />
        </View> 
      </View>
      <View style={styles.bottom} />
    </View>
  }, 
  //for menu Home icon press
  onHomePress: function() {

  }, 
  //for Hash-tage icon press
  onTrendPress: function() {

  }, 
  //for List icon press
  onListPress: function() {

  }, 
  //for setting icon press
  onSettingPress: function() {

  }, 
  //for profile icon press
  onProfilePress: function() {

  },
  border: function(color) {
      return {
        //borderColor: color, 
        //borderWidth: 4,
      } 
   },
});

var styles = StyleSheet.create({
  top: {
    flex: 5,
    width: window.width/5, 
    height: window.height*(5/9), 
  }, 
  bottom: {
    flex: 4,
    backgroundColor: '#222222',
    height: window.height*(4/9), 
    width: window.width/5, 
  }, 
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    height: window.height, 
    width: window.width/5, 
    backgroundColor: '#222222',
  }, 
  btnWrapper: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
  }, 
  btn: {
    width: window.width/12, 
    height: window.width/12,
    justifyContent: 'space-around', 
    alignSelf: 'center', 
    marginLeft: window.height/30, 
    marginRight: window.height/30, 
    marginTop: window.height/20, 
    marginBottom: window.height/20, 
  }, 
});