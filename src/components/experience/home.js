var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	ScrollView, 
} = React;

//additional libraries
var Parse = require('parse/react-native');
//var Reflux = require('reflux');

//dynamic component references
var ArticleView = require('./article-view/article-view');
var Api = require('../utils/api');
var FeedStore = require('../stores/feed-store');
//var Actions = require('../../actions');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	/*
	mixins : [
		Reflux.listenTo(FeedStore, 'onChange')
	],
	*/
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })

		//get the latest articles on page load
		//this will pre-fill out articles state 
		FeedStore.getArticles()
			.then((data) => {
		        this.setState({ articles: data });
		  	});
	}, 
	getInitialState: function() {
		return {
			user: null, 
			username: null, 
			articles: [], 
		}
	},
	render: function() {

		var readings = this.state.articles; 

		return (
			<ScrollView>
				<ArticleView
					category={'Comedy'}
					key={1}
					heartText={'2.9k'}
					categoryPress={this.dummy}
					selected={false}
					source={require('../img/test_view_1.png')}
					text={'These 3 black comedians are finally being honored for the ways they paved & the history they made'}
					onPress={this.dummy} />
				<ArticleView
					category={'City Life'}
					key={2}
					heartText={'299'}
					categoryPress={this.dummy}
					selected={false}
					source={require('../img/test_view_2.png')}
					text={'portland forecast: approaching weekend storm could rival halloween deluge'}
					onPress={this.dummy} />
				<ArticleView
					category={'Music'}
					key={3}
					heartText={'250k'}
					categoryPress={this.dummy}
					selected={false}
					source={require('../img/test_view_3.png')}
					text={'kendrick lamar answers furgeson criticism with new song'}
					onPress={this.dummy} />
				{this.renderArticleFeed(readings)}
			</ScrollView>
		);
	}, 
	renderArticleFeed: function(readings) {
		var that = this;
		//call to api to get articles from rss/api var Articles = 
		return readings.slice(0,4).map(function(article, i) {
        	console.log("========================");
        	console.log(article.title);
        	console.log(article.mediaGroups[0].contents[0].thumbnails[0].url);

			return <ArticleView
					category={'Music'}
					key={i}
					heartText={'2.9k'}
					categoryPress={() => { that.dummy }}
					selected={false}
					source={{uri: article.mediaGroups[0].contents[0].thumbnails[0].url }}
					text={article.title}
					onPress={() => { that.dummy }} />
		});
		
	}, 
	dummy: function() {

	}, 
	/*
	onChange: function(event, articles) {
		this.setState({articles: articles}); //trigers re-render of component
	}
	*/

});

styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}
});