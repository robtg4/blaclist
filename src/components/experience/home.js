var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
} = React;

//additional libraries
var Parse = require('parse/react-native');
var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager, 
} = FBSDKCore;

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	//store all asynchronos calls here before screen render
	//caching data is asynchronous process with RN + parse
	//parse stores user info on device, so this process is not instantaneos
	//we need to put load up function to make sure rendering doesn't happen beforehand
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	}, 
	getInitialState: function() {
		return {
			user: null, 
			username: null, 
		}
	},
	render: function() {
		if (!this.state.user)
		{
			return <Text style={styles.label}>Loading...</Text>
		} else 
		{
			var username = this.state.user.get('username');
			console.log(this.state.username);
		}

		return (
			<View style={styles.container}>
				<Text>Welcome back, {username} </Text>
			</View>
		);
	}, 
});

styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}
});