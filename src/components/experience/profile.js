//profile page
var React = require('react-native');
var { View, Image, StyleSheet, Text, ScrollView } = React;
//additional libraries
var Parse = require('parse/react-native');
var Spinner = require('react-native-spinkit');
//dynamic component references + libraries
var ImageButton = require('../common/imageButton');
var KeywordBox = require('../authentication/onboarding/keyword-box')
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })

		var Onboarding = Parse.Object.extend("Onboarding");
		var query = new Parse.Query(Onboarding);
		query.equalTo("userObjectId", Parse.User.current());
		var that = this;
		query.find({
		  success: function(result) {
		    var object = result[0];
		    console.log(object.id);
		    // retreive interests array
		    that.setState({ keywords: object.get('interests') });
		  },
		  error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});
	},
	//states of this components
	getInitialState: function() {
		return {
			user: null,
			keywords: null,
		}
	},
	//rendering component
	render: function() {
		var interests = this.state.keywords;
		if (interests == null)
		{
			return this.renderLoadingView();
		} else
		{
			return <View style={styles.container}>
        		<ScrollView>
					<View style={[styles.imageSection, this.border('red')]}>
						<Image
							style={styles.profileImage}
							source={require('../img/test-profile.png')} />
						<View style={styles.usernameRow}>
							<Text style={styles.usernameText}>@ROBTGREEEN</Text>
							<ImageButton
								style={[styles.settingsBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onSettingsPress}
								source={require('../img/settings-icon.png')} />
						</View>
					</View>
					<View style={[styles.detailsSection, this.border('orange')]}>
						<View>
							<Text style={styles.profileDescription}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
							</Text>
						</View>
						<View style={[styles.socialIcons, this.border('red')]}>
							<ImageButton
								style={[styles.igBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/instagram-icon.png')} />
							<ImageButton
								style={[styles.googleBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/google-icon.png')} />
							<ImageButton
								style={[styles.fbBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/facebook-icon.png')} />
							<ImageButton
								style={[styles.twBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/twitter-icon.png')} />
						</View>
						<View style={[styles.profileKeywords, this.border('blue')]}>
							{this.renderKeywords(interests)}
						</View>
						<View style={[styles.profileStatus, this.border('white')]}>
							<View style={styles.textBox}>
								<Text style={styles.profileDetailsText}>292</Text>
								<Text style={styles.profileDetailsTextUnder}>comments</Text>
							</View>
							<View style={styles.textBox}>
								<Text style={styles.profileDetailsText}>0</Text>
								<Text style={styles.profileDetailsTextUnder}>lists</Text>
							</View>
							<View style={styles.textBox}>
								<Text style={styles.profileDetailsText}>91</Text>
								<Text style={styles.profileDetailsTextUnder}>favorites</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		}

	},
	renderKeywords: function(interests) {
	    return interests.map(function(keyword, i) {
	    	//console.log(keyword);
			return <KeywordBox
				key={i}
				text={keyword}
				onPress={ () => { this.onReadyPress }}
				selected={false} />
		});
	},
	onSettingsPress: function() {
		this.props.navigator.push({ name: 'settings'});
	},
	//loading render
	renderLoadingView: function() {
        return (
            <View style={styles.container}>
            	<Spinner style={styles.spinner} isVisible={!this.state.isLoaded} size={50} type={'Arc'} color={'#FF0000'}/>
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
	usernameRow: {
		flexDirection: 'row',
	},
	settingsBtn: {
		width: window.width/30,
		height: window.width/30,
	},
	profileDetailsTextUnder: {
		color:'white',
		fontFamily: 'SFCompactText-Medium',
		fontSize: 15,
	},
	textBox: {
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: 'center',
	},
	profileDetailsText: {
		fontFamily: 'Bebas Neue',
		fontSize: 25,
		color: 'white',
	},
	igBtn: {
		width: window.width/12,
		height: window.width/12,
		alignSelf: 'center',
	},
	fbBtn: {
		width: window.width/20,
		height: window.width/10,
		alignSelf: 'center',
	},
	googleBtn:  {
		width: window.width/18,
		height: window.width/12,
		alignSelf: 'center',
	},
	twBtn: {
		width: window.width/12,
		height: window.width/12,
		alignSelf: 'center'
	},
	profileDescription: {
		flex: 2,
		fontFamily: 'SFCompactText-Medium',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		fontSize: 12,
		color: 'white',
		textAlign: 'center',
		marginLeft: window.width/25,
		marginRight: window.width/25,
		marginTop: window.height/50,
	},
	socialIcons: {
		flex: 1,
		flexDirection:'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	profileKeywords: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
	},
	profileStatus: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
  profileImage: {
  	marginTop: window.height/15,
		borderRadius: 60,
		width: 120,
		height: 120,
		marginBottom: 2,
		backgroundColor: 'transparent',
	},
	usernameText: {
		fontSize: 15,
		fontFamily: 'SFCompactText-Medium',
		color: 'white',
		marginBottom: window.height/30,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#333333',
	},
	imageSection: {
		flex: 1,
		backgroundColor: "#222222",
		width: window.width,
		width: window.width,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	detailsSection: {
		flex: 2,
		backgroundColor: '#333333',
		width: window.width,
		flexDirection: 'column',
		justifyContent: 'center',
		height: 1.8*window.height/3
	}
});
