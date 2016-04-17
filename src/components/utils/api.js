//api connector to external data
var React = require('react-native');

module.exports = {
	getVideos: function(token) {

	},
	getArticles: function(token) {
		console.log(token);
		var API_URL = "http://162.243.112.29/api/v1/feed?access_token="+token;
		var that = this;
    return fetch(API_URL).then((response) => response.json())
	},
	getTrends: function(token) {

	},
	getCauses: function(token) {

	},
};
