var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	Modal,  
	ScrollView,
	AsyncStorage
} = React;

//additional libraries
var Parse = require('parse/react-native');
//var Reflux = require('reflux');

//dynamic component references
var Api = require('../../utils/api');

//libraries 


//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var HTMLView = require('react-native-htmlview');
var ImageButton = require('../../common/imageButton');

module.exports = React.createClass({ 
	componentDidMount: function() {
	}, 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
		this.setState({ entry: this.props.entry });
		console.log(this.state.entry); 
	},  
	getInitialState: function() {
		return {
			entry: null, 
		}
	},
	render: function() {
		var article = this.state.entry;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container}>
					<Image source={{uri:'http://blameebro.com/wp-content/uploads/2015/07/kdot-alright-video.png' }} style={[styles.entryImage]} />
					<View style={styles.title}>
		                <Text style={styles.titleText}>These 3 Black Comedians Are Finally Being Honored For The Ways They Paved & The History They Made</Text>
		            </View>
		            <View style={styles.content}>
						<HTMLView
					        value={'<p>A <a href="http://www.benedelman.org/publications/airbnb-guest-discrimination-2015-12-09.pdf">working paper</a> (pdf) from Harvard Business School released Wednesday found “widespread discrimination” by hosts against people with black-sounding names seeking home rentals, <a href="http://www.nytimes.com/2015/12/12/business/discrimination-by-airbnb-hosts-is-widespread-report-says.html">reports the New York Times</a>.</p>'}
					        stylesheet={styles_two} />
					</View>
				</ScrollView>
				<View style={styles.footer}>
				</View>
			</View>
		);
	}, 
	border: function(color) {
	    return {
	      //borderColor: color, 
	      //borderWidth: 4,
	    } 
	 },
	 onPressFave: function() {

	 }, 
	 onPressSite: function() {

	 }, 

});

var styles_two = StyleSheet.create({
	p: {
		color:'white',  
		fontWeight: '200', 
		fontFamily: 'SFCompactText-Medium',
		fontSize: 12,
	}
}); 

var styles = StyleSheet.create({
	container: {
		flex: 0.93, 
		backgroundColor: '#222222',  
	}, 
	content: {
		marginTop: window.height/22,  
		marginRight: window.width/20, 
		marginLeft: window.width/20, 
	}, 
	footer: {
		flex: 0.07, 
		backgroundColor: '#DB202A',  
	}, 
	entryImage: {
		height: window.height/3,
		width: window.width, 
	}, 	
	titleText: {
		fontFamily: 'Bebas Neue', 
		fontSize: 20, 
		padding: 6, 
		color: 'white', 
		letterSpacing: 1,
		textAlign: 'center'
	}, 
	title:{
        backgroundColor: "rgba(0, 0, 0, .6)",
        marginHorizontal: 30,
        marginTop: -45,
    },
});