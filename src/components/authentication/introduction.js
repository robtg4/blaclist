var React = require('react-native');
var {
	StyleSheet, 
	View, 
	Text, 
	Image, 
} = React; 

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');
var Onboarding = require('./onboarding');


module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Image 
					style={styles.bg} 
					source={require('../img/onboarding.png')} >
					<View style={[styles.header, this.border('red')]} />
					<View style={[styles.footer, this.border('blue')]} >
						<ImageButton
							style={[styles.email_btn]}
							resizeMode={'contain'}
							onPress={this.onReadyPress}
							source={require('../img/blacklist_btn.png')} />
					</View>
				</Image>
			</View>
		);
	}, 
	border: function(color) {
	    return {
	      //borderColor: color, 
	      //borderWidth: 4,
	    } 
	 },
	 onReadyPress: function() {
	 	this.props.navigator.push({name: 'onboarding'});
	 }
});

var styles = StyleSheet.create({
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
	header: {
		flex: 5,
	}, 
	footer: {
		flex: 2, 
		alignItems: 'center', 
		justifyContent: 'center',
	}, 
	email_btn: {
		marginTop: window.height*(2/7)*(1/2), 
		width: window.width/1.3,
		height: (147/1095)*window.width/1.3,
		margin: 3, 
	},
});