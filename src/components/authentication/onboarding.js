var React = require('react-native');
var {
	View, 
	ScrollView, 
	Image,
	StyleSheet,
	Text, 
	TouchableHighlight,
} = React;

//additional libraries
var Parse = require('parse/react-native'); //parse for data storage
Icon = require('react-native-vector-icons/Ionicons'); //vector icons

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

//dynamic variable components
var ImageButton = require('../common/imageButton');
var KeywordBox = require('./onboarding/keyword-box');
var ActionButton = require('../common/ActionButton');

module.exports = React.createClass({
	render: function() {
		return (
			<View style={[styles.container]}>
				<Image 
					style={styles.bg} 
					source={require('./img/login_bg1_3x.png')}>
					<View style={[styles.header, this.border('red')]}>
						<View style={[styles.headerWrapper]} >
							<Image 
								resizeMode={'contain'}
								style={[styles.onboardMsg]}
								source={require('./img/onboard_msg.png')} >
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
							{this.renderKeywordBoxes()}
						</ScrollView>
					</View>
				</Image>
				<ActionButton 
					buttonColor="rgba(0,0,0,0.7)" />
			</View>
		);
	}, 
	renderKeywordBoxes: function() {
		//renders array of keywords in keyword.js
		//and maps them onto custom component keywordbox to show in the onboarding
		//component
		var Keywords = ['LGBQT', '#BlackLivesMatter', 'Arts', 'Hip-Hop', 'History', 
		'Politics', 'Fashion Trends', 'Entrepreneurship', 'Technology', 'Business', 
		'World', 'Health', 'Trending', 'Music', 'Sports', 'Entertianment', 
		'Mobile Games', 'Design', 'News', 'Humor', 'Happiness', 'Women of Color', 'Travel',
		'Photography','Computers', 'Universe', 'Internet','Performing Arts','Management',
		 'Celebrity News', 'Book Reviews', 'Marketing', 'Basketball', 'Film', 'Adventure Travel', 
		 'Auto'];

		return Keywords.map(function(keyword, i) {
			return <KeywordBox key={i} text={keyword} />
		});
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
});