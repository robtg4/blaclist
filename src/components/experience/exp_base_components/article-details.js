var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	ScrollView,
	WebView,  
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
			entry: null, 
		}
	},
	render: function() {
		console.log(this.props.article);
		var article = this.props.article; 
		return (
			<View style={styles.container}>
				<View styles={styles.header}>
					<Image
						source={entry.mediaGroups[0].contents[0].url}
						resizeMode={'contain'} 
						style={styles.entryImage} />
				</View>
				<View styles={styles.middle}>
				</View>
				<ScrollView style={styles.footer}>
					<WebView
					  automaticallyAdjustContentInsets={true}
			          style={styles.webView}
			          html={entry.content}
			          javaScriptEnabledAndroid={true}
			          onNavigationStateChange={this.onNavigationStateChange}/>    
				</ScrollView>
			</View>
		);
	}, 

});


styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}, 
	footer: {
		flex: 1,
		backgroundColor: 'black',  
	}, 
	middle: {
		flex: 1,
	}, 
	header: {
		flex: 2, 
	}, 
	articleImage: {
		height: window.height/3,
		width: window.width, 
	}, 
});