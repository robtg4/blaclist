//register on both android and ios index.js files
var React = require('react-native');
var Parse = require('parse/react-native');
var {
	View, 
	StyleSheet, 
	Text, 
	Navigator,
	StatusBarIOS,
} = React;

//authentication components 
var Signin = require('./components/authentication/signin');
var Launch = require('./components/authentication/launch');
var Signup = require('./components/authentication/signup');
var Home = require('./components/experience/home');
var Onboarding = require('./components/authentication/onboarding');

//we have router flux enabled and react-native-navbar but we
//need time to change a few things around to enable more customized 
//component transitions 
var ROUTES ={
	//relates to imported component to display
	//initial route is am object with the name of the route within this variable
	launch: Launch,
	signin: Signin, 
	signup: Signup,
	home: Home, 
	onboarding: Onboarding, 
}

module.exports = React.createClass({
	componentWillMount: function() {
		//executed when component shows on screen
		//tells app to initialize parse and facebook js sdk
		Parse.initialize("jspeQAWhXjb9QAIKxfVbxnggnMv3Y4RuRJ13YLDY", "1IlLlb7x3mHq1vm80zlFlqcoydFuZUQqmjvvmXze");
		//Parse.User.enableRevocableSession();
		return StatusBarIOS.setStyle(1);
	}, 
	renderScene: function(route, navigator) {
		//when navigator is initially shown it has to render initial route 
		//render a component and return it, whatever we return is placed on stack
		//add navigator property into this component for all app access
		var Component = ROUTES[route.name]; //ROUTE['signin'] => Signin
		return <Component route={route} navigator={navigator} />;
	}, 
	transition: function(route) {
    	return ROUTES[route.name].transition;
  	},
	render: function() {
		return (
			<Navigator 
				style={styles.container}
				initialRoute={{name: 'launch'}}
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