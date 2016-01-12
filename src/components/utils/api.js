//api connector to external data
var React = require('react-native');
//libraries
var RSS = require('../stores/rss-feeds');
var VIDEO = require('../stores/video-feeds');

module.exports = {

	fbDataFetch: function(id, token) {
		var rootUrlFB = 'https://graph.facebook.com/v2.3/'+id+'?fields=name,email&access_token='+token;

		//return promise as well
		return fetch(rootUrlFB)
			.then(function(response) {
				return response.json()
			})
			.then(function(json) {
				return {
					username: json.name,
					email: json.email,
				}
		    });
	},
	fetchRSS: function(personalFeed) {
		console.log('Inside fetch_RSS');
		var RSS_custom = [];
		//get category based feeds
		for (var x = 0; x < personalFeed.length; x++) {
			for (var i = 0; i < RSS.FEEDS.length; i++) {
				if (RSS.FEEDS[i].name.toLowerCase().indexOf(personalFeed[x].toLowerCase()) > -1) {
					for (var w = 0; w < RSS.FEEDS[i].length; w++) {
						//RSS_custom.push(this.urlCleanse(RSS.FEEDS[i][w]));
					}
				}
			}
		}
		//always add default array
		for (i = 0; i < RSS.FEEDS[RSS.FEEDS.length-1]; i++) {
			for (x = 0; x < RSS.FEEDS[i].length; x++) {
				RSS_custom.push(RSS.FEEDS[i][x]);
			}
		}
	  return RSS_custom;
	},

	fetchVideo: function(personalFeed) {
		var Video_custom = [];
		//go through the user array given
		for (var x = 0; x < personalFeed.length; x++) {
			for (var i = 0; i < VIDEO.FEEDS.length; i++) {
				if (VIDEO.FEEDS[i].name.toLowerCase().indexOf(personalFeed[x].toLowerCase()) > -1) {
					for (var w = 0; w < VIDEO.FEEDS[i].length; w++)
					{
						Video_custom.push(VIDEO.FEEDS[i][w]);
					}
				}
			}
		}
		//always add default array
		for (x = 0; x < VIDEO.FEEDS[VIDEO.FEEDS.length-1].length; x++) {
			//console.log(VIDEO.FEEDS[VIDEO.FEEDS.length-1][x]);
			Video_custom.push(VIDEO.FEEDS[VIDEO.FEEDS.length-1][x]);
		}
		//get json from all the different
	    return Video_custom;
	},


}
