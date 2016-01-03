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
var Profile = require('./profile'); 

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
	              		<Tabbar.Item name="Causes" >
			        		<Text>This is the Causes tab</Text>
			        	</Tabbar.Item>
			        	<Tabbar.Item name="Trending" >
			        		<Text>This is the Trending tab</Text>
			        	</Tabbar.Item>
			        	<Tabbar.Item name="Home" >
			        		<View style={styles.container}>
			        			{this.renderListView()}
			        		</View>
			        	</Tabbar.Item>
			        	<Tabbar.Item name="Profile" >
			        		<View style={styles.container}>
			        			<Profile />
			        		</View>
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
    //need to find which site the data is from to get logo
    getLogo: function(src) {
      if (src.indexOf('ebony') > 0) {
        return 'http://www.logotypes101.com/free_vector_logo_png/23293/DA01DB2F01F5D8B02F14B70E9687D4AD/Ebony';
      } else if (src.indexOf('google') > 0) {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png';
      } else if (src.indexOf('bossip') > 0) {
        return 'http://www.devidev.com/wp-content/uploads_2/2013/08/bossip-small.png';
      } else if (src.indexOf('blackfilm') > 0) {
        return '../../img/logos/blackfilm-logo.png';
      } else if (src.indexOf('theybf') > 0) {
        return 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Theybf-logo.png';
      } else if (src.indexOf('nyt') > 0) {
        return 'http://static01.nyt.com/images/icons/t_logo_291_black.png';
      } else if (src.indexOf('gq') > 0) {
        return 'http://static1.squarespace.com/static/544d4d0fe4b0dbc1bb9dcac9/5469408ee4b0ddf2508d1fe6/5469411de4b067500a0ef991/1431200703106/GQlogo.jpg';
      } else if (src.indexOf('buzzfeed') > 0) {
        return 'http://barnraisersllc.com/wp-content/uploads/2015/12/buzzfeed-logo.png';
      } else if (src.indexOf('complex') > 0) {
        return 'http://images.complex.com/complex/image/upload/v1426696463/Complex_180x180_obsb5h.png';
      } else if (src.indexOf('fox') > 0) {
        return 'https://pbs.twimg.com/profile_images/572924972104839168/QfSnx_Mu.png';
      } else if (src.indexOf('huffingtonpost') > 0) {
        return 'http://static.wixstatic.com/media/5ba28b_ba693d2a1acf4b6f883a6a72ac2e62f6.png/v1/fit/w_600,h_512/5ba28b_ba693d2a1acf4b6f883a6a72ac2e62f6.png';
      } else if (src.indexOf('blavity') > 0) {
        return 'https://d2o2wpn1drmies.cloudfront.net/avatars/429/863/202/7d8/410/3af/722/992/e0d/7da/eb/filledinturquoiseicon-jpg.medium.png?1406559707';
      } else if (src.indexOf('aljazeera') > 0) {
        return 'http://static.dnaindia.com/sites/default/files/styles/square/public/2015/03/26/321952-al-jazeera-logo.png?itok=sfH-fRQd';
      } 
    }, 
    getSource: function(src) {
      if (src.indexOf('ebony') > 0) {
        return 'Ebony';
      } else if (src.indexOf('google') > 0) {
        return 'Google';
      } else if (src.indexOf('bossip') > 0) {
        return 'Bossip';
      } else if (src.indexOf('blackfilm') > 0) {
        return 'Blackfilm';
      } else if (src.indexOf('theybf') > 0) {
        return 'TheyBF';
      } else if (src.indexOf('nyt') > 0) {
        return 'New York Times';
      } else if (src.indexOf('gq') > 0) {
        return 'GQ';
      } else if (src.indexOf('buzzfeed') > 0) {
        return 'Buzzfeed';
      } else if (src.indexOf('complex') > 0) {
        return 'Complex';
      } else if (src.indexOf('fox') > 0) {
        return 'Fox Sports';
      } else if (src.indexOf('huffingtonpost') > 0) {
        return 'Huffington Post';
      } else if (src.indexOf('blavity') > 0) {
        return 'Blavity';
      } else if (src.indexOf('aljazeera') > 0) {
        return 'Aljazeera';
      } 
    }, 
    //rendering rows within list view
    renderEntry: function(entry) {
    	var logo = this.getLogo(entry.url);
    	var brand = this.getSource(entry.url);
		return (
			<ArticlePreview
				category={'template'}
				entryBrand={brand}
				key={entry.title.text}
				categoryPress={this.onCategoryDetailsPress}
				selected={false}
				src={{uri:logo}}
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