//component that opens up app to login screen
var React = require('react-native');
var {
	View, 
	Text, 
	StyleSheet,
	Image,  
	TextInput,
} = React;
var Parse = require('parse/react-native');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			username: '', 
			password: '', 
			errorMessage: '',
		};
	},
	render: function() {
		return (
			<View style={[styles.container]}>
				<Image 
					style={styles.bg} 
					source={require('./img/login_bg1_3x.png')}>
					<View style={[styles.header, this.border('red')]} >
						<View style={styles.headerWrapper} >
							<Image 
								style={[styles.login_brand]}
								resizeMode={"contain"}
								source={require('./img/login_brand_2.png')} />
							<ImageButton
								style={[styles.fb_btn]}
								resizeMode={'contain'}
								onPress={this.onFbLoginPress}
								source={require('./img/fb_login.png')} />
							<Image 
								style={[styles.loginBar]}
								style={[styles.loginBar]} 
								resizeMode={'contain'}
								source={require('./img/login_bar_3x.png')} />
						</View>
					</View>
					<View style={[styles.footer, this.border('blue')]} >
						<View style={styles.footerWrapper} >
							<TextInput 
								placeholder={'Email'}
								style={styles.input} 
								value={this.state.username}
								onChangeText={(text) => this.setState({username: text})} />
							<TextInput 
								placeholder={'Password'}
								style={styles.input} 
								secureTextEntry={true} 
								value={this.state.password}
								onChangeText={(text) => this.setState({password: text})} />
							<ImageButton
								style={[styles.email_btn]}
								resizeMode={'contain'}
								onPress={this.onEmailLoginPress}
								source={require('./img/email_login_btn.png')} />
							<ImageButton
								style={[styles.email_btn]}
								resizeMode={'contain'}
								onPress={this.onCreateAcctPress}
								source={require('./img/create_acct_btn.png')} />
						</View>
					</View>
				</Image>
			</View>
		);
	}, 
	onFbLoginPress: function() {

	},
	onEmailLoginPress: function() {
		//log the user on, get eror if login information doesn't exist 
		//we need to show the user that the error occured
		Parse.User.logIn(this.state.username, this.state.password, {
			  success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'onboarding'}]); },
			  error: (data, error) => { this.setState({ errorMessage: error.message }); }
		});
	},
	onCreateAcctPress: function() {
		this.props.navigator.pop();
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
		flex: 2,
	}, 
	headerWrapper: {
		flex: 1, 
		flexDirection: 'column', 
		alignItems: 'center',
		justifyContent:'space-around',
		marginTop: window.height/35,
	}, 
	footerWrapper: {
		flexDirection: 'column', 
		alignItems: 'center',
		justifyContent:'space-around',
		marginTop: 15, 
	}, 
	footer: {
		flex: 4, 
	}, 
	loginBar: {
		width: (window.width/1.3)/1.8, 
		height: (70/553)*((window.width/1.3)/1.8),
	}, 
	fb_btn: {
		width: window.width/1.3,
		height: (147/1095)*window.width/1.3,
		margin: 10, 
	}, 
	login_brand: {
		width: window.width/6,
		height: (268/273)*window.width/6,
		margin: 6,
	},
	input: {
		padding: 4, //gives us offset to border 
		height: window.height/20, 
		backgroundColor: 'rgba(255,255,255, 0.4)', 
		borderColor: 'gray', 
		borderWidth: 1, 
		borderRadius: 2, //round input box
		margin: 2, 
		width: window.width/1.3,
		alignSelf: 'center', //center yourself on form when you have fixed widths 
	}, 
	email_btn: {
		width: window.width/1.3,
		height: (147/1095)*window.width/1.3,
		margin: 3, 
	}, 
});