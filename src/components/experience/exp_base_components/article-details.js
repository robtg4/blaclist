var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	ScrollView, 
} = React;

//additional libraries
var Parse = require('parse/react-native');
//var Reflux = require('reflux');

//dynamic component references
var Api = require('../../utils/api');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},  
	getInitialState: function() {
		return {

		}
	},
	componentDidMount: function() {
		this.organizeData(); 
	},
	organizeData: function() {
		
	}, 
	render: function() {
		return (
			<View>{this.props.entry.title}</View>
		);
	}, 

});


styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}, 
});