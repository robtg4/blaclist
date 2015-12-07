//component that opens up app to signup screen
var React = require('react-native');
var {
	View, 
	Text, 
	StyleSheet,
	Image,  
	TextInput,
} = React;

//additional libraries
var Parse = require('parse/react-native');
var FBLoginManager = require('NativeModules').FBLoginManager;

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');

module.exports = React.createClass({
	propTypes: {
	    style: View.propTypes.style,
	    onFbSignupPress: React.PropTypes.func,
    },
	componentWillMount: function(){
	    var _this = this;
	    FBLoginManager.getCredentials(function(error, data){
	      if (!error) {
	        console.log("Login data: ", data);
	      }
	    });
    },
	getInitialState: function() {
		return {
			username: '', 
			password: '', 
			errorMessage: '',
			passwordConfirmation: '',
			loadingCurrentUser: true, 
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
								source={require('./img/signup_brand.png')} />
							<ImageButton
								style={[styles.fb_btn]}
								resizeMode={'contain'}
								onPress={this.onFbSignupPress}
								source={require('./img/fb_signup_btn.png')} />
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
								secureTextEntry={true} 
								style={styles.input} 
								value={this.state.password}
								onChangeText={(text) => this.setState({password: text})} />
							<TextInput 
								placeholder={'Confirm Password'}
								secureTextEntry={true} 
								style={styles.input} 
								value={this.state.confirmPassword}
								onChangeText={(text) => this.setState({passwordConfirmation: text})} />
							<ImageButton
								style={[styles.email_btn]}
								resizeMode={'contain'}
								onPress={this.onCreateAcctPress}
								source={require('./img/get_started_btn.png')} />
							<ImageButton
								style={[styles.email_btn]}
								resizeMode={'contain'}
								onPress={this.onAlreadyAcctPress}
								source={require('./img/already_acct_btn.png')} />
						</View>
					</View>
				</Image>
			</View>
		);
	}, 
	onFbSignupPress: function() {
		//sign up/login via facebook and store credentials into parse
		//need approval  "user_likes", "user_about_me", "user_actions.music", "user_actions.news", "user_actions.books"
	    FBLoginManager.loginWithPermissions(["email","user_friends", "public_profile", "user_likes", "user_about_me", "user_actions.music", "user_actions.news", "user_actions.books"], function(error, data){
		  if (!error) {
		    console.log("Login data: ", data);
		    var authData = {
			    id: data.userId,
			    access_token: data.token,
			    expiration_date: data.tokenExpirationDate,
			 };

			 //sign up into parse db
			 

		  } else {
		  	console.log("Error: ", error);
		    this.setState({errorMessage: error.message});
		  }
		});
	},
	onCreateAcctPress: function() {
		if (this.state.password === this.state.passwordConfirmation)
		{	
			var user = new Parse.User();
				user.set("username", this.state.username);
				user.set("password", this.state.password);
				user.set("email", this.state.username);

				user.signUp(null, {
				  //navigate to new component (.immediatelyResetRouteStack)
				  //when doing so and we pass new views of app (routes)
				  success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'onboarding'}]); },
				  error: (user, error) => { this.setState({ errorMessage: error.message }); }
			});
		} else {
			this.setState({ errorMessage: "Your passwords are not the same!"});
		}
	},
	onAlreadyAcctPress: function() {
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
		width: window.width/5,
		height: (268/273)*window.width/5,
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