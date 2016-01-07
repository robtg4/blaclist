'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

//libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
var MenuTabBar = require('./exp_base_components/menuTabBar');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//dynamic component references + libraries 
var Profile = require('./profile'); 
var Video = require('./video'); 
var Trending = require('./trends');
var Home = require('./home');
var Causes = require('./causes');


module.exports = React.createClass({ 
  render: function() {
    return (
      <View style={[styles.container, this.border('red')]}>
        <ScrollableTabView 
        	initialPage={2}
        	tabBarUnderlineColor={'#DD2A2A'}
        	tabBarBackgroundColor={'#1a1a1a'}
          tabBarInactiveTextColor={'#1a1a1a'}
          tabBarActiveTextColor={'#1a1a1a'}
        	tabBarPosition={'bottom'}
        	renderTabBar={() => <MenuTabBar />}>
          <ScrollView tabLabel="ion|heart">
            <Causes />
          </ScrollView>
          <ScrollView tabLabel="ion|pound" >
            <Trending />
          </ScrollView>
          <ScrollView tabLabel="ion|ios-paper" >
          	<Home />
          </ScrollView>
          <ScrollView tabLabel="ion|play">
             <Video />
          </ScrollView>
          <ScrollView tabLabel="ion|ios-at">
            <Profile />
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }, 
  border: function(color) {
      return {
        //borderColor: color, 
        //borderWidth: 1,
      } 
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333333',
  },
});