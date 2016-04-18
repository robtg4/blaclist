var React = require('react-native');
var { View, Image, StyleSheet, Text, ListView, TouchableHighlight,ScrollView} = React;

//additional libraries
var Spinner = require('react-native-spinkit');
var NavigationBar = require('react-native-navbar');

//dynamic component references + libraries
var ArticlePreview = require('./exp_base_components/article-preview');
var Api = require('../utils/api');
var ArticleDetails = require('./exp_base_components/article-details');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	componentWillMount: function() {
	},
	componentDidMount: function() {
		//console.log(this.state.user);
	},
	//states of this components
	getInitialState: function() {
		return {
			user: null,
			isLoaded: false,
			dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
		}
	},
  //gettign data for rss feed based on user interests
	fetchData: function() {
		//making call to API to get users feed
		//via their user token, using sample token for now
		var that = this;
		var sample_token = "Uice4v-dLKszEzsSe-kbe9m-zSS76FAfzqGg7wOx4oE";
		var API_URL = "http://162.243.112.29/api/v1/feed?access_token="+sample_token;
		fetch(API_URL)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				that.setState({
					dataSource : that.state.dataSource.cloneWithRows(json),
					isLoaded   : true,
				});
			});
	},
	//rendering component
	render: function() {
				if (!this.state.isLoaded) {
					this.fetchData();
          return this.renderLoadingView()
        }
				return (
					<View style={styles.container}>
						{this.renderListView()}
	    		</View>
				);
	},
	//loading render
	renderLoadingView: function() {
			console.log("Rendering Loading View");
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
            dataSource={this.state.dataSource}
            initialListSize={5}
						renderScrollComponent={this._renderScroll}
            pageSize={5}
            renderRow={this.renderEntry} />
      );
  },
	_renderScroll: function() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} />
    );
  },
  //rendering rows within list view
  renderEntry: function(entry) {
  		return (
				<ArticlePreview
					postTime={"2 Days Ago"}
					entryBrand={entry.author_name}
					key={entry.id+entry.title}
					src={{uri:entry.logo}}
					source={{uri: entry.lead_image}}
					text={entry.title}
					onPress={() => this.onArticleDetailsPress(entry)} />
			);
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

///sample data
/* return <View>
	<ArticlePreview
		postTime={'30 minutes ago'}
		entryBrand={'Blavity'}
		key={'ICYMI: President Obama’s Town Hall #GunsInAmerica'}
		src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}}
		source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/obama_gun_town_hall1-696x364.jpg?0fd4d3' }}
		text={'ICYMI: President Obama’s Town Hall #GunsInAmerica'}
		onPress={() => this.onArticleDetailsPress(entry)} />
	<ArticlePreview
		postTime={'1 hour ago'}
		entryBrand={'Blavity'}
		key={'First Look At Cast Of Nat Turner Biopic “The Birth Of A Nation”'}
		src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}}
		source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/birth.jpg?0fd4d3' }}
		text={'First Look At Cast Of Nat Turner Biopic “The Birth Of A Nation”'}
		onPress={() => this.onArticleDetailsPress(entry)} />
	<ArticlePreview
		postTime={'30 minutes ago'}
		entryBrand={'Blavity'}
		key={'ICYMI: Presidemnt Obama’s Town Hall #GunsInAmerica'}
		src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}}
		source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/obama_gun_town_hall1-218x150.jpg?0fd4d3' }}
		text={'ICYMI: President Obama’s Town Hall #GunsInAmerica'}
		onPress={() => this.onArticleDetailsPress(entry)} />
</View>*/
