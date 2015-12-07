var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
} = React;

//additional libraries
var Parse = require('parse/react-native'); //parse for data storage
var ActionButton = require('react-native-action-button'); //action button for next frame
Icon = require('react-native-vector-icons/Ionicons'); //vector icons

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');

module.exports = React.createClass({
	render: function() {
		return (
			<View style={[styles.container]}>
				<Image 
					style={styles.bg} 
					source={require('./img/login_bg1_3x.png')}>
				</Image>
				<ActionButton buttonColor="rgba(231,76,60,1)">
		          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
		            <Icon name="android-create" style={styles.actionButtonIcon} />
		          </ActionButton.Item>
		          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
		            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
		          </ActionButton.Item>
		          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
		            <Icon name="android-done-all" style={styles.actionButtonIcon} />
		          </ActionButton.Item>
		        </ActionButton>
			</View>
		);
	}, 
	//function that helps with laying out flexbox itmes 
	 //takes a color argument to construct border, this is an additional 
	 //style because we dont want to mess up our real styling 
	 border: function(color) {
	    return {
	      //borderColor: color, 
	      //borderWidth: 4,
	    } 
	 },
});

styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}, 
	bg: {
		flex: 1,
		width: window.width, 
		height: window.height, 
	},
	actionButtonIcon: {
	    fontSize: 20,
	    height: 22,
	    color: 'white',
	},
});