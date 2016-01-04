var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
} = React;

//additional libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');

//dynamic component references + libraries 
var Profile = require('./profile'); 
var Settings = require('./settings'); 
var Trending = require('./trends');
var Home = require('./home');
var Causes = require('./causes');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
	render: function() {

        return <ScrollableTabView
        	tabBarPosition={'bottom'}
        	initialPage={2}
        	tabBarUnderlineColor={'#DB202A'}
        	tabBarBackgroundColor={'black'}
        	tabBarInactiveTextColor={'white'}
        	tabBarActiveTextColor={'white'} >
	        <Causes tabLabel="Causes" />
	        <Trending tabLabel="Trending" />
	        <Home tabLabel="Home" />
	        <Profile tabLabel="Profile" />
	        <Settings tabLabel="Settings" />
      	</ScrollableTabView>	
	},
});


var styles = StyleSheet.create({
});