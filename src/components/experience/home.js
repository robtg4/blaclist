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
var Spinner = require('react-native-spinkit');
var Tabbar = require('react-native-tabbar');

//dynamic component references + libraries 
var ArticlePreview = require('./exp_base_components/article-preview');
var Api = require('../utils/api');
var FeedStore = require('../stores/feed-store');
var ArticleDetails = require('./exp_base_components/article-details');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},  
	//on first login (and all new logins)
	//need to pull onboarding keywords that indicate user interests
	//so that we can pull the appropiate feeds 
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
	//states of this components 
	getInitialState: function() {
		return {
			user: null, 
			personalFeed: null, 
			selected: 'Home', 
			isLoaded: false, 
			dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
            }), 
		}
	},
    //gettign data for rss feed based on user interests 
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
	//rendering component 
	render: function() {

		if (!this.state.isLoaded) {
            return this.renderLoadingView();
        }
        return <Tabbar 
		        	selected={this.state.selected} 
		        	tabHeight={window.height/16}
		        	style={styles.menu}
		        	onTabItemPress={name => this.setState({ selected: name })}
		        	renderTabComponent
		        	renderTabComponent={(name, isActive) => (
	                <View
	                    style={[
	                      { borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' },
	                      isActive ? { borderColor: '#DB202A'} : { borderColor: 'transparent' }
	                    ]}>
	                  <Text style={styles.menuText}>{ name }</Text>
	                </View>
	              	)}>
		        		<Tabbar.Item 
		        			name="Home" >
			        		<View style={styles.container}>
			        			{this.renderListView()}
			        		</View>
			        	</Tabbar.Item>
			        	<Tabbar.Item name="Trending" >
			        		<Text>This is the Trending tab</Text>
			        	</Tabbar.Item>
			        	<Tabbar.Item name="Profile" >
			        		<Text>This is the Profile tab</Text>
			        	</Tabbar.Item>
			        	<Tabbar.Item name="Settings" >
			        		<Text>This is the Settings tab</Text>
			        	</Tabbar.Item>
	        	</Tabbar>		
	},
	//loading render
	renderLoadingView: function() {
        return (
            <View style={styles.container}>
            	<Spinner style={styles.spinner} isVisible={!this.state.isLoaded} size={50} type={'Arc'} color={'#FF0000'}/>
            </View>
        );
    }, 
    //rendering list view
	renderListView: function() {
        return (
                <ListView
                    dataSource = {this.state.dataSource}
                    initialListSize = {5}
                    pageSize={5}
                    renderRow  = {this.renderEntry} />
        );
    }, 
    //rendering rows within list view
    renderEntry: function(entry) {
		return (
			<ArticlePreview
				category={'template'}
				key={entry.title.text}
				categoryPress={this.onCategoryDetailsPress}
				selected={false}
				source={{uri: entry.image.src }}
				text={entry.title.text}
				onPress={() => this.onArticleDetailsPress(entry)} />
		);	
	},
	//pressing category button to go to feed of that category 
	onCategoryDetailsPress: function() {
		//forward to sytled web view of categorical article feed
		console.log("onCategoryDetailsPress"); 

		fetch('https://www.kimonolabs.com/api/d076bfeo?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE')
	      .then((response) => response.json())
	      .then((responseData) => {
	       console.log(responseData);
	    });
	}, 
	//press to see article's details 
	onArticleDetailsPress: function(entry) {
		//forward to sytled web view of article details given link
		console.log("onArticleDetailsPress"); 
		console.log(entry);

		this.props.navigator.push({
			name: 'articledetails',
            passProps: { entry: entry }
		});
	}, 
	/*
	onChange: function(event, articles) {
		this.setState({articles: articles}); //trigers re-render of component
	}
	*/

});


var styles = StyleSheet.create({
	menuText: {
		color:'white',  
		fontFamily: 'SFCompactText-Medium',
	}, 
	menu: {
		backgroundColor: "black"
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
	}, 
	activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner: {
    	marginBottom: 50,
  	},
});