var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	ListView, 
	TouchableHighlight, 
	AsyncStorage, 
} = React;

//additional libraries
var Parse = require('parse/react-native');

//dynamic component references + libraries 
var ArticlePreview = require('./exp_base_components/article-preview');
var Api = require('../utils/api');
var FeedStore = require('../stores/feed-store');
var ArticleDetails = require('./exp_base_components/article-details');
var Spinner = require('react-native-spinkit');
var SideMenu = require('react-native-side-menu');
var Menu = require('./menu');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},  
	componentDidMount: function() {
		//console.log(this.state.user);
		var personalFeed = null; 
		var Onboarding = Parse.Object.extend("Onboarding");
		var query = new Parse.Query(Onboarding);
		query.equalTo("userObjectId", Parse.User.current());
		var that = this;
		query.find({
		  success: function(result) {
		    console.log("Successfully retrieved " + result.length + " users!");
		    var object = result[0];
		    console.log(object.id);
		    // Do something with the returned Parse.Object values
		    console.log(object.get('interests'));
		    that.fetchData(object.get('interests'));
		  },
		  error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});

	},
	getInitialState: function() {
		return {
			user: null, 
			personalFeed: null, 
			isLoaded: false, 
			dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
            }), 
		}
	},
	fetchData: function(personalFeed) {
		var that = this; 
	    FeedStore.getArticles(personalFeed)
			.then((data) => {
				var entries = data; 
		        that.setState({
		        	dataSource : that.state.dataSource.cloneWithRows(entries),
		            isLoaded   : true, 
		        });
		  	}).done();
	}, 
	render: function() {

		if (!this.state.isLoaded) {
            return this.renderLoadingView();
        }
        return <SideMenu 
        			menu={<Menu/>}
        			toleranceX={0}
        			edgeHitWidth={window.width/5}
        			openMenuOffset={window.width/5}>
        		<View style={styles.container}>
        			{this.renderListView()}
        		</View>
        	</SideMenu>
	}, 
	renderLoadingView: function() {
        return (
            <View style={styles.container}>
            	<Spinner style={styles.spinner} isVisible={!this.state.isLoaded} size={50} type={'Arc'} color={'#FF0000'}/>
            </View>
        );
    }, 
	renderListView: function() {
        return (
                <ListView
                    dataSource = {this.state.dataSource}
                    initialListSize = {5}
                    pageSize={5}
                    renderRow  = {this.renderEntry} />
        );
    }, 
    renderEntry: function(entry) {

		if (typeof entry.mediaGroups === 'undefined')
		{
			return (
				<ArticlePreview
					category={entry.categories[0]}
					key={entry.title}
					heartText={'2.9k'}
					categoryPress={this.onCategoryDetailsPress}
					selected={false}
					source={require('../img/stock_image.png')}
					text={entry.title.toLowerCase().replace('&nbsp;','')}
					onPress={() => this.onArticleDetailsPress(entry)} />
			);
		} else 
		{ 
			var url = entry.mediaGroups[0].contents[0].url; 
			if (url.indexOf('w=150') > -1)
			{
				url.replace("w=150", "w=500");
			}
			var catsource = entry.categories[0]; 
			if (typeof catsource == "undefined")
			{
				catsource = "News";
			}
			return (
				<ArticlePreview
					category={catsource}
					key={entry.title}
					heartText={'2.9k'}
					categoryPress={this.onCategoryDetailsPress}
					selected={false}
					source={{uri: url }}
					text={entry.title.toLowerCase().replace('&nbsp;','')}
					onPress={() => this.onArticleDetailsPress(entry)} />
			);
		}
			
	},
	onCategoryDetailsPress: function() {
		//forward to sytled web view of categorical article feed
		console.log("onCategoryDetailsPress"); 
	}, 
	onArticleDetailsPress: function(entry) {
		//forward to sytled web view of article details given link
		console.log("onArticleDetailsPress"); 
		console.log(entry);

		//asynchronously store entry


		this.props.navigator.push({
			name: 'articledetails',
            passProps: {entry: entry},
		});
	}, 
	/*
	onChange: function(event, articles) {
		this.setState({articles: articles}); //trigers re-render of component
	}
	*/

});


var styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: "black", 
		shadowColor:'black', 
	    shadowOffset: {width: 4, height: 4}, 
	    shadowOpacity: 0.8, 
	    shadowRadius: 20,
	}, 
	activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner: {
    	marginBottom: 50,
  	},
});