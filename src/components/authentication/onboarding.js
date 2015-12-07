var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
} = React;

//additional libraries
var Parse = require('parse/react-native');

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
});