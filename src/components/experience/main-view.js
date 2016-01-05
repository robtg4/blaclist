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
var Settings = require('./settings'); 
var Trending = require('./trends');
var Home = require('./home');
var Causes = require('./causes');


module.exports = React.createClass({ 
  render: function() {
    return (
      <View style={[styles.container, this.border('red')]}>
        <ScrollableTabView 
        	initialPage={2}
        	tabBarInactiveTextColor={"#222222"}
        	tabBarUnderlineColor={'#DA1129'}
        	tabBarBackgroundColor={'black'}
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
          <ScrollView tabLabel="ion|checkmark-circled">
            <Profile />
          </ScrollView>
          <ScrollView tabLabel="ion|gear-b">
            <Settings />
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
    backgroundColor: '#222222',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#222222',
  },
});