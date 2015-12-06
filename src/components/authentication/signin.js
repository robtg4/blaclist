//component that opens up app to login screen
var React = require('react-native');
var {
	View, 
	Text, 
	StyleSheet,
	Image,  
} = React;
var Parse = require('parse/react-native');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');

module.exports = React.createClass({
	render: function() {
		return (
			<View style={[styles.container, this.border('green')]}>
				<Image 
					style={styles.bg} 
					source={require('./img/login_bg1_3x.png')}>
					<View style={[styles.header, this.border('blue')]}>
						<Image 
							style={[styles.brand, this.border('orange')]} 
							resizeMode={'contain'}
							source={require('./img/login_brand_3x.png')} >
						</Image>
					</View>
					<View style={[styles.footer, this.border('red')]}>
						<View style={[styles.loginTextWrapper, this.border('yellow')]}>
							<ImageButton
								style={[styles.loginText]}
								resizeMode={'contain'}
								onPress={this.onPress}
								source={require('./img/login_text_3x.png')} >
							</ImageButton>
							<Image 
								style={[styles.loginBar]} 
								resizeMode={'contain'}
								source={require('./img/login_bar_3x.png')} >
							</Image>
							<ImageButton
								style={styles.signupText} 
								resizeMode={'contain'}
								onPress={this.onSignupPress}
								source={require('./img/signin_text_3x.png')} >
							</ImageButton>
						</View>
					</View>
				</Image>
			</View>
		);
	}, 
	onPress: function() {
		//navigate over to login, access navigator as prop of signin
		this.props.navigator.push({name: 'login'});
	},
	onSignupPress: function() {

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

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
	},
	bg: {
		flex: 1,
		width: window.width, 
		height: window.height, 
	},
	header: {
		flex: 1,
		justifyContent: 'space-around', //****enable us to evenly dist. space between two buttons
    	alignItems: 'center',
    	marginTop: window.height/9,
	},
	footer:  {
		flex: 1, 
		marginBottom: window.height/12,
		justifyContent: 'space-around', 
	}, 
	loginTextWrapper: {
		flex: 1, 
		flexDirection: 'column', 
		alignItems: 'center',
		justifyContent:'center',
		marginTop: window.height/20,
	},
	loginText: {
		width: window.width/6.5,   
		height: (84/208)*(window.width/9), 
	},
	loginBar: {
		width: window.width/3, 
		height: (70/553)*(window.width/2), 
	}, 
	signupText: {
		width: window.width/5.5, 
		height: (84/208)*(window.width/9), 
	},
	brand: {
		flex: 1,
		width: window.width,
		height: window.height,
	},
});