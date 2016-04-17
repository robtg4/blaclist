var React = require('react-native');
var { View, Image, StyleSheet, Text, ListView, TouchableHighlight, ScrollView} = React;

//additional libraries
var Spinner = require('react-native-spinkit');
var NavigationBar = require('react-native-navbar');
//dynamic component references + libraries
var ArticlePreview = require('./exp_base_components/article-preview');
var ArticlePreviewAlt = require('./exp_base_components/article-preview-alt');
var Api = require('../utils/api');
var ArticleDetails = require('./exp_base_components/article-details');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	componentWillMount: function() {
	},
	//on first login (and all new logins)
	//need to pull onboarding keywords that indicate user interests
	//so that we can pull the appropiate feeds
	componentDidMount: function() {
		//console.log(this.state.user);
		var personalFeed = null;


	},
	//states of this components
	getInitialState: function() {
		return {
			user: null,
			personalFeed: null,
			selected: 'Home',
			dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
      }),
		}
	},
    //gettign data for rss feed based on user interests
	fetchData: function(personalFeed) {
		var that = this;
    Api.getTrends(token)
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
				/*if (!this.state.isLoaded) {
            return this.renderLoadingView();
        }*/
        /* return <View style={styles.container}>
			    {this.renderListView()}
		    </View>
				*/
				var entry = false;
				return <View>
				<ScrollView
					centerContent={true}
					showsHorizontalScrollIndicator={true}
					directionalLockEnabled={true}
					contentContainerStyle={styles.menuStyle}
					horizontal={true} >
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#Cuba</Text>
						</View>
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#WorldPoetryDay</Text>
						</View>
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#BlackLivesMatter</Text>
						</View>
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#CubaVisit</Text>
						</View>
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#DoYourJobHouseGOP</Text>
						</View>
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#FlintWaterCrisis</Text>
						</View>
						<View style={styles.wordPadding}>
							<Text style={styles.trendingText}>#MakeDonaldDrumpfAgain</Text>
						</View>
				</ScrollView>
				<ArticlePreviewAlt
					selected={true}
					category={'#DoYourJobHouseGOP!'}
					categoryPress={() => {}}
					key={1}
					postTime={'2 hours ago'}
					entryBrand={'@JacksonLee'}
					src={{uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAajAAAAJGY5Yzc1ZDlmLTY1NTEtNDRhZi04YzQ1LWZkYWVhYTEyYmU1Ng.png'}}
					description={'#DoYourJobHouseGOP! @HouseGOP will recess w/out action on the Zika virus, opioid addiction tragedy or #FlintWaterCrisis. Unbelievable.'}
					text={'#DoYourJobHouseGOP!'}
					onPress={() => {}} />
				<ArticlePreviewAlt
					selected={true}
					categoryPress={() => {}}
					key={2}
					category={'#DoYourJobHouseGOP!'}
					postTime={'1 hour ago'}
					entryBrand={'@Dano094'}
					src={{uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAajAAAAJGY5Yzc1ZDlmLTY1NTEtNDRhZi04YzQ1LWZkYWVhYTEyYmU1Ng.png'}}
					description={'What has the House GOP has done to help American families. Hint: Very little.'}
					text={'What has the House GOP has done to help American families?'}
					onPress={() => {}} />
				<ArticlePreviewAlt
					selected={true}
					categoryPress={() => {}}
					key={3}
					category={'#DoYourJobHouseGOP!'}
					postTime={'1 hour ago'}
					entryBrand={'@Dano094'}
					src={{uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAajAAAAJGY5Yzc1ZDlmLTY1NTEtNDRhZi04YzQ1LWZkYWVhYTEyYmU1Ng.png'}}
					description={'What has the House GOP has done to help American families. Hint: Very little.'}
					text={'What has the House GOP has done to help American families?'}
					onPress={() => {}} />
				<ArticlePreviewAlt
					selected={true}
					category={'#DoYourJobHouseGOP!'}
					categoryPress={() => {}}
					key={4}
					postTime={'2 hours ago'}
					entryBrand={'@JacksonLee'}
					src={{uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAajAAAAJGY5Yzc1ZDlmLTY1NTEtNDRhZi04YzQ1LWZkYWVhYTEyYmU1Ng.png'}}
					description={'#DoYourJobHouseGOP! @HouseGOP will recess w/out action on the Zika virus, opioid addiction tragedy or #FlintWaterCrisis. Unbelievable.'}
					text={'#DoYourJobHouseGOP!'}
					onPress={() => {}} />
				<ArticlePreviewAlt
					selected={true}
					categoryPress={() => {}}
					key={5}
					category={'#DoYourJobHouseGOP!'}
					postTime={'1 hour ago'}
					entryBrand={'@Dano094'}
					src={{uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAajAAAAJGY5Yzc1ZDlmLTY1NTEtNDRhZi04YzQ1LWZkYWVhYTEyYmU1Ng.png'}}
					description={'What has the House GOP has done to help American families. Hint: Very little.'}
					text={'What has the House GOP has done to help American families?'}
					onPress={() => {}} />
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
	trendingText: {
		color: 'white',
		fontSize: 25,
		fontFamily: 'Bebas Neue',
	},
	wordPadding: {
		padding: 10,
	},
	menuStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'black',
		height: window.height/3.5,
		alignItems:'flex-end',
	},
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
