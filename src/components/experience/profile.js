//profile page
var React = require('react-native');
var { View, Image, StyleSheet, Text } = React;
//additional libraries
var Parse = require('parse/react-native');
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
        return <View style={styles.container}>
				<View style={[styles.imageSection, this.border('red')]}>	
					<Image 
						style={styles.profileImage}
						source={require('../img/test-profile.png')} />
					<View>
						<Text style={styles.usernameText}>@ROBTGREEEN</Text>
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
						{this.renderKeywords}
					</View>
					<View style={[styles.profileStatus, this.border('white')]}>
					</View>
				</View>
			</View>
	},
	renderKeywords: function() {
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
		    return object.get('interests').map(function(keyword, i) {
		    	console.log(keyword);
				return <KeywordBox 
					key={i} 
					text={keyword} 
					onPress={ () => { that.onReadyPress }}
					selected={true} />
			});	
		  },
		  error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});

	}, 
	onReadyPress: function() {

	}, 
	border: function(color) {
      return {
        //borderColor: color, 
        //borderWidth: 1,
      } 
  	},

});


var styles = StyleSheet.create({
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
		width: window.width/20,
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
		marginTop: 15, 
	}, 
	profileKeywords: {
		flex: 3, 
		alignItems: 'center', 
		justifyContent: 'center'
	}, 
	profileStatus: {
		flex: 1, 
	}, 
  	profileImage: {
		borderRadius: 50, 
		width: 100, 
		height: 100, 
		borderWidth: 2, 
		marginBottom: window.height/30, 
		backgroundColor: 'transparent', 
	},  
	usernameText: {	
		fontSize: 15, 
		fontFamily: 'SFCompactText-Medium',
		color: 'white', 
	}, 
	container: {
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center', 
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
	}
});