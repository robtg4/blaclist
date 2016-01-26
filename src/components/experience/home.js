var React = require('react-native');
var { View, Image, StyleSheet, Text, ListView, TouchableHighlight} = React;

//additional libraries
var Parse = require('parse/react-native');
var Spinner = require('react-native-spinkit');
var NavigationBar = require('react-native-navbar');
//dynamic component references + libraries
var ArticlePreview = require('./exp_base_components/article-preview');
var ArticlePreviewAlt = require('./exp_base_components/article-preview-alt');
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
        /* return <View style={styles.container}>
			    {this.renderListView()}
		    </View>
				*/
				var entry = false;
				return <View>
					<ArticlePreview
						category={'Black Millennials'}
						postTime={'30 minutes ago'}
						entryBrand={'Blavity'}
						key={'ICYMI: President Obama’s Town Hall #GunsInAmerica'}
						categoryPress={this.onCategoryDetailsPress}
						src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}}
						source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/obama_gun_town_hall1-696x364.jpg?0fd4d3' }}
						text={'ICYMI: President Obama’s Town Hall #GunsInAmerica'}
						onPress={() => this.onArticleDetailsPress(entry)} />
					<ArticlePreview
						category={'Black Millennials'}
						postTime={'1 hour ago'}
						entryBrand={'Blavity'}
						key={'First Look At Cast Of Nat Turner Biopic “The Birth Of A Nation”'}
						categoryPress={this.onCategoryDetailsPress}
						src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}}
						source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/birth.jpg?0fd4d3' }}
						text={'First Look At Cast Of Nat Turner Biopic “The Birth Of A Nation”'}
						onPress={() => this.onArticleDetailsPress(entry)} />
					<ArticlePreview
						category={'Black Millennials'}
						postTime={'30 minutes ago'}
						entryBrand={'Blavity'}
						key={'ICYMI: Presidemnt Obama’s Town Hall #GunsInAmerica'}
						categoryPress={this.onCategoryDetailsPress}
						src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}}
						source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/obama_gun_town_hall1-218x150.jpg?0fd4d3' }}
						text={'ICYMI: President Obama’s Town Hall #GunsInAmerica'}
						onPress={() => this.onArticleDetailsPress(entry)} />
				</View>

	},
	//loading render
	renderLoadingView: function() {
        return (
            <View style={[styles.container, {height: window.height, width: window.width}]}>
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
      if (src.toLowerCase() == "ebony") {
        return 'http://www.logotypes101.com/free_vector_logo_png/23293/DA01DB2F01F5D8B02F14B70E9687D4AD/Ebony';
      } else if (src.toLowerCase() == 'google') {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png';
      } else if (src.toLowerCase() == 'bossip') {
        return 'http://www.devidev.com/wp-content/uploads_2/2013/08/bossip-small.png';
      } else if (src.toLowerCase() == 'blackfilm') {
        return '../../img/logos/blackfilm-logo.png';
      } else if (src.toLowerCase() == 'theybf') {
        return 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Theybf-logo.png';
      } else if (src.toLowerCase() == 'nyt') {
        return 'http://static01.nyt.com/images/icons/t_logo_291_black.png';
      } else if (src.toLowerCase() =='gq') {
        return 'http://static1.squarespace.com/static/544d4d0fe4b0dbc1bb9dcac9/5469408ee4b0ddf2508d1fe6/5469411de4b067500a0ef991/1431200703106/GQlogo.jpg';
      } else if (src.toLowerCase() =='buzzfeed') {
        return 'http://barnraisersllc.com/wp-content/uploads/2015/12/buzzfeed-logo.png';
      } else if (src.toLowerCase() =='complex') {
        return 'http://images.complex.com/complex/image/upload/v1426696463/Complex_180x180_obsb5h.png';
      } else if (src.toLowerCase() =='fox') {
        return 'https://pbs.twimg.com/profile_images/572924972104839168/QfSnx_Mu.png';
      } else if (src.toLowerCase() =='huffington post') {
        return 'http://static.wixstatic.com/media/5ba28b_ba693d2a1acf4b6f883a6a72ac2e62f6.png/v1/fit/w_600,h_512/5ba28b_ba693d2a1acf4b6f883a6a72ac2e62f6.png';
      } else if (src.toLowerCase() =='blavity') {
        return 'http://blavity.com/wp-content/uploads/2015/12/Blavity.png';
      } else if (src.toLowerCase() =='al jazeera') {
        return 'http://static.dnaindia.com/sites/default/files/styles/square/public/2015/03/26/321952-al-jazeera-logo.png?itok=sfH-fRQd';
      } else if (src.toLowerCase() =='washington post') {
        return 'http://purebarre.com/wp-content/uploads/2015/12/Washington-post-logo-thumb.jpg';
      } else if (src.toLowerCase() =='the atlantic') {
        return 'http://journalism.nyu.edu/wp-content/uploads/logo-publication-the-atlantic.png';
      } else if (src.toLowerCase() =='the root') {
        return 'https://pbs.twimg.com/profile_images/517418757702963200/MfhBCTzG.jpeg';
      } else if (src.toLowerCase() =='black enterprise') {
        return 'https://pbs.twimg.com/profile_images/660082410382602240/MQCpH3x5.png';
      } else if (src.toLowerCase() =='lgbt feed') {
        return 'http://cdn.lgbtfeed.com/Files/2379/09a96854-8082-4bc5-9b71-b7151879f42d.png';
      } else if (src.toLowerCase() =='mic') {
        return 'https://pbs.twimg.com/profile_images/668821647860846593/vHMZRbG8.png';
      }

    },
    //rendering rows within list view
    renderEntry: function(entry) {
    	var logo = this.getLogo(entry.newsSource);
    	var title = null;
    	if (typeof entry.title.text == 'undefined')
			{
				title = entry.title;
			} else
			{
				title = entry.title.text;
			}
    	if (entry.imageSource && entry.image.src.indexOf('trans.gif') == -1)
    	{

    		return (
			<ArticlePreview
				category={entry.category}
				postTime={entry.postTime}
				entryBrand={entry.newsSource}
				key={entry.title.text}
				categoryPress={this.onCategoryDetailsPress}
				src={{uri:logo}}
				source={{uri: entry.image.src }}
				text={title}
				onPress={() => this.onArticleDetailsPress(entry)} />
			);
    	} else if (entry.image.src.indexOf('trans.gif') > 0 || entry.imageSource == false)
    	{
    		return (
			<ArticlePreviewAlt
				category={entry.category}
				postTime={entry.postTime}
				entryBrand={entry.newsSource}
				key={entry.title.text}
				categoryPress={this.onCategoryDetailsPress}
				selected={false}
				src={{uri:logo}}
				description={entry.desc}
				text={title}
				onPress={() => this.onArticleDetailsPress(entry)} />
			);
    	}
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
		//pass props to details page
		this.props.navigator.push({
			name: 'articledetails',
			passProps: {
				entry: entry,
			}
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
		backgroundColor: "#333333",
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
