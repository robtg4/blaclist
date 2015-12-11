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
		this.setState({ articles: FeedStore.getArticles() });
	}, 
	getInitialState: function() {
		return {
			user: null, 
			username: null, 
			articles: [], 
		}
	},
	render: function() {
		if (!this.state.user)
		{
			return <Text style={styles.label}>Loading...</Text>
		} else 
		{
			var username = this.state.user.get('username');
			console.log(this.state.username);
		}

		return (
			<ScrollView>
				<ArticleView
					category={'Comedy'}
					key={1}
					heartText={'2.9k'}
					categoryPress={this.articleFeed}
					selected={false}
					source={require('../img/test_view_1.png')}
					text={'These 3 black comedians are finally being honored for the ways they paved & the history they made'}
					onPress={this.articleFeed} />
				<ArticleView
					category={'City Life'}
					key={2}
					heartText={'299'}
					categoryPress={this.articleFeed}
					selected={false}
					source={require('../img/test_view_2.png')}
					text={'portland forecast: approaching weekend storm could rival halloween deluge'}
					onPress={this.articleFeed} />
				<ArticleView
					category={'Music'}
					key={3}
					heartText={'250k'}
					categoryPress={this.articleFeed}
					selected={false}
					source={require('../img/test_view_3.png')}
					text={'kendrick lamar answers furgeson criticism with new song'}
					onPress={this.articleFeed} />
			</ScrollView>
		);
	}, 
	articleFeed: function() {
		//var that = this;
		//call to api to get articles from rss/api var Articles = 
		/* 
		return Keywords.map(function(keyword, i) {

			return <KeywordBox 
				key={i} 
				text={keyword} 
				onPress={ () => { that.onKeywordPress(i, keyword, newData) }}
				selected={newData[i]} />
		});
		*/

		//test to get rss feed data on console 
		console.log(this.state.articles);
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