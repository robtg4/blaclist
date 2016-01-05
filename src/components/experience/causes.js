var React = require('react-native');
var { View, Image, StyleSheet, Text, ScrollView } = React;

//additional libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
//dynamic component references + libraries 

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
	render: function() {

        return <View style={styles.container}>
        	<Text style={styles.text}>This is the Causes Page</Text>
        </View>
	},
});

var styles = StyleSheet.create({	
	text: {
		fontSize: 20, 
		color: 'white', 
	}, 
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: "#222222", 
		shadowColor:'black', 
	    shadowOffset: {width: 4, height: 4}, 
	    shadowOpacity: 0.8, 
	    shadowRadius: 20,
	    height: window.height, 
	    width: window.width, 
	}, 
});