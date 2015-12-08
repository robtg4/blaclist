var React = require('react-native');
var {
	TouchableHighlight, 
	StyleSheet, 
	Text, 
} = React;


module.exports = React.createClass({
	//prop 1: keyword 
	//once clicked we need a boolean indicator to change to indicate that
	//that word has been clicked
	//upon next button push - the values are comitted to the user table in parse 
	render: function() {
		return (
			<TouchableHighlight 
				style={[styles.keywordBox, this.props.selected ? {backgroundColor: 'rgb(68,106,122, 0.6)'} : {backgroundColor: 'transparent'}]} 
				onPress={this.props.onPress}
				key={this.props.key}
				underlayColor={'rgb(68,106,122, 0.6)'} >
				<Text style={styles.keywordText}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}, 
});

var styles = StyleSheet.create({
	keywordText: {
		fontFamily: 'Bebas Neue', 
		fontSize: 18, 
		padding: 6, 
		fontWeight: 'bold',
		color: 'white', 
		letterSpacing: 1.5,
		textAlign: 'center'
	}, 
	keywordBox: {
		backgroundColor: 'transparent',
		margin: 3, 
		borderColor: 'rgb(68,106,122, 0.6)', 
	    borderWidth: 2,
	},
});
