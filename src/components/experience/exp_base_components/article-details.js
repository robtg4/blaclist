//article details page
var React = require('react-native');
var { View, Image, StyleSheet, Text, Modal, ScrollView, AsyncStorage } = React;
//additional libraries
var Parse = require('parse/react-native');
//dynamic component references
var Api = require('../../utils/api');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var HTMLView = require('react-native-htmlview');
var ImageButton = require('../../common/imageButton');

module.exports = React.createClass({
	componentDidMount: function() {
	},
	componentWillMount: function() {
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
					<Image source={{uri:'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/obama_gun_town_hall1-696x364.jpg?0fd4d3' }} style={[styles.entryImage]} />
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
		height: window.height/2.8,
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
