//button component for the application 
var React = require('react-native');
var {
	View, 
	StyleSheet, 
	Text, 
	Image, 
	TouchableHighlight, 
} = React;

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	//onPress function that triggers when button pressed
	//this.props.text is property that can be dynamically filled within button 
	render: function() {
		return (
			<TouchableHighlight 
				underlayColor={'transparent'}
				onPress={this.props.onPress} >
				<Image source={this.props.source} resizeMode={this.props.resize} style={this.props.style}/>
			</TouchableHighlight>
		);
	}
});
