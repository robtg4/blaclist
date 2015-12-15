var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	Modal,  
	ScrollView
} = React;

//additional libraries
var Parse = require('parse/react-native');
//var Reflux = require('reflux');

//dynamic component references
var Api = require('../../utils/api');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var HTMLView = require('react-native-htmlview');
var ImageButton = require('../../common/imageButton');

module.exports = React.createClass({ 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},  
	getInitialState: function() {
		return {
			entry: null, 
		}
	},
	render: function() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={[styles.header, this.border('red')]}>
					<Image source={{uri:'http://blameebro.com/wp-content/uploads/2015/07/kdot-alright-video.png' }} style={[styles.entryImage]}>
						<Modal
				          animated={false}
				          transparent={true}
				          visible={true}>
					         <View style={[styles.headerTopRow, this.border('yellow'), styles.overlay]}>
								<Text style={styles.titleText}>These 3 Black Comedians Are Finally Being Honored For The Ways They Paved & The History They Made</Text>
							</View>
				        </Modal>
					</Image>
				</View>
				<View style={[styles.footer, this.border('blue')]}>
					<View style={[styles.footerTopRow, this.border('red')]}>
						<View style={styles.group}>
							<ImageButton
								style={[styles.btn]}
								resizeMode={'contain'}
								onPress={this.onPressSite}
								source={require('../../img/globe-details.png')} />
							<Text style={styles.sideText}>codeblackreport.com</Text>
						</View>
						<View style={styles.group}>
							<ImageButton
								style={[styles.btn]}
								resizeMode={'contain'}
								onPress={this.onPressFave}
								source={require('../../img/check-details.png')} />
							<Text style={styles.sideText}>2.6k favorites</Text>
						</View>
					</View>
					<Image 
						style={[styles.loginBar]}
						resizeMode={'contain'}
						source={require('../../img/login_bar_3x.png')} />
					<View style={[styles.content, this.border('blue')]}>
						<HTMLView
							style={{backgroundColor:'color'}}
					        value={'<p>A <a href="http://www.benedelman.org/publications/airbnb-guest-discrimination-2015-12-09.pdf">working paper</a> (pdf) from Harvard Business School released Wednesday found “widespread discrimination” by hosts against people with black-sounding names seeking home rentals, <a href="http://www.nytimes.com/2015/12/12/business/discrimination-by-airbnb-hosts-is-widespread-report-says.html">reports the New York Times</a>.</p>'}
					        stylesheet={styles_two} />
					</View>
				</View>
			</ScrollView>
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
		fontSize: 12, 
		fontWeight: '200', 
		fontFamily: 'arial', 
	}
}); 

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: 'transparent', 
	}, 
	footer: {
		flex: 2,
		backgroundColor: '#222222',  
		height: window.height/3.5,
		width: window.width, 
		alignItems: 'center', 
	}, 
	header: {
		flex: 1, 
	}, 
	entryImage: {
		height: window.height/3,
		width: window.width, 
	}, 
	loginBar: {
		width: (window.width/1.3)/1.8, 
		height: (70/553)*((window.width/1.3)/1.8),
		marginTop: -10,
	},
	barHolder: {
		backgroundColor: "#222222", 
	}, 
	content:  {
		flex: 5,
		marginLeft: window.width/40,
		marginRight: window.width/40,
		marginTop: window.height/40, 
	}, 	
	headerTopRow: {
		width: window.width/1.2, 
		backgroundColor: '#1C1C1A', 
		alignItems: 'flex-end', 
		alignSelf: 'center', 
		opacity: 0.6, 
		marginTop: (window.height/3)*(4/5), 
	}, 
	footerTopRow: {
		flex: 1, 
		flexDirection: "row", 
		justifyContent: 'space-around', 
		width: window.width, 
		height: window.height/15, 
		marginTop: (window.height/10), 
	}, 
	group: {
		flexDirection: "row", 
		justifyContent: 'space-between', 
		alignItems: 'center', 
	}, 
	btn: {
		width: window.width/20,
		height: window.width/20,
	}, 
	sideText: {
		color:'white', 
		fontSize: 12, 
		fontFamily: 'arial', 
		margin: 10, 
		alignSelf: 'center', 
	}, 
	titleText: {
		fontFamily: 'Bebas Neue', 
		fontSize: 20, 
		padding: 6, 
		color: 'white', 
		letterSpacing: 1,
		textAlign: 'center'
	}, 
});