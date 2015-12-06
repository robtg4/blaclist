//register on both android and ios index.js files
var React = require('react-native');
var Parse = require('parse/react-native');
var {
	View, 
	StyleSheet, 
	Text, 
	Navigator,
} = React;

//authentication components 
var Login = require('./components/authentication/login');
var Signin = require('./components/authentication/signin');

var ROUTES ={
	//relates to imported component to display
	//initial route is am object with the name of the route within this variable
	signin: Signin,
	login: Login, 
}

module.exports = React.createClass({
	componentWillMount: function() {
		//executed when component shows on screen
		//tells app to initialize parse 
		
	}, 
	renderScene: function(route, navigator) {
		//when navigator is initially shown it has to render initial route 
		//render a component and return it, whatever we return is placed on stack
		//add navigator property into this component for all app access
		var Component = ROUTES[route.name]; //ROUTE['signin'] => Signin
		return <Component route={route} navigator={navigator} />;
	}, 
	render: function() {
		return (
			<Navigator 
				style={styles.container}
				initialRoute={{name: 'signin'}}
				renderScene={this.renderScene}
				configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }} />
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});