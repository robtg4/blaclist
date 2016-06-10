//component that opens up app to signup screen
var React = require('react-native');
var {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
} = React;

//additional libraries (FBSDK, Facebook Login, Parse React)
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var FBLoginManager = require('NativeModules').FBLoginManager;
var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager,
} = FBSDKCore;
var Api = require('../utils/api.js');


//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../components/imageButton');

module.exports = React.createClass({
	propTypes: {
	    style: View.propTypes.style,
	    onFbSignupPress: React.PropTypes.func,
    },
	componentWillMount: function(){
	    FBLoginManager.getCredentials(function(error, data){
	      if (!error) {
	        console.log("Login data: ", data);
	      }
	    });
    },
	getInitialState: function() {
		return {
			username: '',
			email: '',
			password: '',
			errorMessage: '',
			passwordConfirmation: '',
			loadingCurrentUser: true,
			authData: null,
		};
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.bg}
					source={require('../img/login_bg_alt_3x.png')}>
					<View style={[styles.header, this.border('red')]} >
						<View style={styles.headerWrapper} >
							<Image
								style={[styles.login_brand]}
								resizeMode={"contain"}
								source={require('../img/signup_brand.png')} />
							<View style={styles.btnRow}>
								<ImageButton
									style={[styles.tw_btn]}
									resizeMode={'contain'}
									onPress={this.onTwLoginPress}
									source={require('../img/twitter-btn.png')} />
								<ImageButton
									style={[styles.fb_btn]}
									resizeMode={'contain'}
									onPress={this.onFbLoginPress}
									source={require('../img/facebook-btn.png')} />
							</View>
							<Image
								style={[styles.loginBar]}
								style={[styles.loginBar]}
								resizeMode={'contain'}
								source={require('../img/login_bar_3x.png')} />
						</View>
					</View>
					<View style={[styles.footer, this.border('blue')]} >
						<View style={styles.footerWrapper} >
							<Text style={styles.error}>{this.state.errorMessage}</Text>
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
								source={require('../img/get_started_btn.png')} />
							<ImageButton
								style={[styles.email_btn]}
								resizeMode={'contain'}
								onPress={this.onAlreadyAcctPress}
								source={require('../img/already_acct_btn.png')} />
						</View>
					</View>
				</Image>
			</View>
		);
	},
	onTwLoginPress: function() {
		//signing up via twitter
	},
	onFbSignupPress: function() {
		//signing up via Facebook
	},
	onCreateAcctPress: function() {
		if (this.state.password === this.state.passwordConfirmation)
		{
			/* creating a new user once they create an account */
			var sign_up = "http://162.243.112.29/api/v1/sign_up?email="+this.state.username+"&password="+this.state.password;
			console.log(sign_up);
			fetch(sign_up)
				.then((response) => response.json())
				.then((responseData) => {
					console.log(responseData);
				})
				.done();
		} else {
			this.setState({ errorMessage: "Your passwords are not the same!"});
		}
	},
	onAlreadyAcctPress: function() {
		this.props.navigator.pop();
	},
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
	btnRow: {
		flexDirection: 'row',
	},
	tw_btn: {
		width: window.width/3,
		height: (147/526)*window.width/3,
		borderRadius: 4,
		justifyContent: 'space-around',
		marginRight: 5,
	},
	fb_btn: {
		width: window.width/3,
		height: (147/526)*window.width/3,
		borderRadius: 4,
		justifyContent: 'space-around',
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
	error: {
		alignItems: 'center',
		alignSelf:'center',
		fontFamily: 'Bebas Neue',
		fontSize: 15,
		color: 'red',
		margin: 5
	}
});

/*** old Parse login code

onFbSignupPress: function() {

	var that=this;

	//sign up/login via facebook and store credentials into parse
	//need approval  "user_likes", "user_about_me", "user_actions.music", "user_actions.news", "user_actions.books"
		FBLoginManager.loginWithPermissions(["email","user_friends", "public_profile"], function(error, data){
		if (!error) {

		console.log('No error');
			var authData = {
				id: data.credentials.userId,
				access_token: data.credentials.token,
				expiration_date: data.credentials.tokenExpirationDate
		 };
		 //console indicating success
		 console.log(authData.id);
		 console.log(authData.access_token);
		 console.log(authData.expiration_date);

		 //set authData state
		 that.setState({
			authData: authData,
		 });


		 //sign up into parse db
					 Parse.FacebookUtils.logIn(authData, {
					success: (user) => {
						if (user.existed()) {
							// login: nothing to do
							console.log('User Already Logged In');

							//check if all necessary data in db via parse query
							if (user.get('email') === 'undefined' || (user.get('username').indexOf(" ") === -1))
							{
									//get remaining data via api
									var email = "";
									var name = "";
								var a_token = user.get('authData').facebook.access_token;
								var user_id = user.get('authData').facebook.id;

								console.log(Parse.User.current().id);

								Api.fbDataFetch(user_id, a_token)
									.then((data) => {
										console.log(data);
										console.log(data.username);
										console.log(data.email);
										Parse.User.current().setUsername("username", data.username);
								Parse.User.current().setEmail("email", data.email);
								Parse.User.current().save(null, {
											success: function(currentUser) {
												console.log('Success');
													currentUser = Parse.User.current();
													getPlayerDataAndGraph ();
											},
											error: function(error) {
													console.log("Error: ", error);
											}
									});

								});

							}

							//set state that the user is done being loaded
							that.setState({loadingCurrentUser: false});
							that.props.navigator.immediatelyResetRouteStack([{ name: 'mainview'}]);
						} else {
							// signup: update user data, e.g. email
							console.log('getting user additional information');
							var data = user.get('authData').facebook;
							var api = 'https://graph.facebook.com/v2.3/'+data.id+'?fields=name,email&access_token='+data.access_token;

							var fetchProfile = new FBSDKGraphRequest((error, result) => {
								if (error) {

									this.setState({loadingCurrentUser: false});
								} else {
									console.log(result);
									var name = result.name;
									var email = result.email;


										className: '_User',
										objectId: user.id
									};

									ParseReact.Mutation.Set(userId, {
										username: email,
										email: email,
										name: name
									}).dispatch();

									that.setState({loadingCurrentUser: false});
									that.props.navigator.immediatelyResetRouteStack([{ name: 'introduction'}]);
								}
							}, '/me?fields=name,email');

							// fetchProfile.start();
							FBSDKGraphRequestManager.batchRequests([fetchProfile], function() {}, 10)
						}
					},
					error: (user, error) => {
						console.log('Error', error);
						console.log(user.token);
						switch (error.code) {
							case Parse.Error.INVALID_SESSION_TOKEN:
								Parse.User.logOut().then(() => {
									this.onFacebookLogin(token);
								});
								break;
							default:

						}
						that.setState({loadingCurrentUser: false});
						that.setState({errorMessage: error.message});
					}
				});

		} else {
			console.log('User did not succesfully log in');
			console.log("Error: ", error);
			that.setState({errorMessage: error.message});
		}
	});
},*/
/*
// old parse code, but parse closes in 2017
var user = new Parse.User();
	user.set("username", this.state.username);
	user.set("password", this.state.password);
	user.set("email", this.state.username);

	user.signUp(null, {
		//navigate to new component (.immediatelyResetRouteStack)
		//when doing so and we pass new views of app (routes)
		success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'introduction'}]); },
		error: (user, error) => { this.setState({ errorMessage: error.message }); }
	});
*/
