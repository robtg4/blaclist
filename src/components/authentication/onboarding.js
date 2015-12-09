var React = require('react-native');
var {
	View, 
	ScrollView, 
	Image,
	StyleSheet,
	Text, 
	TouchableHighlight,
	StatusBarIOS,
} = React;

//additional libraries
var Parse = require('parse/react-native'); //parse for data storage
Icon = require('react-native-vector-icons/Ionicons'); //vector icons
var LinearGradient = require('react-native-linear-gradient'); //linear grad. over button


//status bar styling


//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');
var KeywordBox = require('./onboarding/keyword-box');
var ActionButton = require('../common/ActionButton');
var KeywordData = require('../store/keywords');

module.exports = React.createClass({ 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},
	getInitialState: function() {
		return {
			keywords_array: Array.apply(null, Array(53)).map(Boolean.prototype.valueOf,false), 
			enoughSelections: false, 
			user: null, 
			errorMessage: '', 
		};
	}, 
	render: function() {
		var newData = this.state.keywords_array;
		var Keywords = KeywordData.Keywords;
		return (
			<View style={[styles.container]}>
				<Image 
					style={styles.bg} 
					source={require('../img/login_bg1_3x.png')}>
					<View style={[styles.header, this.border('red')]}>
						<View style={[styles.headerWrapper]} >
							<Image 
								resizeMode={'contain'}
								style={[styles.onboardMsg]}
								source={require('../img/onboard_msg.png')} >
							</Image>
						</View>
					</View>
					<View style={[styles.footer, this.border('blue')]}>
						<ScrollView 
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
							horizontal={false}
							style={styles.footerWrapperNC}
							contentContainerStyle={[styles.footerWrapper]}>
							{this.renderKeywordBoxes(newData, Keywords)}
						</ScrollView>
					</View>
				</Image>
				<ActionButton 
					selected={this.state.enoughSelections}
					onPress={this.onNextPress}
					buttonColor="rgba(0,0,0,0.7)" />
			</View>
		);
	}, 
	renderKeywordBoxes: function(newData, Keywords) {
		//renders array of keywords in keyword.js
		//and maps them onto custom component keywordbox to show in the onboarding
		//component

		 var that = this;

		return Keywords.map(function(keyword, i) {

			return <KeywordBox 
				key={i} 
				text={keyword} 
				onPress={ () => { that.onKeywordPress(i, keyword, newData) }}
				selected={newData[i]} />
		});
	}, 
	onKeywordPress: function(i, keyword, newData) {
		//console.log(this.state.keywords_array);
		console.log(keyword); 
		//console.log(newData); 

		//change the state accordingly without doing so directly 
		var array = newData;
		array[i] = true; 
		this.setState({ keywords_array: array });

		//check if there at least 5 keywords selected
		if(array.filter(function(val) { return val }).length > 4) {
  			this.setState({enoughSelections: true})
		}

		//console.log(array);
		//console.log(this.state.keywords_array);

	}, 
	onNextPress: function() {
		//match the state array to the keywords array to find which
		//words were selected to properly update and push them into parse
		var that=this;
		console.log("Next Button Pressed");
		if (this.state.enoughSelections)
		{
			//console.log(this.state.user); 
			//console.log(KeywordData.Keywords);
			//map array back to state array to find words selected
			console.log(that.state.keywords_array);
			var array = that.state.keywords_array; 
			var selected_words = [];

			for (var i = 0; i < array.length; i++)
			{
				if (array[i])
				{	
					console.log(KeywordData.Keywords[i]);
					selected_words.push(KeywordData.Keywords[i]);
				}
			}

			//now we need to cross use our parse user data and 
			//selected words to store in parse (pointer class)
			var Onboarding = Parse.Object.extend("Onboarding");
			var user_words = new Onboarding();
				user_words.set("userObjectId", { __type: "Pointer", className: "_User", objectId: that.state.user.id });
				user_words.set("interests", selected_words);

			//check for entry errors
			user_words.save({
			  success: function(user_words) {
			    console.log("The save was successful.");
			    that.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]);
			  },
			  error: function(user_words, error) {
			    console.log(error);
			  }
			});
				
		} 
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
	onboardMsg: {
		width: (window.width/1.2), 
		height: (452/1287)*((window.width/1.2)),
	},
	footer: {
		flex: 7, 
		marginTop: window.height/35,
		marginLeft: window.width/30,
	}, 
	//container style wrapper for scrollview
	footerWrapper: {
		flexWrap: 'wrap', 
		alignItems: 'flex-start',
		flexDirection:'row',
	},
	//non-container style wrapper for scrollview
	footerWrapperNC: {
		flexDirection:'column',
	},
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
	error: {
		alignItems: 'center', 
		alignSelf:'center',
		fontFamily: 'Bebas Neue', 
		fontSize: 15,
		color: 'red',
		margin: 5
	}, 
});