var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
} = React;

//additional libraries
var Parse = require('parse/react-native');
var EventEmitter = require('EventEmitter');
var Spinner = require('react-native-spinkit');
var SideMenu = require('react-native-side-menu');
var Subscribable = require('Subscribable');

//dynamic component references
var Api = require('../utils/api');
var Menu = require('./menu');
var MenuButton = require('../common/menuButton');

//libraries 


//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');


module.exports = React.createClass({ 
	mixins: [Subscribable.Mixin],
	componentWillMount: function() {
		this.eventEmitter = new EventEmitter();
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},  
	getInitialState: function() {
		return {

		}
	},
	//part of menu button functionality 
	navigate: function(title, link) {
      this.refs.rootSidebarMenu.closeMenu();

      this.refs.rootNavigator.replace({
        title: title,
        component: link,
      });
    },
	render: function() {
		return <SideMenu 
        			menu={<Menu events={this.eventEmitter} navigate={this.navigate} />}
        			touchToClose={this.state.touchToClose}
          			disableGestures={this.state.disableGestures}
        			toleranceX={0}
        			edgeHitWidth={window.width/5}
        			openMenuOffset={window.width/5}>
        		<View style={styles.container}>
        			<Text>I am the List Page!</Text>
        		</View>
        		<MenuButton 
					source={require('../img/menu-btn.png')}
					resize={'contain'}
					onPress={this.onMenuPress} />
        	</SideMenu>
	},
	//menu press function 
	onMenuPress: function() {
		this.eventEmitter.emit('toggleMenu');
	}, 
	border: function(color) {
	    return {
	      //borderColor: color, 
	      //borderWidth: 4,
	    } 
	 },

});

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: 'transparent', 
	}, 
});