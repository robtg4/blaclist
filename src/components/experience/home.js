var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text>
					You are signed in!
				</Text>
			</View>
		);
	}
});

styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}
});